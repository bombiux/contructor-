const student1 = {
    id: 1,
    name: 'Mecete',
    subjects: [],
    addSubjects(subject) {
        this.subjects = [...this.subjects, subject];
    }
}

console.log(student1);