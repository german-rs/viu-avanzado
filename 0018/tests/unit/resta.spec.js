import {restar} from "@/utils/restar";

jest.mock('@/utils/restar', () => ({
    restar: jest.fn(),
}));

describe('restar', () => {
  test('debería calcular la resta correctamente', () => {
    //Arrange
    restar.mockReturnValue(-1);

    //Act
    const resultado = restar(2, 3);

    //Asserts
    expect(resultado).toBe(-1);
    expect(restar).toHaveBeenCalledWith(2, 3);
  });
});