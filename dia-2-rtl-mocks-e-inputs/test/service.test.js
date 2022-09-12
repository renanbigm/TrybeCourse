const service = require('../service/service');

// const service = require('./service/service');

describe('testando função returnRdnNum', () => {
  test('testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    service.returnRdmNum = jest.fn().mockReturnValue(10);
    
    expect(service.returnRdmNum()).toBe(10);
    expect(service.returnRdmNum).toHaveBeenCalled();
    expect(service.returnRdmNum).toHaveBeenCalledTimes(1);
  });

  test('testa nova implementação de divisão e se a função é chamada', () => {
    service.returnRdmNum = jest.fn().mockImplementation((a, b) => a / b);

    expect(service.returnRdmNum(10, 5)).toBe(2);
    expect(service.returnRdmNum).toHaveBeenCalled();
    expect(service.returnRdmNum).toHaveBeenCalledWith(10, 5);
    expect(service.returnRdmNum).toHaveBeenCalledTimes(1);
  });

  test('testa alguma doidera ai', () => {
    service.returnRdmNum = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.returnRdmNum(2, 2, 2)).toBe(8);
    expect(service.returnRdmNum).toHaveBeenCalled();
    expect(service.returnRdmNum).toHaveBeenCalledWith(2, 2, 2);
    expect(service.returnRdmNum).toHaveBeenCalledTimes(1);
  });

  test('', () => {
    service.returnRdmNum.mockReset();

    service.returnRdmNum = jest.fn().mockImplementation((a) => a * 2);

    expect(service.returnRdmNum(2)).toBe(4);
    expect(service.returnRdmNum).toHaveBeenCalled();
    expect(service.returnRdmNum).toHaveBeenCalledWith(2);
    expect(service.returnRdmNum).toHaveBeenCalledTimes(1);
    
  });

  describe("testando implementações", () => {
    test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
      const mockhandleCase = jest.spyOn(service, "handleCase" ).mockImplementation(a => a.toLowerCase());
  
      expect(mockhandleCase("UPPERCASE")).toBe("uppercase");
      expect(service.handleCase).toHaveBeenCalledTimes(1);
      expect(service.handleCase).toHaveBeenCalledWith("UPPERCASE");
    });
  
    test("mockando função que recebe um parâmetro e retorna a última letra", () => {
      const mockfirstLetter = jest.spyOn(service, "firstLetter").mockImplementation(a => a.charAt(a.length - 1));
  
      expect(mockfirstLetter("letter")).toBe("r");
      expect(service.firstLetter).toHaveBeenCalledTimes(1);
      expect(service.firstLetter).toHaveBeenCalledWith("letter");
    });
  
    test("mockando função que recebe 3 parâmetros e os concatena", () => {
      const mocktwoToOne = jest.spyOn(service, "twoToOne").mockImplementation((a, b, c) => a.concat(b, c));
  
      expect(mocktwoToOne("tr", "y", "be")).toBe("trybe");
      expect(service.twoToOne).toHaveBeenCalledTimes(1);
      expect(service.twoToOne).toHaveBeenCalledWith("tr", "y", "be");
    });
  
    test("restaurando a primeira função e verifica se ela retorna em caixa alta", () => {
      service.handleCase.mockRestore();
  
      expect(service.handleCase("lowercase")).toBe("LOWERCASE");
    })
  });
});