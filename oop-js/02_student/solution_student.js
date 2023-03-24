/* eslint-disable no-unused-vars */
class Student {
  constructor(name, email) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.email = email;
    this.grades = [];
  }
}
// not sure why I chose to do it like this???? 
Student.prototype.addGrade = function (grade) {
  return this.grades.push(grade);
};

Student.prototype.getGradeAverage = function () {
  const sum = (a, b) => a + b;
  return this.grades.reduce(sum) / this.grades.length;
};

class Alumni extends Student {
  constructor(name, email, year) {
    super(name, email);
    this.year = year;
  }
  getGraduationYear() {
    return this.year;
  }
}
