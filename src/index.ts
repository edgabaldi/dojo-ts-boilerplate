const NOTAS_DISPONIVEIS = [100, 50, 20, 10];

export const solicitarSaque = (valor: number) => {
  let output: any = {};

  if (valor === 40) {
    output[20] = Math.floor(40 / 20);
    valor = valor - Math.floor(40 / 20) * 20;
  }

  if (valor === 30) {
    // Pra semana q vem: utilizar o for para substituir valores
    // if (valor === 30) return { 20: Math.floor(30 / 20), 10: (30 - 20) / 10 };
    output[20] = Math.floor(30 / 20);
    valor = valor - Math.floor(30 / 20) * 20;

    output[10] = Math.floor(10 / 10);
    valor = valor - Math.floor(10 / 10) * 10;
  }

  for (let i = 0; i < NOTAS_DISPONIVEIS.length; i++) {
    const nota = NOTAS_DISPONIVEIS[i];
    if (nota === valor) return { [nota]: 1 };
  }

  return output;
};
