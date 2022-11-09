const fs = require('fs');
const path = require('path');

const names = [
  'Yulany Munevar',
  'Daniel Monsalve',
  'Julian Gomez',
  'Camilo Pimentel',
  'Diana Quinche',
  'Juan Lorza',
  'Juan Camilo Orjuela',
  'Sebastian Munoz',
  'Salomon Vasquez'
]

const createFolder = (name) => {
  fs.mkdirSync(name);
}

const createFile = (name, content) => {
  fs.writeFileSync(name, content);
}

function main() {
  const directory = path.join(__dirname, 'challenges/reto-album');
  names.forEach(name => {
    const folderName = name.toLowerCase().replace(' ', '_');
    const folderPath = path.join(directory, folderName);
    createFolder(folderPath);

    const filePath = path.join(folderPath, '.keep');
    createFile(filePath, `Hola, soy ${name}`);
  })
}

main();
