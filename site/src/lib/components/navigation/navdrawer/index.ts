import { Dialog as SheetPrimitive } from 'bits-ui';
import { tv } from 'tailwind-variants';

import Content from './navdrawer-content.svelte';
import Header from './navdrawer-header.svelte';
import Item from './navdrawer-item.svelte';
import Overlay from './navdrawer-overlay.svelte';
import Portal from './navdrawer-portal.svelte';

const Root = SheetPrimitive.Root;
const Close = SheetPrimitive.Close;
const Trigger = SheetPrimitive.Trigger;

export {
	Close,
	Content,
	Header,
	Item,
	Root as NavDrawer,
	Close as NavDrawerClose,
	Content as NavDrawerContent,
	Header as NavDrawerHeader,
	Item as NavDrawerItem,
	Overlay as NavDrawerOverlay,
	Portal as NavDrawerPortal,
	Trigger as NavDrawerTrigger,
	Overlay,
	Portal,
	Root,
	Trigger
};

export const navdrawerVariants = tv({
	base: 'fixed min-w-[360px] z-20 h-full bg-surface-variant rounded-r-3xl p-3',
	variants: {
		side: {
			top: 'inset-x-0 top-0',
			bottom: 'inset-x-0 bottom-0',
			left: 'inset-y-0 left-0 h-full w-3/4 sm:max-w-sm',
			right: 'inset-y-0 right-0 h-full w-3/4 sm:max-w-sm'
		}
	},
	defaultVariants: {
		side: 'right'
	}
});

export const navDrawerTransitions = {
	top: {
		in: {
			y: '-100%',
			duration: 500,
			opacity: 1
		},
		out: {
			y: '-100%',
			duration: 250,
			opacity: 1
		}
	},
	bottom: {
		in: {
			y: '100%',
			duration: 500,
			opacity: 1
		},
		out: {
			y: '100%',
			duration: 250,
			opacity: 1
		}
	},
	left: {
		in: {
			x: '-100%',
			duration: 500,
			opacity: 1
		},
		out: {
			x: '-100%',
			duration: 250,
			opacity: 1
		}
	},
	right: {
		in: {
			x: '100%',
			duration: 500,
			opacity: 1
		},
		out: {
			x: '100%',
			duration: 250,
			opacity: 1
		}
	}
};

export type Side = 'right' | 'top' | 'bottom' | 'left' | undefined;
