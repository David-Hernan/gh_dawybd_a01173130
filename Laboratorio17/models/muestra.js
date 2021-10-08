const muestras = [
    {nombre: "vicodin", funcion: "La medicina del doctor House"},
    {nombre: "Imodium", funcion: "Opioide contra la diarrea"}
];

//El modelo es una clase
module.exports = class Muestra {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_funcion) {
        this.nombre = mi_nombre;
        this.funcion = mi_funcion;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        muestras.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    //Los métodos estáticos se ejecutan sobre la clase,
    //no necesariamente sobre un objeto de la clase
    static fetchAll() {
        return muestras;
    }

}