class Tree{
    constructor(color){
        this.waterRemaind = 0
        this.color = color
        this.type = 'tree'
    }

    getType(){
        return this.type
    }
    
    getColor(){
        return this.color
    }

    isNeedWater(){
        return this.waterRemaind > 10 ? false : true
    }

    watering(amount){
        this.waterRemaind += 0.4 * amount
    }
}

module.exports = Tree