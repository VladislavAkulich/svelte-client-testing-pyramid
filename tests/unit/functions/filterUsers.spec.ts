import { filterUsers } from '$lib/functions/functions';

const testData: Array<object> = [
	{
		name: 'Alex'
	},
	{
		name: 'Tim'
	},
	{
		name: 'Derek'
	}
];

it('filer users function', () => {
	const result: Array<object> = filterUsers(testData, 'Alex');

	expect(result).toStrictEqual([{ name: 'Alex' }]);
});

it('filer users function with empty array', () => {
	const result: Array<object> = filterUsers([], 'Alex');

	expect(result).toStrictEqual([]);
});

it('filer users function with empty filter', () => {
	const result: Array<object> = filterUsers([], '');

	expect(result).toStrictEqual([]);
});

it('filer users function with few matches', () => {
	const result: Array<object> = filterUsers(testData, 'e');

	expect(result).toStrictEqual([{ name: 'Alex' }, { name: 'Derek' }]);
});
