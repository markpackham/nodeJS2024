import path from "path";
import url from "url";

// Not a real location
const filePath = "./dir1/dir2/text.txt";

// basename()
console.log(path.basename(filePath));

// dirname()
console.log(path.dirname(filePath));

// extname() the extension name
console.log(path.extname(filePath));

// parse()
// {
//     root: '',
//     dir: './dir1/dir2',
//     base: 'text.txt',
//     ext: '.txt',
//     name: 'text'
//   }
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);
