#!/usr/bin/node

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    const lines = data.split('\n');
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
