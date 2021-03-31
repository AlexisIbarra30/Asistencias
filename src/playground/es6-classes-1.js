class Person {
    constructor(name = 'Anonymus', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        return `Hi. I am ${ this.name }`;
    }

    getDescription() {
        return `${ this.name } is ${ this.age } year(s) old.`;
    }
    
};

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homelocation) {
        super(name, age);
        this.homelocation = homelocation;
    }
    hasLocation() {
        return !!this.homelocation;
    }
    getGretting() {
        let description = super.getGretting();
        if(this.hasLocation()) {
            description += ` I'm visiting from ${ this.homelocation }`;
        }
        return description;
    }
}

const me = new Traveler('Rene Emmanuel',21, 'Toluca');
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());