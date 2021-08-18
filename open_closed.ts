// Модуль должна быть открыта для расшерения но закрыт для изменения

class Auto {
    constructor(public model: string) {}
    getCarModel() {}
}

const shop: Array<Auto> = [
    new Auto('Tesla'),
    new Auto('Audi'),
]

// Wrong
// Если массив мы расширим новым значение
// то функции getPrice мы изменили что противоречит open-closed
const getPrice = (auto: Array<Auto>): string | void => {
    for (let i = 0; i < auto.length; i++) {
        switch (auto[i].model) {
            case 'Tesla': return '80 000$';
            case 'Audi': return '50 000%';
            default: return 'No auto price';
        }
    }
}

getPrice(shop)

// Right
abstract class CarPrice {
    abstract getPrice(): string;
}

class Tesla extends CarPrice {
    getPrice(): string {
        return "80 000$";
    }
}

class Audi extends CarPrice {
    getPrice(): string {
        return "50 000$";
    }
}

class Bmw extends CarPrice {
    getPrice(): string {
        return "70 000$";
    }
}

const shop2: Array<CarPrice> = [
    new Tesla(),
    new Audi(),
    new Bmw(),
]

const getPrice2 = (auto: Array<CarPrice>): string | void => {
    for (let i = 0; i < auto.length; i++) {
        auto[i].getPrice()
    }
}

getPrice2(shop2)