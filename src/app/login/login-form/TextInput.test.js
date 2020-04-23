import React from 'react'
import TextInput from './TextInput'
import { mount } from 'enzyme'

function render(args) {
	const defaultProps = {
		icon: '',
		iconStyle: {},
		onChange: () => { },
		type: 'text',
		value: '',
	}

	const props = { ...defaultProps, ...args }
	return mount(<TextInput {...props} />)
}

describe('TextInput Component', () => {

	it('should have type of "text" if no text prop provided', () => {
		const wrapper = render()
		expect(wrapper.find('input').prop('type')).toEqual('text')
	})

	it('should have type of "password" if text prop provided', () => {
		const wrapper = render({ type: 'password' })
		expect(wrapper.find('input').prop('type')).toEqual('password')
	})

	it('should have a "user" icon when provided', () => {
		const wrapper = render({ icon: 'user' })
		expect(wrapper.find('.fa-user')).toHaveLength(1)
	})

	it('should have a "pencil" icon when no icon is provided', () => {
		const wrapper = render()
		expect(wrapper.find('.fa-pencil')).toHaveLength(1)
	})

	it('should trigger the onChange function', () => {
		const handleInputChange = jest.fn()
		const wrapper = render({ onChange: handleInputChange })
		const event = {
			target: { value: 'NFL Draft 2020' }
		}
		wrapper.find('.TextInput__Input').simulate('change', event)
		// expect(wrapper.find('.TextInput__Input').props().value).toEqual('NFL Draft 2020')
		expect(handleInputChange).toHaveBeenCalled()
	})
})
