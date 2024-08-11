let typingTimeout; // Variável global para armazenar o timeout atual

export function typeWriter(elemento, textos, index = 0) {
  // Deixa vazio antes de fazer a digitação
  elemento.innerHTML = '';

  // Se já há um timeout em execução, limpe-o para evitar múltiplas instâncias
  if (typingTimeout) {
    clearTimeout(typingTimeout);
  }

  const textoArray = textos[index].split('');

  // Determinar a velocidade de digitação com base no conteúdo do texto
  const typingSpeed = textos[index] === '' ? 100 : 100 * textoArray.length;

  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 100 * i);
  });

  // Calcular o tempo total necessário para escrever o texto
  const tempoTotal = 100 * textoArray.length;

  // Chamar a função novamente após o tempo necessário para escrever o texto, mais um pequeno delay
  typingTimeout = setTimeout(() => {
    // Alternar para o próximo texto ou reiniciar
    const proximoIndex = (index + 1) % textos.length;
    typeWriter(elemento, textos, proximoIndex);
  }, tempoTotal + (textos[index] === '' ? 100 : 1000)); // 100ms de delay antes de mudar para o próximo texto vazio, 1000ms para os outros textos
}
