const Person = require('./Person')
class Mentor extends Person {
    constructor(name, age, gender, level = 'intermediate') {
       super(name, age, gender)
        this.level = level
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`)
    }

    getGoal() {
        console.log('My goal is: Educate brilliant junior software developers.')
    }
}

module.exports = Mentor