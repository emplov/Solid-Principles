// Класс должен отвечать только на что-то одно

// WRONG
class Auto {
    constructor(model: string) {}
    getCarModel() {}
    saveCustomerOrder(O: Auto) {}
    setCarModel() {}
    getCustomerOrder(id: string) {}
    removeCustomerOrder(id: string) {}
    updateCarSet(set: object) {}
}

// RIGHT
class Auto2 {
    constructor(model: string) {}
    getCarModel() {}
    setCarModel() {}
}

class CustomerAuto {
    saveCustomerOrder(o: Auto) {}
    getCustomerOrder(id: string) {}
    removeCustomerOrder(id: string) {}
}

class AutoDB {
    updateCatSet(set: object) {}
}