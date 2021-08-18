// Модули высших уровней не должны зависить от модулей низкого уровня
// Оба должны зависить от абстракций
// Абстракции не должны зависить от деталий
// Детали должны зависить от абстракций

// Верхнеуровневые сущности не должны зависить от
// нижне уровневых реализаций,
// а любые зависимости лучше выносить в абстрации
// т.е. инкапсулировать в отдельных сущностях

// Wrong

class XMLHttpRequestService { }

class xmlHttpService extends XMLHttpRequestService {
    request(url: string, type: string) {}
}

class Http {
    constructor(private xmlHttpService: xmlHttpService) {}

    get(url: string, options: any) {
        this.xmlHttpService.request(url, 'GET')
    }

    post(url: string) {
        this.xmlHttpService.request(url, 'POST');
    }
}

// Right

interface Connection {
    request(url: string, options: any): any;
}

class XMLHttpRequestService2 {
    open() {}
    send() {}
}

class xmlHttpService2 implements Connection {
    xhr = new XMLHttpRequestService2()

    request(url: string, type: string) {
        this.xhr.open()
        this.xhr.send()
    }
}

class Http2 {
    constructor(private httpConnection: Connection) {}

    get(url: string, options: any) {
        this.httpConnection.request(url, 'GET')
    }

    post(url: string) {
        this.httpConnection.request(url, 'POST');
    }
}