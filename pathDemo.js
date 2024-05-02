import path from "path";

// Not a real location
const filePath = "./dir1/dir2/text.txt";

// basename()
console.log(path.basename(filePath));

// dirname()
console.log(path.dirname(filePath));

// extname() the extension name
console.log(path.extname(filePath));
