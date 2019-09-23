interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
}

class Reservation implements Reservationy {
    DOW: string[] = ['MON', 'TUE', 'WED', 'THU', 'FIR', 'SAT', 'SUN']

    getDowBooking(): string {
        let index = Math.floor(Math.random() * 6)
        return this.DOW[index]
    }
    getCodeBooking(): string {
        let code = ''
        for (let i = 0; i < 8; i++) {
            code += String.fromCharCode(Math.round(Math.random()) ? Math.floor(Math.random() * 10) + 48 : Math.floor(Math.random() * 26) + 65)
        }
        return code
    }
}

const reservation = new Reservation()
for (let i = 0; i < 8; i++) {
    console.log(`Booking# ${reservation.getCodeBooking()} for ${reservation.getDowBooking()}`)
}