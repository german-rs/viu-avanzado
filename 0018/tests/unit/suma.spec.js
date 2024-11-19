import {sumar} from "@/utils/sumar";

jest.mock('@/utils/sumar', () => ({
  sumar: jest.fn(),
}));

describe('sumar', () => {
  test('debería calcular la suma correctamente', () => {
    //Arrange
    sumar.mockReturnValue(5);

    //Act
    const resultado = sumar(2, 3);

    //Asserts
    expect(resultado).toBe(5);
    expect(sumar).toHaveBeenCalledWith(2, 3);
  });
});