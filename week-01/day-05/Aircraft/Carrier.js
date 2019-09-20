
class Carrier {
    constructor(totalAmmoStorage, health) {
        this.aircrafts = []
        this.totalAmmoStorage = totalAmmoStorage
        this.health = health
        this.damage = 0
    }

    add(aircraft) {
        //arrange the queue to let F35 be first
        aircraft.isPriority() ? this.aircrafts.unshift(aircraft) : this.aircrafts.push(aircraft)
        this.damage += aircraft.getDamage()
    }

    calcTotalDamage() {
        let damage = 0
        this.aircrafts.forEach(aircraft => damage += aircraft.getDamage())
        return damage
    }

    fill() {
        if (!this.totalAmmoStorage) throw "no ammo"

        this.aircrafts.every(
            (aircraft) => {
                this.totalAmmoStorage = aircraft.reFill(this.totalAmmoStorage)
                return this.totalAmmoStorage
            }
        )
        this.damage = this.calcTotalDamage()
    }

    Damaged(damage) {
        this.health -= damage
        if (this.health < 0) this.health = 0
    }

    fight(enemyCarrier) {
        this.aircrafts.forEach(aircraft => aircraft.fight())
        enemyCarrier.Damaged(this.damage)
        this.damage = this.calcTotalDamage()
    }

    getStatus() {
        if (!this.health)`It's dead Jim ${this.health} :(`
        let aircraftsStatus = ''
        this.aircrafts.forEach(aircraft => aircraftsStatus += `\n   ${aircraft.getStatus()}`)
        return `HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.totalAmmoStorage}, Total damage: ${this.damage}\n Aircrafts: ${aircraftsStatus}`
    }
}

module.exports = Carrier