export default {
	projects: [
		{ title: 'Personal', icon: 'user', id: 'bafpvij' },
		{ title: 'Career', icon: 'briefcase', id: 'dogbvij' },
		{ title: 'Fitness', icon: 'bicycle', id: 'catphij' },
	],
	users: [
		{ firstName: 'Scott', lastName: 'Sanford', id: '123asdf' },
		{ firstName: 'Paige', lastName: 'Sanford', id: '124asdf' },
		{ firstName: 'Ryan', lastName: 'Gubricky', id: '126asdf' },
		{ firstName: 'Lauren', lastName: 'Gubricky', id: '123ahdf' }
	],
	tickets: {
		'ticket-1': { title: 'Book flights', id: 'ticket-1', priority: 'low', dueDate: 'in 12 days' },
		'ticket-2': { title: 'Schedule Zoom Meeting', id: 'ticket-2', priority: 'medium', dueDate: 'in 15 days' },
		'ticket-3': { title: 'Get a job', id: 'ticket-3', priority: 'high', dueDate: 'in 3 days' },
	},
	lists: {
		'list-1': {
			id: 'list-1',
			title: 'To do',
			ticketIds: ['ticket-1', 'ticket-2', 'ticket-3']
		},
		'list-2': {
			id: 'list-2',
			title: 'In Progress',
			ticketIds: []
		},
		'list-3': {
			id: 'list-3',
			title: 'Done',
			ticketIds: []
		},
	},
	listOrder: ['list-1', 'list-2', 'list-3'],
}