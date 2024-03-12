function getStudentsByLocation(studentsArry, city) {
  return studentsArry.filter((item) => item.location === city);
}

export default getStudentsByLocation;
