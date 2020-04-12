import React from 'react'
import CardList from './CardList'
import { shallow } from 'enzyme'

function render(args) {
	const defaultProps = {
		title: ''
	}

	const props = { ...defaultProps, ...args }
	return shallow(<CardList {...props} />)
}

describe('CardList Component', () => {

	it('should display the correct title passed through props', () => {
		const wrapper = render({ title: 'Chicago Bears' })
		expect(wrapper.find('.card-list__title').text()).toEqual('Chicago Bears')
	})
})