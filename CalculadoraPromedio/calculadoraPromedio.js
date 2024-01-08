let Nombre = prompt('Ingrese su nombre');

if(isNaN(Nombre)){ 
    /*document.write(`${Nombre} - Nombre correcto`);*/
    let Nota1 = parseInt(prompt("Ingrese un nota 1"));
    let Nota2 = parseInt(prompt("Ingrese un nota 2"));
    let Nota3 = parseInt(prompt("Ingrese un nota 3"));

    if (Nota1<=10 && 0<=Nota1 && Nota2<=10 && 0<=Nota2 && Nota3<=10 && 0<=Nota3){ 
        /*document.write(`Notas correctas`);*/
        let promedio =parseFloat((Nota1+Nota2+Nota3)/3);
        if (promedio>=7){
            document.write(`${Nombre} - ¡Felicitaciones! Has aprobado con un promedio de: ${promedio}`);
        }
        else if (promedio<7){
            document.write(`${Nombre} - Gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es: ${promedio}`);
        }    
         
    } 
    else {   
        document.write(`Notas ingresadas incorrectas`);
        }

  } else {
    document.write(`${Nombre} - Nombre ingresado incorrecto`);
  }


