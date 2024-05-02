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

// join() handy for dealing with path differences between Linux Vs Windows
// Windows use \ as a separator while Linux uses /
// E:\Sites\nodeJS2024\dir1\dir2\test.txt
const filePath2 = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath2);

// resolve()
// pretty much does the same as join() but join() may or may not return an absolute path
//  resolve() always returns an absolute path,
// using the target operating system’s root as the root or first argument with a leading / as the new root
// https://hackernoon.com/whats-the-difference-between-pathjoin-and-pathresolve
const filePath3 = path.resolve(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath3);
