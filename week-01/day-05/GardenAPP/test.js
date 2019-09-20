const Tree = require('./Tree')
const Flower = require('./Flower')
const Garden = require('./Garden')

let garden = new Garden()

garden.AddFlower(new Flower('yellow'))
garden.AddFlower(new Flower('blue'))

garden.AddTree(new Tree('purple '))
garden.AddTree(new Tree('orange  '))

garden.toString()

garden.Watering(40)

garden.toString()

garden.Watering(70)

garden.toString()
