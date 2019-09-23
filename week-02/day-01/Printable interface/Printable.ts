
interface Printable {
    printAllFields(): string;
}

class Domino implements Printable {

    printAllFields(): string {
        return 'Domino string...'
    }
}

class Todo implements Printable {

    printAllFields(): string {
        return 'Todo string...'
    }
}