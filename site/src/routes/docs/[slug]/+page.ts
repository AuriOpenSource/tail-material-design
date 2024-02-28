import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';


/**
 * The `interface Post` is defining the structure of an object that represents a blog post.
 * It has the following properties
 */
interface Post {
	/** blog post title */
	title: string;
	/** blog post description */
	description: string;
	/** blog post slug for using on `<a/>` */
	slug: string;
	/** blog post publish date */
	published: string;
	/** blog post categories */
	category: string | string[];
	/** series of posts */
	series?: string;
	/** is published or not */
	draft?: string;
}

interface ContentType {
	metadata: Post;
	default: () => unknown;
}

export const load = (async ({ params }) => {
	try {
		const post = (await import(`../../../../documentation/${params.slug}/index.md`)) as ContentType;
		console.log('+page.ts', post);
		
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}) as PageLoad;