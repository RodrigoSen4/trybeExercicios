const { sum, myRemove, myFizzBuzz } = require('./sum.js');

describe('testando function soma', () => {
    it('adds 4 + 5 to equal 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    it('adds 0 +0 to equal 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    it('erro quando é string' , () => {
        expect(() => sum(4, '5')).toThrow();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    });
});


describe('Testando myRemove', () => {
    it('retorna um array sem o ultimo parametro indicado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

describe('Testando myFizzBuzz', () => {
    it('Verificando se myFizzBuzz retorna o valor esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(11)).toBe(11);
        expect(myFizzBuzz('')).toBe(false);
    });
});


