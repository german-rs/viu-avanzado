import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import NavComponent from '@/components/NavComponent.vue'
import { RouterLinkStub } from '@vue/test-utils'

describe('NavComponent.vue', () => {
  /**
   * Prueba que verifica que los enlaces de navegación están presentes.
   */
  it('muestra los enlaces de navegación correctos', () => {
    const wrapper = mount(NavComponent, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub, // Simular RouterLink
        },
      },
    })

    const links = wrapper.findAllComponents(RouterLinkStub)
    expect(links).toHaveLength(4) // 4 enlaces: F & F, Inicio, Flora & Fauna, Contacto

    const linkTexts = links.map((link) => link.text())
    expect(linkTexts).toEqual(['F & F', 'Inicio', 'Flora & Fauna', 'Contacto'])
  })

  /**
   * Prueba que verifica que el botón de alternancia de navegación está presente y tiene los atributos correctos.
   */
  it('muestra el botón de alternancia de navegación con los atributos correctos', () => {
    const wrapper = mount(NavComponent, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub, // Simular RouterLink
        },
      },
    })

    const toggleButton = wrapper.find('.navbar-toggler')
    expect(toggleButton.exists()).toBe(true)
    expect(toggleButton.attributes('type')).toBe('button')
    expect(toggleButton.attributes('data-bs-toggle')).toBe('collapse')
    expect(toggleButton.attributes('data-bs-target')).toBe('#navbarSupportedContent')
    expect(toggleButton.attributes('aria-controls')).toBe('navbarSupportedContent')
    expect(toggleButton.attributes('aria-expanded')).toBe('false')
    expect(toggleButton.attributes('aria-label')).toBe('Toggle navigation')
  })
})
