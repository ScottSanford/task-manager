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

	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('should have two inputs', () => {
		const wrapper = render()
		expect(wrapper.find('.loginPage__form-input input')).toHaveLength(2)
	})

	it('should have a submit button', () => {
		const wrapper = render()
		expect(wrapper.find('.loginPage__button')).toHaveLength(1)
	})

	it('should call the "handleSubmit" function when the LOGIN button is clicked', () => {
		const wrapper = render()
		const instance = wrapper.find(<LoginForm />).instance()
		console.debug(instance)
		const spy = jest.spyOn(instance, 'handleSubmit')

		instance.forceUpdate()
		wrapper.find('.loginPage__button').simulate('click')
		expect(spy).toHaveBeenCalled()
	});

})
