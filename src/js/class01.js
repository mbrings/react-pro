class printPage {
    constructor(document, pageNumber, format) {
        this.document = document;
        this.page = pageNumber;
        this.format = format;
    }

    get printPage() {
        if(this.page) this.page = 0;
        return this.page;
    }
}

const pageP = new printPage('histoire',35,'A5');

console.log(pageP.printPage);