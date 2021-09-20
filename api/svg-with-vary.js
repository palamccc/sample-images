const svg = `<svg height="32" version="1.0" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 24.19a8.33 8.33 0 01-7.44-4.69L2 8c-1.38 2.46-2 5.2-2 8 0 4 1.3 7.49 3.9 10.47a15.63 15.63 0 009.72 5.34l4.65-8.03c-.47.14-1.25.4-2.27.4z" fill="#4AAE48"/><path d="M10.97 9.53A7.84 7.84 0 0116 8h13.75A15.59 15.59 0 0016 0c-2.5 0-4.83.53-7 1.6a15.47 15.47 0 00-5.64 4.59L8 14a8.17 8.17 0 012.97-4.47z" fill="#EA3939"/><path d="M30.8 10h-9.3a8.54 8.54 0 012.69 6c0 1.7-.48 3.27-1.44 4.69L16.19 32c4.37-.04 8.1-1.63 11.19-4.75A15.45 15.45 0 0032 16c0-2.04-.34-4.19-1.2-6z" fill="#FED14B"/><circle cx="16" cy="16" fill="#188FD1" r="6"/></svg>`;

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'GET');
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Vary', 'Origin, Access-Control-Request-Headers, Access-Control-Request-Method, Accept-Encoding');
  res.send(svg);
};