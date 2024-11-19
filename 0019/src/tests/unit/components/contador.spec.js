import { shallowMount } from '@vue/test-utils' 
import Contador from '@/components/Contador'

//Test 1.
describe('Componente Contador.vue', () => {
  test('Validación de match con el snapshot', () => {
    //Selección del sujeto de pruebas
    const wrapper = shallowMount(Contador);

    //Aserción
    expect(wrapper.html()).toMatchSnapshot();
    
    }) 
})

//Test 2.
describe('Componente Contador.vue', () => {
    test('Validar el texto de un botón de enviar formulario', () => { 
        const wrapper = shallowMount(Contador);

        const botonEnviar = wrapper.find('.boton-enviar');

        //Con este console.log comprobamos que estamos accediendo 
        //al texto del elemento
        console.log(botonEnviar.text());

        expect(botonEnviar.text()).toBe("Enviar");
   })
})

//Test 3.
describe('App', () => {
    const wrapper = shallowMount(App);
    it('should have the correct title', () => {
        expect(wrapper.find('h1').text()).toBe('Hello World!');
    }); 
});

//Test 4.
describe('Componente Contador.vue', () => {
    test('Incrementar en 1 el valor del contador', async ()=> {
     const wrapper = shallowMount(Contador)
     const botonIncrementar = wrapper.find('button');
     botonIncrementar.trigger('click')
     const valor = wrapper.find('.incrementar').text()
     expect(valor).toBe('+1')
    })
})