import {dividir} from "@/utils/dividir";

jest.mock('@/utils/dividir', () => ({
    dividir: jest.fn(),
}));

describe('dividir', () => {
  test('debería calcular la división correctamente', () => {
    //Arrange
    dividir.mockImplementationOnce((a, b) => {
        if(b ===0){
            throw new Error('No se puede dividir por 0');
        }
        return a / b;
    })

    //Act
    const resultado = dividir(4, 2);

    //Asserts
    expect(resultado).toBe(2);
    expect(dividir).toHaveBeenCalledWith(4, 2);
  });
});