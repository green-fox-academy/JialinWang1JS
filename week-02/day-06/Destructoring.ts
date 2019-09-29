var car = {
    model: 'Benz',
    color: 'black',
    year: 1886,
    doors: 0,
    historical: true
};
var computer = {
    type: 'PC',
    monitor: {
        color: 'black',
        size: '16\"',
        HDMI: true,
        VGA: true
    },
    tower: {
        color: 'grey',
        CPU: 4.7,
        memory: 16,
        SSD: 128
    }
}
//car
var modelT = car.model
var colorT = car.color
var yearT = car.year
var doorsT = car.doors
var historicalT = car.historical
//computer
var typeC = computer.type
var monitorColor = computer.monitor.color
var monitorSize = computer.monitor.size
var monitorHdim = computer.monitor.HDMI


var { model, color, year, doors, historical } = car
var { type, monitor:{color: colorC, size:sizeC, HDMI:HDMIC, VGA:VGAC}} = computer
console.log(HDMIC)


