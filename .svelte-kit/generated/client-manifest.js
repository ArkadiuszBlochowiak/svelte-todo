export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\done\\index.svelte"),
	() => import("..\\..\\src\\routes\\todo\\index.svelte"),
	() => import("..\\..\\src\\routes\\all\\index.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"done": [[0, 3], [1]],
	"todo": [[0, 4], [1]],
	"all": [[0, 5], [1]]
};