
class Sponsor {
    constructor(name = 'Jane Doe', age = 30, gender = 'female', company = 'Google') {
        this.name = name
        this.age = age
        this.gender = gender
        this.company = company
        this.hiredStudents = 0
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`)
    }

    hire(){
        this.hiredStudents++
    }

    getGoal() {
        console.log('My goal is: Hire brilliant junior software developers.')
    }
}

module.exports = Sponsor