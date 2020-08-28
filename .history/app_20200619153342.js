const student1 = {
    id: 1,
    name: 'Mecate',
    subjects: [],
    addSubjects(subject) {
        this.subjects = [...this.subjects, subject];
    }
}

console.log(student1);

student1.addSubjects('Developer')