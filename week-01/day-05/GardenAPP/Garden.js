

class Garden {
    constructor() {
        this.trees = []
        this.Flowers = []
    }

    AddTree(tree) {
        this.trees.push(tree)
    }

    AddFlower(Flower) {
        this.Flowers.push(Flower)
    }

    Watering(amount) {
        let aveWater = amount / (this.trees.length + this.Flowers.length)

        this.trees.forEach(tree => tree.watering(aveWater))
        this.Flowers.forEach(flower => flower.watering(aveWater))

        console.log('Watering with 70')        
    }

    toString() {
        this.trees.forEach(tree => console.log(`The ${tree.getColor()} ${tree.getType()} ${tree.isNeedWater() ? 'needs' : 'does needs'} water`))
        this.Flowers.forEach(flower => console.log(`The ${flower.getColor()} ${flower.getType()} ${flower.isNeedWater() ? 'needs' : 'does needs'} water`))

    }
}

module.exports = Garden