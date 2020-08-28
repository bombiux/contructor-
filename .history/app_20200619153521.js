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


class Student {
    constructor(id, name, subject = []) {
        this.id = id,
            this.name = name,
            this.subject = subject;
    }
}
