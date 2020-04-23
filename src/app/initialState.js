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
	lists: [
		{
			title: 'To do',
			id: '2ef0ijffe',
			cards: [
				{
					title: 'Book flights',
					id: 0,
					priority: 'low',
					dueDate: 'in 12 days',
				},
				{
					title: 'Schedule Zoom Meeting',
					id: 0,
					priority: 'medium',
					dueDate: 'in 15 days',
				}
			]
		},
		{
			title: 'In Progress',
			id: '0ff3ggffe',
			cards: [
				{
					title: 'Practice React Redux',
					id: 0,
					priority: 'low',
					dueDate: 'in 6 days',
				},
				{
					title: 'Get a job, bring home the bacon, party',
					id: 2,
					priority: 'high',
					dueDate: 'in 2 days',
				}
			]
		},
		{
			title: 'Done',
			id: '09fj409j3',
			cards: [
				{
					title: 'Prepare for meetings',
					id: 1,
					priority: 'medium',
					dueDate: 'today',
				}
			]
		},
	],
}