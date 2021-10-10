const db = require('../util/database');

/*const muestras = [
    {nombre: "vicodin", funcion: "La medicina del doctor House"},
    {nombre: "Vitacilina", funcion: "¡Ah qué buena medicina!"},
    {nombre: "Imodium", funcion: "Opioide contra la diarrea"}
];*/

var indice;

//El modelo es una clase
module.exports = class Muestra {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_funcion, miindice_bodega) {
        this.nombre = mi_nombre;
        this.funcion = mi_funcion;
        this.indice_bodega = miindice_bodega;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        //los signos de interrogación y el arreglo te cuida de SQL injection
        return db.execute('INSERT INTO muestras (nombre, funcion, indice_bodega) VALUES (?, ?, ?)',
            [this.nombre, this.funcion, this.indice_bodega]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    //Los métodos estáticos se ejecutan sobre la clase,
    //no necesariamente sobre un objeto de la clase
    static fetchAll(id) {
        if (id === undefined){
            return db.execute('SELECT * FROM muestras');
        }else{
            return db.execute('SELECT * FROM muestras WHERE nombre = ?', [id]);
        }
        
        /*.then(([rows, fieldData]) => {
            //Si conexión fue exitosa, regresa las filas e infor
            console.log(rows);
            console.log(rows.length);
            return rows;
        })
        .catch(err => {
            //regreso e imprimo error
            console.log(err);
            return [];
        });*/
        //console.info("Conexión exitosa con la base de datos");
        //return muestras;
    }

    //-------------------------------------------------------------------
    static modificar1(id) {
        if (id === undefined){
            return db.execute('SELECT * FROM muestras');
        }else{
            indice=id;
            console.log(indice);
            return db.execute('SELECT * FROM muestras WHERE indice_medicinas = ?', [indice]);
        }
    }
    static modificar2() {
        return db.execute('UPDATE muestras SET nombre=? , funcion=?, indice_bodega=? WHERE indice_medicinas= ?',
        [this.nombre, this.funcion, this.indice_bodega, indice]
        );
    }
    /*static modificar2() {
        return db.execute('UPDATE muestras SET nombre="uno" , funcion="dos", indice_bodega=1 WHERE indice_medicinas= 6',
        [indice]
        );
    }*/
    //-------------------------------------------------------------------

}