import { render } from '@testing-library/svelte'
import { filtered } from '../../../src/store'
import List from '$lib/components/list.svelte'


const fakeUsers = [
    {
        name: 'Alex'
    },
    {
        name: 'Tim'
    },
    {
        name: 'Derek'
    }
]


it('Render list', () => {
    filtered.set(fakeUsers)

    const {getByText} = render(List)

    expect(getByText('Alex')).toBeInTheDocument()
})
