
class Student {
    constructor(name = 'Jane Doe', age = 30, gender = 'female', previousOrganization = 'The School of Life') {
        this.name = name
        this.age = age
        this.gender = gender
        this.previousOrganization = previousOrganization
        this.skippedDays = 0
    }

    getGoal() {
        console.log('My goal is: Be a junior software developer.')
    }

    introduce(){
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`)        
    }

    skipDays(numberOfDays){
        this.skippedDays += numberOfDays
    }
}

module.exports = Student