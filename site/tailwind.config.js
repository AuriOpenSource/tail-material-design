import tmd3 from 'tail-material-design';
import { withMaterialColors } from 'tailwind-material-colors';
export default withMaterialColors(
	{
		content: ['./src/**/*.{html,js,svelte,ts}'],
		theme: {
			extend: {}
		},
		plugins: [tmd3]
	},
	{
		primary: '#00ff00'
	}
);
