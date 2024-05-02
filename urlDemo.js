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
