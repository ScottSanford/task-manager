import React from 'react'
import { mount } from 'enzyme'
import Header from './Header'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'


describe('Header Component', () => {

	it('should have 2 nav links', () => {
		const wrapper = mount(
			<Router>
				<Header />
			</Router>
		)
		expect(wrapper.find(NavLink)).toHaveLength(2)
	})
})