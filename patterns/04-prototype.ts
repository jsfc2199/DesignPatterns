/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

class Documento {
    public title: string;
    public author: string;
    private content: string;

    constructor(title: string, author: string, content: string){
        this.title = title;
        this.author = author;
        this.content = content;
    }

    //prototipo para clonar
    public clone(): Documento{
        return new Documento(this.title, this.author, this.content);
    }

    display(): void{
        console.log(`${this.title} - ${this.author} - ${this.content}`);
    }
}

function main(){
    const documento1 = new Documento("El principito", "Antoine de Saint-Exupéry", "Un niño que vive en un planeta pequeño y que viaja por el espacio en busca de un gran principito");

    documento1.display();

    //para no perder la referencia a document debemos clonar el prototipo
    const documento2 = documento1.clone();
    documento2.display();

}

main();
