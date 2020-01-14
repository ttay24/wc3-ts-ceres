// import dependencies
let fs = require('fs');

// setup some constants
const dataDir = './data';
const outputDir = './metadata';

if (!fs.existsSync(outputDir))
  fs.mkdirSync(outputDir);

// get list of files
let dataFiles = fs.readdirSync(dataDir);

// iterate over files and generate metadata
for (let i = 0; i < dataFiles.length; i++) {
  let dataFileStr = fs.readFileSync(`${dataDir}/${dataFiles[i]}`);
  let dataFile = JSON.parse(dataFileStr);

  // setup stuff for exporting things
  let enumGroups = {};

  // iterate over raw codes
  for (let rawCode in dataFile) {
    let field = dataFile[rawCode];
    let cat = field.category;

    if (!enumGroups[cat]) {
      enumGroups[cat] = {};
    }

    let editorNameKey = field.editorName.replace(/ |-|\(|\)/g, '');
    enumGroups[cat][editorNameKey] = rawCode;
  }

  console.log(enumGroups);

  // iterate over codes to write file
  let output = '';
  for (let cat in enumGroups) {
    let translatedCat = '';
    switch (cat) {
      case 'abil': translatedCat = 'Abilities'; break;
      case 'art': translatedCat = 'Art'; break;
      case 'combat': translatedCat = 'Combat'; break;
      case 'editor': translatedCat = 'Editor'; break;
      case 'move': translatedCat = 'Movement'; break;
      case 'path': translatedCat = 'Pathing'; break;
      case 'sound': translatedCat = 'Sound'; break;
      case 'stats': translatedCat = 'Stats'; break;
      case 'tech': translatedCat = 'Techtree'; break;
      case 'text': translatedCat = 'Text'; break;
    }

    output += `export enum ${translatedCat} {\n`;
    for (let code in enumGroups[cat]) {
      output += `  ${code} = "${enumGroups[cat][code]}",\n`;
    }
    output += `}\n`;
    output += '\n';
  }
  console.log(output);

  fs.writeFileSync(
    `${outputDir}/${dataFiles[i].replace(/\.json$/, '.ts')}`, 
    output, { flag: 'w' }
  );
}

console.log('done!');
