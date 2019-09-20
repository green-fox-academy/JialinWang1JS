
class Mentor {
    constructor(name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate') {
        this.name = name
        this.age = age
        this.gender = gender
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