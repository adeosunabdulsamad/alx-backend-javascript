export default function getStudentIdsSum(students) {
    if (!Array.isArray(students)) {
        return 0;
    }
    return students
      .map((student) => student.id)
      .reduce((total, num) => total + num, 0);
}