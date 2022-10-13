let scanf = require('scanf');
console.log("Digita la edad de la persona");
let edad = scanf('%d');

while (isNaN(edad)){

    console.log("Ingrese un número")
    console.log("Digita la edad de la persona");
    edad = scanf('%d');
    
};
if (edad >= 18)
        console.log("La persona puede conducir");
    else
        console.log("La persona no puede conducir");        
   
    


