import url from "url";

const urlString = "http://google.com/search?q=hello+world";

// Url Object
const urlObj = new URL(urlString);
// URL {
//     href: 'http://google.com/search?q=hello+world',
//     origin: 'http://google.com',
//     protocol: 'http:',
//     username: '',
//     password: '',
//     host: 'google.com',
//     hostname: 'google.com',
//     port: '',
//     pathname: '/search',
//     search: '?q=hello+world',
//     searchParams: URLSearchParams { 'q' => 'hello world' },
//     hash: ''
//   }
console.log(urlObj);
console.log(urlObj.pathname);

// format()
console.log(url.format(urlObj));

// Not actually part of the "url" module
// import.metal.url - gives file URL
console.log(import.meta.url);

// fileURLToPath()
// convert to regular path
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
// URLSearchParams { 'q' => 'hello world' }
console.log(params);
// hello world
console.log(params.get("q"));
