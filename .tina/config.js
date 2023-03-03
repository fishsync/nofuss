import { defineConfig } from 'tinacms';

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
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true,
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
				],
			},
		],
	},
});
