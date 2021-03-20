class Servivo {

    caminar(nombre) { 
        console.log(`Ahora esta caminando: ${nombre}`);
    }

}

class Persona extends Servivo {
    constructor(nombre){
        super();
        this.nombre = nombre;
    }

    moverse() {
        this.caminar(this.nombre);
    }
}

const persona = new Persona('Juanito');
persona.moverse();