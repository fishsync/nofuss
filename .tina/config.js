import { defineConfig } from 'tinacms';

import { contentBlock, featureBlock, heroBlock } from './config-blocks.js';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
	branch,
	clientId: '07247949-7073-44f5-9c03-c7e8ee55d182', // Get this from tina.io
	token: '8197f13d5b9ed8b1d5dd1db5f5caecdf81e90e07', // Get this from tina.io
	build: {
		outputFolder: 'admin',
		publicFolder: 'public',
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'public',
		},
	},
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Posts',
				path: 'content/posts',
				format: 'md',
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true,
					},
					{
						label: 'Category',
						name: 'category',
						type: 'string',
						options: [
							{
								value: 'movies',
								label: 'Movies',
							},
							{
								value: 'music',
								label: 'Music',
							},
						],
					},
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true,
					},
					{
						name: 'draft',
						label: 'Draft',
						type: 'boolean',
					},
					{
						label: 'Published',
						name: 'published',
						type: 'boolean',
					},
					{
						label: 'Partner',
						name: 'partner',
						type: 'boolean',
					},
					{
						label: 'Director',
						name: 'director',
						type: 'boolean',
					},
				],
			},
			{
				name: 'blog',
				label: 'Blog',
				path: 'src/pages/blog',
				format: 'mdx',
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true,
					},
					{
						type: 'datetime',
						name: 'pubDate',
						label: 'Published Date',
					},
					{
						type: 'string',
						name: 'description',
						label: 'Description',
						required: true,
					},
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true,
					},
					{
						type: 'object',
						list: true,
						name: 'blocks',
						label: 'Sections',
						templates: [heroBlock, featureBlock, contentBlock],
					},
				],
			},
		],
	},
});
