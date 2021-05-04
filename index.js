const Discord = require('discord.js')
const bot = new Discord.Client();
const token = 'ODMzMTg2MjMwNjUyMTA4ODEx.YHurJQ.HeWGHBjZ08qlxHCOeIRV8WRJI6Q';

bot.login(token)
bot.on('ready', () => {
  console.log('estou pronto para iniciar')
})



bot.on("message", (msg) => {
  if (msg.content === 'oi') {
    msg.reply('Oi, eu sou a Belle :) \nDigita aí o termo que gostaria de conhecer:\n\n Se não apareceu nada ao digitar e clicar enviar digite: 0 ');
  }

  if (msg.content === 'read') {
    msg.reply('"Resultado obtido após o sequenciamento de genomas por sequenciadores de alto desempenho. Corresponde a uma pequena sequência de poucos pares de base."');
  }
  if (msg.content === 'contig') {
    msg.reply('"Sequências de DNA que são montadas a partir da  sobreposição de reads."');
  }

  if (msg.content === 'scaffold') {
    msg.reply('"No mapeamento genômico, uma série de contigs que estão na ordem certa, mas não necessariamente conectados em um trecho contínuo de sequência"');
  }

  if (msg.content === 'anotação') {
    msg.reply('"Consiste na  identificação de informações sobre uma sequência genômica, como as regiões gênicas  ou genes codificadores de proteínas e a descrição de seus possíveis produtos proteicos."');
  }

  if (msg.content === 'cds') {
    msg.reply('"Região de codificação, sequência de codificação. CDS refere-se à porção de uma sequência de DNA genômico que é traduzida, do códon de início para o códon de parada, inclusive, se completa."');
  }

  if (msg.content === 'alinhamento') {
    msg.reply('"O processo de alinhar duas ou mais sequências para atingir níveis máximos de identidade (e conservação, no caso de sequências de aminoácidos) com o propósito de avaliar o grau de similaridade e a possibilidade de homologia"');
  }

  if (msg.content === 'query') {
    msg.reply('"A seqüência de entrada (ou outro tipo de termo de pesquisa) com a qual todas as entradas em um banco de dados devem ser comparadas"');
  }

  if (msg.content === 'similaridade') {
    msg.reply('"A extensão na qual sequências de nucleotídeos ou proteínas estão relacionadas. A extensão da semelhança entre duas sequências pode ser baseada na identidade e / ou conservação percentual da sequência. No BLAST, a semelhança refere-se a uma pontuação de matriz positiva."');
  }

  if (msg.content === 'mismatch') {
    msg.reply('"Incompatibilidade. É quando em uma posição numa  molécula de DNA de fita dupla o pareamento de bases não ocorre pois os nucleotídeos não são complementares. Ao comparar nucleotídeos não há combinações de bases no alinhamento."');
  }

  if (msg.content === 'match') {
    msg.reply('"Combinados; correspondência. É quando em uma posição numa molécula de DNA de fita dupla o pareamento de bases ocorre pois os nucleotídeos são complementares. Ao comparar nucleotídeos há combinações de bases no alinhamento."');
  }


  if (msg.content === 'proteômica') {
    msg.reply('"Um ramo da biotecnologia que envolve a aplicação de técnicas de biologia molecular, bioquímica e genética para analisar proteomas, estrutura, função e interação de proteínas produzidas por genes em células, tecidos ou organismos específicos."');
  }

  if (msg.content === 'pipeline bioinformática') {
    msg.reply('"Algoritmos de bioinformática que são executados em uma sequência pré-determinada para processar dados."');
  }

  if (msg.content === 'frameshif') {
    msg.reply('"Mutação por mudança da matriz de leitura. é uma mutação causada por indels (inserção + deleção) de um número de nucleotídeos diferente de três e seus múltiplos (ex.: 1, 2, 4, 5, 7, etc...) em uma determinada sequência de DNA. o que causará mudanças no quadro de leitura do códon."');
  }
  if (msg.content === '0') {
    msg.reply('"Desculpas se ainda não conheço esse termo :(. \n  Coloque o termo não encontrado no canal #termos que irei aprender mais sobre ele!');
  }


});