// Import styles, initialize component theme here.
// import '../src/common.css';

import '../src/app.css';
import { items, filtered } from '../src/store';

const fakeUsers: Array<object> = [
	{
		name: 'Alex'
	},
	{
		name: 'Petr'
	},
	{
		name: 'Dima'
	}
];

items.set(fakeUsers);
filtered.set(fakeUsers);
