import { mount } from '@vue/test-utils'
import pText from '@/components/custom/p-text.vue'


describe('<p-text>', () => {
  const wrapper = mount(pText);
  test('does component exist', () => {
    expect(wrapper.exists()).toBe(true)
  })

  test('check element text',async ()=>{
   await wrapper.setProps({text:"Hello World"})
    expect(wrapper.vm.text).toBe("Hello World")
  })
})