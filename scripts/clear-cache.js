const fs = require('fs');
const path = require('path');

const cacheFolderPath = path.join(__dirname, '..', 'node_modules', '.cache');

if (fs.existsSync(cacheFolderPath)) {
    fs.rmSync(cacheFolderPath, { recursive: true, force: true });
    console.log('Папка .cache успешно удалена.');
} else {
    console.log('Папка .cache не существует.');
}
