import React from 'react'
import LoginForm from './LoginForm'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

function render() {

	return mount(
		<MemoryRouter>
			<LoginForm />
		</MemoryRouter>
	)
}

describe('LoginForm Component', () => {

	it('should have two inputs', () => {
		const wrapper = render()
		expect(wrapper.find('[data-test="textInput"]')).toHaveLength(2)
	})

	it('should have a submit button', () => {
		const wrapper = render()
		expect(wrapper.find('[data-test="loginSubmitButton"]')).toHaveLength(1)
	})

})
