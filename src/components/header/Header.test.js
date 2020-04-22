import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'
import { NavLink } from 'react-router-dom'


describe('Header Component', () => {

	it('should have 2 links', () => {
		const wrapper = shallow(<Header />)
		expect(wrapper.find(NavLink)).toHaveLength(2)
	})
})