export const heroBlock = {
	name: 'hero',
	label: 'Hero',
	ui: {
		defaultItem: {
			tagline: "Here's some text above the other text",
			headline: 'This Big Text is Totally Awesome',
			text: 'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
		},
	},
	fields: [
		{
			type: 'string',
			label: 'Tagline',
			name: 'tagline',
		},
		{
			type: 'string',
			label: 'Headline',
			name: 'headline',
		},
		{
			type: 'string',
			label: 'Text',
			name: 'text',
			ui: {
				component: 'textarea',
			},
		},
	],
};

export const featureBlock = {
	name: 'features',
	label: 'Features',
	fields: [
		{
			type: 'object',
			label: 'Feature Items',
			name: 'features',
			list: true,
			fields: [
				{
					type: 'string',
					label: 'Title',
					name: 'title',
				},
				{
					type: 'string',
					label: 'Text',
					name: 'text',
				},
			],
		},
	],
};

export const contentBlock = {
	name: 'content',
	label: 'Content',
	ui: {
		defaultItem: {
			body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
		},
	},
	fields: [
		{
			type: 'string',
			ui: {
				component: 'textarea',
			},
			label: 'Body',
			name: 'body',
		},
	],
};
