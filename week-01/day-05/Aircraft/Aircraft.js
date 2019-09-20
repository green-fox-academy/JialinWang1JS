
class Aircraft{
    constructor(type){
        this.type = type
        this.ammoStorage = 0
        this.maxAmmo = type === 'F16' ? 8 : 12
        this.baseDamage = type === 'F35' ? 50 : 30
    }

    fight(){
        let damge = this.ammoStorage * this.baseDamage
        this.ammoStorage = 0
        return damge
    }

    getType(){
        return this.type
    }

    getDamage(){
        return this.ammoStorage * this.baseDamage
    }

    getStatus(){
        return `Type ${this.type}, Ammo: ${this.ammoStorage}, Base Damage: ${this.baseDamage}, All Damage: ${this.ammoStorage * this.baseDamage}`
    }

    reFill(ammosForFill){
        let needFillAmount = this.maxAmmo - this.ammoStorage

        if(needFillAmount > ammosForFill){
            this.ammoStorage += ammosForFill
            return 0
        }

        this.ammoStorage = this.maxAmmo
        let ammoLeft = ammosForFill - needFillAmount
        return ammoLeft < 0 ? 0 : ammoLeft
    }

    isPriority(){
        return this.type === 'F35'
    }
}

module.exports = Aircraft