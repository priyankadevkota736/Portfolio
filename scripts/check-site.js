const fs = require('fs');
const required = ['index.html', 'src/styles.css', 'assets/profile.svg'];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing required file: ${file}`);
}
const html = fs.readFileSync('index.html', 'utf8');
for (const text of ['Professional Portfolio', 'Career history', 'Selected highlights', 'Let’s connect']) {
  if (!html.includes(text)) throw new Error(`Missing expected content: ${text}`);
}
console.log('Static portfolio files validated.');
