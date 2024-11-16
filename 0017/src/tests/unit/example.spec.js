import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('', () =>{
  //Aquí escribimos los test.

  //Test 1.
  test('Descripción de la prueba', () =>{
    //La lógica de la prueba (test).
  })

  //Test 2.
  test('Evaluamos si la variable numero es mayor a 30', () =>{
    //Arrange
    let numero = 20;

    //Act
    numero = numero + 10;

    //Assert
    // expect(numero).toBeGreaterThan(30);
    expect(numero).toBeGreaterThanOrEqual(30);

    //Assert
    // if(numero > 30){
    // }else{
    //  throw `${numero} no es mayor que 30`
    // }


  })

  //Test 3.
  test('Evaluamos si una clave es mayor a 6 digitos', () => {

    let clave = '123456';
    expect(clave).toHaveLength(6); 

  })

  //Test 4.
  test('El resultado de la división debe ser exacto (resto = 0)', () => {

    let numero1 = 4;
    let numero2 = 2;
    let resto = numero1 % numero2;
    expect(resto).toEqual(0);

  })

  //Test 5.
  test('se valide que el texto de una variable es igual a: Estoy aprendiendo test con Jest', () => {

    let texto = 'Estoy aprendiendo test con Jest';
    expect(texto).toBe('Estoy aprendiendo test con Jest');

  })

})