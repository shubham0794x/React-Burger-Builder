import React from 'react'


import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'


configure({adapter: new Adapter()});
let wrapper;

describe('<NavigationItems/>', () => {

    beforeEach(() => {
          wrapper = shallow(<NavigationItems/>);
        
    });
        it('should  render two navit if not auth', () => {
            expect(wrapper.find(NavigationItem)).toHaveLength(2);
        }); 
        it('should  render two navit if not auth', () => {
            wrapper.setProps({
                isAuthenticated: true
            });
            expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true);
        });

        it('should  render 3 navit if  auth', () => {
            wrapper.setProps({
                isAuthenticated: true
            });
            expect(wrapper.find(NavigationItem)).toHaveLength(3);
        });
});