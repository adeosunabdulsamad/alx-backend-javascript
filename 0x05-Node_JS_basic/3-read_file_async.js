const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.trim().split('\n');
        const students = lines.slice(1).filter((line) => line.trim() !== '');
        console.log(`Number of students: ${students.length}`);

        const fields = {};
        students.forEach((student) => {
          const details = student.split(',');
          const field = details[3];
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(details[0]);
        });

        Object.keys(fields).forEach((field) => {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        });

        resolve();
      } catch (processingError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
