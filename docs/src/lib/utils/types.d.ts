interface Icon {
	outline: string;
	filled: string;
}

export interface Route {
	name: string;
	href: string;
	icon: Icon;
}

export type Routes = Route[];

export interface NavrailType {
	name: 'menu' | 'fab';
	event: MouseEvent;
}
export interface NavrailTypes {
	chosen: NavrailType;
}
