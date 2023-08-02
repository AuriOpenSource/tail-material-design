import type { LayoutLoad } from "./$types.js";

export const load = (async ({url}) => {
    return {
        currentRoute: url.pathname
    }
}) satisfies LayoutLoad