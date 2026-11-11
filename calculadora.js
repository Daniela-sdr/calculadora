//SILVIA DANIEA RUIZ (Daniela)
//DNI 20467216

import promptSync from "prompt-sync";

// Objeto que contiene propiedades y métodos de las operaciones matemáticas
const calculadora = {
    num1: 0,
    num2: 0,
    sumar: function(){
        return this.num1 + this.num2;
    },
    multiplicar: function(){
        return this.num1 * this.num2;
    },
    restar: function(){
        return this.num1 - this.num2;
    },
    dividir: function(){
        return this.num1 / this.num2;
    },
    potencia: function(){
        return this.num1 ** this.num2;
    },
    raiz: function(){
        return this.num1 ** (1/this.num2);
    },
}

const promptNumero = promptSync();

//Muestra las opciones disponibles (Menú)
function mostrarMenu(){
    console.log(`
        /* Calculadora */
        1. Sumar
        2. Restar
        3. Multiplicar
        4. Dividir
        5. Potencia
        6. Raíz
        7. Salir
        `);
};

//Solicita el ingreso de 2 números al usuario y los devuelve en un array, convertidos a número
function ingresarNumero(){
    let num1Ingresado = promptNumero("Ingrese un número: ");
    let num1 = Number(num1Ingresado);
    let num2Ingresado = promptNumero("Ingrese otro número: ");
    let num2 = Number(num2Ingresado);
    return [num1, num2];
}

let opcion;

//Mantiene el menú activo hasta que el usuario selecciona salir (Opc.7)
do{
    mostrarMenu();

    opcion = Number(promptNumero("Ingresá una opción: "));
    
    if (opcion >= 1 && opcion < 7){
        const [num1, num2] = ingresarNumero(); //Desestructuración del array devuelto por ingresarNumero()
        calculadora.num1 = num1;               //Almacena los números ingresados 
        calculadora.num2 = num2;               //  en las propiedades del objeto
        //Seleccion de operaciones y validaciones
        if (opcion === 1){
            console.log(`La suma de ${num1} + ${num2} es: ${calculadora.sumar()} `);
        }else if(opcion === 2){
            console.log(`La resta de ${num1} - ${num2} es: ${calculadora.restar()} `);
        }else if(opcion === 3){
            console.log(`La multiplicación de ${num1} * ${num2} es: ${calculadora.multiplicar()} `);
        }else if(opcion === 4){
            if(num2 === 0){
                console.log("No se puede realizar la división por 0")
            }else {
                console.log(`La división de ${num1} / ${num2} es: ${calculadora.dividir()} `);      
            }       
        }else if(opcion === 5){
            console.log(`La potencia de ${num1} ** ${num2} es: ${calculadora.potencia()} `);
        }else if(opcion === 6){
            if(num1 >= 0 && num2 !== 0){
                console.log(`La raíz de índice ${num2} de ${num1} es: ${calculadora.raiz()} `);
            }else {
                console.log("No se puede realizar la operación");
            }
        }
    //Control de opciones inválidas    
    }else if(opcion !== 7){
        console.log("Opción inválida. Elegí una opción del 1 al 7.");
    }

}while (opcion !== 7);
console.log("Gracias por usar Calculadora!!! Hasta la próxima!!!");
