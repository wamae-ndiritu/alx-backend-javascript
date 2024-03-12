function updateStudentGradeByCity(studentsArry, city, newGrade) {
  return studentsArry.filter((student) => student.location === city).map((student) => {
    const gradeObj = newGrade.find((grade) => grade.studentId === student.id);
    const studentGrade = gradeObj ? gradeObj.grade : 'N/A';
    return { ...student, studentGrade };
  });
}

export default updateStudentGradeByCity;
