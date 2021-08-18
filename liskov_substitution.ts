// Классы наследники могли использоваться вместо родителей


// Wrong
class Rectangle {
    constructor(public width: number, public height: number) {}

    setWidth(width: number) {
        this.width = width;
    }

    setHeight(height: number) {
        this.height = height;
    }

    areaOf(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    width: number = 0;
    height: number = 0;

    constructor(size: number) {
        super(size, size);
    }

    setWidth(width: number) {
        this.width = width;
        this.height = width;
    }

    setHeight(height: number) {
        this.width = height;
        this.height = height;
    }
}

const mySquare = new Square(20);   // 20
mySquare.setWidth(30)                   // 30
mySquare.setWidth(40)                   // 40

// Проблема начинается тогда когда мы начинаем
// Использовать rectangle в качестве интерфейса
// а работать конкретно с классом square
// начинается проблема

// How it should works
const changeSize = (figure: Rectangle): void => {
    figure.setWidth(10)
    figure.setHeight(20)
}

// How it works
const changeShapeSize = (figure: Rectangle): void => {
    figure.setWidth(10);  // w: 10 h: 10
    figure.setHeight(20); // w: 20 h: 20
}

// Right

// Данный принцип помогает выявлять скрытые свойства
// и проблемные абстрации, делать повеление модулей предсказуемым
// вводить ограничение на наследование
// чтобы потомки не противоречили к базовуму поведению

interface Figure {
    setWidth(width: number): void;
    setHeight(width: number): void;
    areaOf(): void;
}

class Rectangle2 implements Figure {
    setWidth(width: number) {}
    setHeight(width: number) {}
    areaOf() {}
}

class Square2 implements Figure {
    setWidth(width: number) {}
    setHeight(width: number) {}
    areaOf() {}
}