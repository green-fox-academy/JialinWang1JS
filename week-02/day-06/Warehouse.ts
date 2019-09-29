class Item {
    name: string
    price: number
    constructor(name, price = 1) {
        this.name = name
        this.price = price
    }
    print(){
        console.log(`${this.name} - ${this.price}`)
    }
}

class Toy extends Item {
    color: string
    constructor(name, price, color) {
        super(name, price)
        this.color = color
    }
    
    print(){
        console.log(`${this.name} - ${this.price}`)
    }
}

class Tool extends Item {
    condition: string
    constructor(name, price) {
        super(name, price)
        this.condition = 'good'
    }
    
    print(){
        console.log(`${this.name} - ${this.price}`)
    }
}

class Warehouse  {
    itemList :Item[]
    constructor() {
        this.itemList = []
    }
    addItem(item){
        this.itemList.push(item)
    }
    
    printItemsOfType(type){
        for(let item of this.itemList){
            item instanceof type && item.print()
        }
    }
}


const wh = new Warehouse();
wh.addItem(new Item("vase", 30));
wh.addItem(new Toy("pebble", undefined, "grey"));
wh.addItem(new Toy("car", 10, "blue"));
wh.addItem(new Tool("hammer", 25));
wh.printItemsOfType(Item);
console.log('Item-------->')
wh.printItemsOfType(Toy);
console.log('Toy-------->')
wh.printItemsOfType(Tool);
console.log('Tool-------->')