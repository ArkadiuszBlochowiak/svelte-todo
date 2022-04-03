const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\done\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\todo\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\all\\index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/done/index.svelte
	[/^\/done\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/todo/index.svelte
	[/^\/todo\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/all/index.json.js
	[/^\/all\.json$/],

	// src/routes/all/index.svelte
	[/^\/all\/?$/, [c[0], c[5]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];