import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import FormComponent from '@/components/FormComponent.vue'

describe('FormComponent.vue', () => {
  /**
   * Prueba que muestra un mensaje de error cuando los campos del formulario están vacíos.
   * Se asegura de que el mensaje de error se muestra correctamente.
   */
  it('muestra un mensaje de error si faltan campos', async () => {
    // Montar el componente
    const wrapper = mount(FormComponent)

    // Simular el clic en el botón de envío sin llenar los campos
    await wrapper.find('.form__button').trigger('click')

    // Verificar que el mensaje de error se muestra correctamente
    expect(wrapper.find('.form__message--error').exists()).toBe(true)
    expect(wrapper.find('.form__message--error').text()).toBe('Debes llenar todos los campos')
  })

  /**
   * Prueba que muestra un mensaje de éxito cuando todos los campos del formulario están llenos.
   * Se asegura de que el mensaje de éxito se muestra correctamente y desaparece después de 3 segundos.
   */
  it('muestra un mensaje de éxito si todos los campos están llenos', async () => {
    // Usar temporizadores falsos para manejar el setTimeout
    vi.useFakeTimers()

    // Montar el componente
    const wrapper = mount(FormComponent)

    // Llenar todos los campos del formulario
    await wrapper.setData({ name: 'John Doe', email: 'john@example.com', comment: 'Great job!' })

    // Simular el clic en el botón de envío
    await wrapper.find('.form__button').trigger('click')

    // Verificar que el mensaje de éxito se muestra correctamente
    expect(wrapper.find('.form__message--success').exists()).toBe(true)
    expect(wrapper.find('.form__message--success').text()).toBe('Formulario enviado correctamente')

    // Avanzar el temporizador por 3 segundos
    vi.advanceTimersByTime(3000)
    await wrapper.vm.$nextTick()

    // Verificar que el mensaje de éxito desaparece después de 3 segundos
    expect(wrapper.find('.form__message--success').exists()).toBe(false)

    // Restaurar los temporizadores reales
    vi.useRealTimers()
  })
})
