import Toggle from "$lib/components/toggle.svelte"
import { render, fireEvent } from "@testing-library/svelte"

it('Render list', async () => {
    const { container } = render(Toggle)

    expect(() => {container}).not.toThrow()

    const component = container.getElementsByClassName('form-check-input')[0]
    await fireEvent.click(component)
    expect(window.document.body.classList.contains('dark-mode')).toBeTruthy()
})