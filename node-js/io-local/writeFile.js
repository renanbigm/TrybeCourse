const fs = require('fs').promises;

const main = async () => {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Editando arquivo de texto');
    console.log('arquivo editado com sucesso');
  } catch (err){
    console.error(`Erro ao editar o arquivo: ${err.message}`);
  }
};

main();