import type { LayoutLoad } from './$types';

export const load = (({ url }) => {
	return {
		currentRoute: url.pathname
	};
}) satisfies LayoutLoad;
