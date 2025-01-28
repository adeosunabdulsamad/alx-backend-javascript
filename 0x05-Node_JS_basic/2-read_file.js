#!/usr/bin/node

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const header = lines[0].split(',');
    const fieldIndex = header.indexOf('field');
    const firstNameIndex = header.indexOf('firstname');

    if (fieldIndex === -1 || firstNameIndex === -1) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1).map((line) => line.split(',')).filter((row) => row.length === header.length);

    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    const fields = {};
    for (const student of students) {
      const field = student[fieldIndex];
      const firstName = student[firstNameIndex];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    }

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
