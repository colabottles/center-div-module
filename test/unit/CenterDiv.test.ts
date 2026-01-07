import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { axe } from 'vitest-axe'
import CenterDiv from '../../src/runtime/components/CenterDiv.vue'

describe('CenterDiv', () => {
  it('renders with default props', () => {
    const wrapper = mount(CenterDiv, {
      slots: {
        default: '<button>Test</button>',
      },
    })

    expect(wrapper.find('section').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('Test')
  })

  it('renders as custom element', () => {
    const wrapper = mount(CenterDiv, {
      props: { as: 'article' },
    })

    expect(wrapper.find('article').exists()).toBe(true)
  })

  it('applies minBlockSize prop', () => {
    const wrapper = mount(CenterDiv, {
      props: { minBlockSize: '100vh' },
    })

    const el = wrapper.element as HTMLElement
    expect(el.style.minBlockSize).toBe('100vh')
  })

  it('has no accessibility violations with button', async () => {
    const wrapper = mount(CenterDiv, {
      slots: {
        default: '<button>Accessible Button</button>',
      },
    })

    const results = await axe(wrapper.element)
    expect(results.violations).toHaveLength(0)
  })

  it('applies horizontal centering styles', () => {
    const wrapper = mount(CenterDiv, {
      props: { axis: 'horizontal' },
    })

    const el = wrapper.element as HTMLElement
    expect(el.style.justifyItems).toBe('center')
    expect(el.style.alignItems).toBe('')
  })

  it('applies vertical centering styles', () => {
    const wrapper = mount(CenterDiv, {
      props: { axis: 'vertical' },
    })

    const el = wrapper.element as HTMLElement
    expect(el.style.alignItems).toBe('center')
    expect(el.style.justifyItems).toBe('')
  })

  it('applies both axes centering by default', () => {
    const wrapper = mount(CenterDiv)

    const el = wrapper.element as HTMLElement
    expect(el.style.placeItems).toBe('center')
  })
})
