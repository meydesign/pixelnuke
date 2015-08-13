import fs from 'fs';

const exists = filename => new Promise((resolve) => {
  fs.exists(filename, (status) => {
    return resolve(status);
  });
});

const readFile = filename => new Promise((resolve, reject) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      return reject(err);
    }

    return resolve(data);
  });
});

export default { exists, readFile };
