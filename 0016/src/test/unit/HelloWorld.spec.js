import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {

    it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
    props: { msg }
 })
//  expect(wrapper.text()).toMatch(msg)
const h1Element = wrapper.find('h1.green');
expect(h1Element.text()).toBe(msg)

 })
})