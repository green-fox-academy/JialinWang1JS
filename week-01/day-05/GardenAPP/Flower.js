
class Flower{
    constructor(color){
        this.waterRemaind = 0    
        this.color = color
        this.type = 'flower'
    }

    getType(){
        return this.type
    }

    getColor(){
        return this.color
    }


    isNeedWater(){
        return this.waterRemaind > 5 ? false : true
    }

    watering(amount){
        this.waterRemaind += 0.75 * amount
    }
}

module.exports = Flower