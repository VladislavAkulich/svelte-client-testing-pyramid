import { writable } from 'svelte/store';

export const items = writable<Array<object>>([]);
export const filtered = writable<Array<object>>([]);
