import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'


describe('Header Component', () => {

	it('should have 2 links', () => {
		const wrapper = shallow(<Header />)
		expect(wrapper.find('.header__nav')).toHaveLength(2)
	})
})