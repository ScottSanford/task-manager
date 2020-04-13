// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

module.exports = {
	jest: config => {
		config.moduleNameMapper = Object.assign({}, config.moduleNameMapper, {
			'^dnd-core$': 'dnd-core/dist/cjs',
			'^react-dnd$': 'react-dnd/dist/cjs',
			'^react-dnd-html5-backend$': 'react-dnd-html5-backend/dist/cjs',
			'^react-dnd-touch-backend$': 'react-dnd-touch-backend/dist/cjs',
			'^react-dnd-test-backend$': 'react-dnd-test-backend/dist/cjs',
			'^react-dnd-test-utils$': 'react-dnd-test-utils/dist/cjs',
		})
		return config
	},
}