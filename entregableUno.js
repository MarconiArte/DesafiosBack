class Usuario {
    constructor (nombre,apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }

    getFullName = () => {
       return `${this.nombre} ${this.apellido}`
    }

    addMascota = (nombreMascota) => {
        this.mascotas.push(nombreMascota);
    }

    countMascotas = () => {
        return this.mascotas.length;
        
    }

    addBook = (titulo, autor) => {
        return this.libros.push({titulo,autor});
    }
    
    getBookNames = () => {
        return this.libros.map(libro => (libro.titulo))
    }
        
}



const UsuarioUno = new Usuario("Marcos","Niz");

const nombreCompleto = UsuarioUno.getFullName();
console.log(`El nombre completo del usuario es ${nombreCompleto}`);

console.log(`El total de las mascotas es de ${UsuarioUno.countMascotas()}`);
UsuarioUno.addMascota("Luna");
UsuarioUno.addMascota("Sol");
console.log(`El total de las mascotas es de ${UsuarioUno.countMascotas()}`);



UsuarioUno.addBook("El cielo del apocalipsis","Desconocido");
UsuarioUno.addBook("El señor del anillos"," J. R. R. Tolkien");

const tituloLibros =  UsuarioUno.getBookNames;
console.log(tituloLibros())

