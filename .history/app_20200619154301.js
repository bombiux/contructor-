//WRONG OLD WAY

// const student1 = {
//     id: 1,
//     name: 'Mecate',
//     subjects: [],
//     addSubjects(subject) {
//         this.subjects = [...this.subjects, subject];
//     }
// }

// console.log(student1);

// student1.addSubjects('Developer');

// console.log(student1);

// BETTER WAY

function Student(id, name, subjects = []) {
    this.id = id,
    this.name = name,
    this.subjects = subjects;
}

Student.prototype.addSubjects = function (subject) {
    this.subjects = [...this.subjects, subject];
}

Student.prototype.deleteSubject = function (subject) {
    this.subjects = this.subjects.filter(subject => !subject)
}

const student1 = new Student(1, 'Mecate');
const student2 = new Student(2, 'Cristian');

student1.addSubjects('Developer');

console.log(student1);