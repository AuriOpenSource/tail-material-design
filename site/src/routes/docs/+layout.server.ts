import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	const docs: Post[] = [];
	const paths = import.meta.glob<Post[]>('/documentation/**/index.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		console.log(path.split('/'));

		const slug = path.split('/').at(-2)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			post.published && docs.push(post);
		}
	}

	return { docs };
}) satisfies LayoutServerLoad;

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
	thumb: string;
	theme: string;
}
