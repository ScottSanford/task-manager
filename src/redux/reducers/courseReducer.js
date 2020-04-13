import initialState from './initialState'

export default function listReducer(state = initialState.lists, action) {
	switch (action.type) {
		case 'CREATE_COURSE_SUCCESS':
			return [...state, { ...action.course }]
		case 'LOAD_COURSES_SUCCESS':
			return action.courses
		case 'UPDATE_COURSE_SUCCESS':
			return state.map(course =>
				course.id === action.course.id ? action.course : course
			)
		case 'DELETE_COURSE_OPTIMISTIC':
			return state.filter(course => course.id !== action.course.id)
		default:
			return state
	}
}