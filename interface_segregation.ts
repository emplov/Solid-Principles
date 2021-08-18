// Wrong

interface AutoSet {
    getTeslaSet(): any;

    getAudiSet(): any;

    getBmwSet(): any;
}

class Tesla implements AutoSet {
    getAudiSet(): any {
    }

    getBmwSet(): any {
    }

    getTeslaSet(): any {
    }
}

class Audi implements AutoSet {
    getAudiSet(): any {
    }

    getBmwSet(): any {
    }

    getTeslaSet(): any {
    }
}

class Bmw implements AutoSet {
    getAudiSet(): any {
    }

    getBmwSet(): any {
    }

    getTeslaSet(): any {
    }
}


// Right

// Таким образом у нас есть 3 основных интерфейса
// которые не зависят друг от друга
// и которые содердать описание по будущим имплементациям
// после чего откаждого создаем класс наследник
// которое на этот раз содержит нужнаю ему информацию
//
//
// Плюсы
// снижение зависимостей между модулями
// нет не нужной информации которую нужно наследовать
// декомпазиция т.е. разделение сущностей

interface TeslaSet {
    getTeslaSet(): any;
}

interface AudiSet {
    getAudiSet(): any;
}

interface BmwSet {
    getBmwSet(): any;
}

class Tesla2 implements TeslaSet {
    getTeslaSet(): any {
    }
}

class Audi2 implements AudiSet {
    getAudiSet(): any {
    }
}

class Bmw2 implements BmwSet {
    getBmwSet(): any {
    }
}