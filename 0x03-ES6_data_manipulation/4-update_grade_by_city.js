export default function updateStudentGradeByCity(students, city, newGrades){
    if (!Array.isArray(students)) {
        return [];
    }
    return students
    .map()
    .filter((student) => student.location === city);
}