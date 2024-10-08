export default function getListStudentIds(arr) {
    if (arr instanceof Array) {
        return arr.map((student) => student.id);
    }
    else {
        return [];
    }
}