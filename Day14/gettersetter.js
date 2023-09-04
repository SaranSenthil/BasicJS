//Getter and setter class

class Book{
    constructor(title,autor,price,page)
    {
        this.title=title;
        this.autor=autor;
        this.price=price;
        this.page=page;
    }

    getTitle()
    {
        return this.title;
    }
    setTitle(title)
    {
        return this.title=title;
    }
    
    getprice()
    {
        return this.price;
    }
    setPrice(nprice)
    {
        return this.price=nprice*2;
    }
}

let bookold = new Book('DSP','DHenry',2000,3000);

bookold.setTitle('CS');
 console.log(bookold.getTitle());
 bookold.setPrice(2000);
 console.log(bookold.getprice());