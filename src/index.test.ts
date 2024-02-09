// Entregar o menor número de notas
// É possível sacar o valor solicitado com as notas disponíveis
// Quantidade de notas disponíveis é infinita
// Notas disponíveis: 100, 50, 20, 10
// Se sacar 35 reais como fica?

import { solicitarSaque } from '.';

describe('CashMachine', () => {
  test('deve sacar uma única nota dado o valor solicitado', () => {
    const respostaPara10 = solicitarSaque(10);
    const respostaPara50 = solicitarSaque(50);
    expect(respostaPara10).toEqual({ 10: 1 });
    expect(respostaPara50).toEqual({ 50: 1 });
  });

  test('deve sacar duas notas dado o valor solicitado 30', () => {
    const resposta = solicitarSaque(30);
    expect(resposta).toEqual({ 20: 1, 10: 1 });
  });

  test('deve sacar duas notas iguais', () => {
    const resposta = solicitarSaque(40);
    expect(resposta).toEqual({ 20: 2 });
  });
});
