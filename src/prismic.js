import PrismicClient from '@prismicio/client';
// const API_ENDPOINT = "https://astro-prismic-demo.prismic.io/api/v2";
const API_ENDPOINT = 'https://craigfirst.cdn.prismic.io/api/v2';

const client = PrismicClient.Client(API_ENDPOINT);

export async function getAllPosts() {
	return client.query([PrismicClient.predicate.at('document.type', 'blog_post')]);
}

export async function getPage(uuid) {
	return client.getByUID('page', uuid, { pageSize: 1, page: 1 });
}
