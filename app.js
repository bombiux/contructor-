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

Student.prototype.addSubjects = function(subject) {
    this.subjects = [...this.subjects, subject];
}

Student.prototype.deleteSubject = function(subject) {
    this.subjects = [...this.subjects].filter(subject => !subject);
}

const student1 = new Student(1, 'Mecate');
console.log(student1);


student1.addSubjects('Developer');
console.log(student1);
// console.log(student1);
// student1.addSubjects('Programmer');
student1.deleteSubject('Developer');
console.log(student1);



// const student2 = new Student(2, 'Cristian');


//Constructor

class Film {
	constructor(id, title, director, releaseYear, discountable, genres = [] ) {
		this.id = id;
		this.title = title;
		this.director = director;
		this.releaseYear = releaseYear;
		this.genres = genres;
		this._discountable = discountable;
	}
    
    get discountable() {
        return this._discountable;
    }
    
    set discountable(discountable) {
        if (typeof discountable !== 'boolean') {
            return this._discountable;
        } else {
            this._discountable = discountable;
        }
    }
	
	addGenres(genre) {
		this.genres = [...this.genres, genre];
	}
	
	getFilmTitle() {
		return `The name of this film is ${this.title}`;
	}
}

// Extended clases

class DVD extends Film {
	constructor(id, title, director, releaseYear, discountable, price, discount, genres = []) {
		super(id, title, director, releaseYear, discountable, genres);
		this.price = price;
		this.discount = discount;
	}

	salePrice() {
		if (this.discountable) {
			return this.price * ((100 - this.discount) / 100);
		} else {
			return `La película ${this.title} no está en oferta`;
		}
	}
}

const indianaMack = new DVD(5, 'Sex in the Jungle', 'Private', 1985, true, 15);

console.log(indianaMack.discountable)