function getStudentIdsSum(studentsArry) {
  return studentsArry.reduce((sum, item) => sum + item.id, 0);
}

export default getStudentIdsSum;
