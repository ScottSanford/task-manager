import React from 'react'
import TextInput from './TextInput'
import { mount } from 'enzyme'

function render(args) {
	const defaultProps = {
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
