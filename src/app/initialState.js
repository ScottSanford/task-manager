export default {
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
				},
				{
					title: 'Schedule Zoom Meeting',
					id: 0,
					priority: 'medium',
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
				},
				{
					title: 'Get a job, bring home the bacon, party',
					id: 2,
					priority: 'high',
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
				}
			]
		},
	],
}