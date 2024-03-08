import { defineMDSveXConfig, escapeSvelte } from 'mdsvex';
import { glow } from 'nue-glow';
import { resolve } from 'path';
import rehypeSlug from 'rehype-slug';
import codeImport from 'remark-code-import';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const mdsvexOptions = defineMDSveXConfig({
	extensions: ['.md'],
	layout: resolve(__dirname, './src/lib/mdsvex/components/mdsvex.svelte'),
	smartypants: {
		quotes: false,
		ellipses: false,
		backticks: false,
		dashes: false
	},
	highlight: {
		highlighter: async (code, language) => {
			const highlighter = glow(code, { language });
			const html = escapeSvelte(highlighter);

			return code.includes('<')
				? `<section class="card card-outlined"><div>${escapeSvelte(
						code
				  )}</div><div class="code-block"><button class="copy"></button><span class="lang">${language}</span><pre glow>${html}</pre><span id="code-to-copy" style="display: none;">${escapeSvelte(
						code
				  )}</span></div></section>`
				: `<div class="code-block"><button class="copy"></button><span class="lang">${language}</span><pre glow>${html}</pre><span style="display: none;">${escapeSvelte(
						code
				  )}</span></div>`;
		}
	},
	rehypePlugins: [
		// @ts-expect-error just ignore it
		rehypeSlug
	],
	// @ts-expect-error just ignore it
	remarkPlugins: [remarkGfm, remarkUnwrapImages, codeImport]
});
