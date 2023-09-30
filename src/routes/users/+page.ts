import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response: Response = await fetch(`https://jsonplaceholder.typicode.com/users`);

	return { users: await response.json() };
};
