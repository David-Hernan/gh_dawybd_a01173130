const file_systems = require('fs');

//INSTRUCCIONES: Una función que reciba un arreglo de números y devuelva su promedio.
function promedios(arreglo){
    let prom = 0;
    let cuenta = 0;
    for(let item of arreglo){
        prom+=item;
        cuenta++;
    }
    prom=prom/cuenta;
    return(prom);
}

//INSTRUCCIONES: Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.
function string_texto(string){
    file_systems.writeFileSync("ejer2_salida.txt",string)
}

//INSTRUCCIONES: Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node.
function parentesis(arreglo){
    /*Función que recibe un arreglo de caracteres y revisa si los corchetes que se abrieron se cerraron después.
    Regresa True cuando encuentra errores de sintaxis en los corchetes, es decir, si alguno se abrió y
    nunca se cerró o si se cerró sin abrirse*/
    let stack=[];
    let trash;
    for(let item of arreglo){
        if (item == '(' || item == '['){ //Recorre el arreglo
            trash=stack.push(item); //Guarda los corchetes en el Stack
        }else if(item == ']'){
            if (stack.length == 0){ //Si el stack está vacío y encontró un corchete cerrado es porque falta uno de apertura
                return true;
            }else if(stack.pop() != '['){ //Si no extrae el de apertura esperado
                return true;
            } 
        }else if(item == ')'){
            if (stack.length == 0){ //Si el stack está vacío y encontró un corchete cerrado es porque falta uno de apertura
                return true;
            }else if(stack.pop() != '('){ //Si no extrae el de apertura esperado
                return true;
            }
        }     
    }
    if(stack.length == 0){ //Verifica que el Stack esté vacío al terminar las iteraciones. No estar vacío implica que abró un corchete que nunca cerró
        return false;
    }else{
        return true;
    }
} 

//INSTRUCCIONES: Una función que reciba un arreglo de números y devuelva su promedio.
//const arreglo = [10,10,10,10,10,6];
const arreglo = [23,46,24,786,324,67,3,56,668,3,6,23,56,3,57,89,34,68];
console.log("Ejercicio 1:")
console.log("El promedio del arreglo es: "+promedios(arreglo));

//INSTRUCCIONES: Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.
console.log("Ejercicio 2: ")
console.log("String impreso en ejer2_salida.txt")
const texto="Esta es la salida del ejercicio que recibe un string y lo escribe en un archivo de texto. ¡Genial!";
string_texto(texto);

//INSTRUCCIONES: Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node.
console.log("Ejercicio 3:");
console.log("Verifica si los paréntesis y corchetes que se abrieron fueron cerrados de forma correcta");
//TEST CASES
const array_corchetes1 = ['(', ')','(', ')','(', ')','(', ')','(', ')','(', ')','(', ')','(', ')','(', ')']
const array_corchetes3 = ['(', '[', ']', ')', '[', ']', '(', ')'];
const array_corchetes2 = ['(', ')', '[']
const array_corchetes4 = ['(', '(', '[', ')', ')', ']']

const arreglos=[array_corchetes1,array_corchetes2,array_corchetes3,array_corchetes4]
for(let subarreglos of arreglos){
    console.log("Le secuencia de corchetes es la siguiente: "+subarreglos.toLocaleString());
    if(parentesis(subarreglos)==false){
        console.log("Sintaxis CORRECTA en los corchetes");
    }else{
        console.log("Sintaxis INCORRECTA en los corchetes");
    }
}




