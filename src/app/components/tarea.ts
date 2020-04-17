export class Tarea{
    // definimos los tipos de parametros que tiene
    descripcion: string;
    personal: string;
    url: string;
    tags: Array<string>;

    // creamos un contructor

    constructor(
    // decimos que parametros necesita y de que tipo son
    descripcion: string,
    personal: string,
    url: string,
    tags: Array<string>){
                        // le decimos que nos rellene esos parametros
                        this.descripcion = descripcion;
                        this.personal = personal;
                        this.url = url;
                        this.tags = tags;
                    }
}
