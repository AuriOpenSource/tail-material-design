import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...classes: ClassValue[]) {
	return twMerge(clsx(classes));
}

export function isCurrentRoute(current: string, path?: string | null) {
	if (path) return current === path || current.includes(path);
}
export { default as routes } from './routes';
