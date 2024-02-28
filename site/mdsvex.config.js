import {
	transformerMetaHighlight,
	transformerNotationDiff,
	transformerNotationErrorLevel,
	transformerNotationHighlight,
	transformerRenderWhitespace
} from '@shikijs/transformers';
import { escapeSvelte } from 'mdsvex';
import { resolve } from 'path';
import rehypeSlug from 'rehype-slug';
import codeImport from 'remark-code-import';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import { getHighlighter } from 'shiki/bundle-web.mjs';
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

console.log('LAYOUT:>> ', resolve(__dirname, './src/lib/mdsvex/components/mdsvex.svelte'));

/** @type {import('mdsvex').MdsvexOptions} */
export const mdsvexOptions = {
	extensions: ['.md'],
	layout: resolve(__dirname, './src/lib/mdsvex/components/mdsvex.svelte'),
	smartypants: {
		quotes: true,
		ellipses: false,
		backticks: true,
		dashes: false
	},
	highlight: {
		highlighter: async (code, lang) => {
			const highlighter = await getHighlighter({
				langs: ['javascript', 'typescript', 'svelte', 'html', 'text', 'bash'],
				themes: ['github-dark-dimmed']
			});

			const htmlHighlighted = highlighter.codeToHtml(code.trim(), {
				// @ts-expect-error lang is not undefined
				lang,
				theme: 'github-dark-dimmed',
				transformers: [
					transformerNotationDiff(),
					transformerMetaHighlight(),
					transformerNotationErrorLevel(),
					transformerRenderWhitespace(),
					transformerNotationHighlight()
				]
			});

			await highlighter.loadLanguage('svelte', 'typescript', 'bash');
			const html = escapeSvelte(htmlHighlighted);

			return `
				<div class="code-block">
					<button class="copy"></button>
					<span class="lang">${lang}</span>
					{@html \`${html}\` }
					<span style="display: none;">${escapeSvelte(code)}</span>
				</div>
			`;
		}
	},
	// @ts-expect-error just ignore it
	rehypePlugins: [rehypeSlug],
	// @ts-expect-error just ignore it
	remarkPlugins: [remarkUnwrapImages, codeImport, remarkGfm]
};
