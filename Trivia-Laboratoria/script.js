var av1=''
var av2=''
function answer1(data){ // inicio de la funcion y se asigna el valor
 if(data == 'q1a1'){    //evaluar el valor de la variable 
   //alert('q1a1');       // indica cuál es la opción seleccionada 
   document.getElementById('q1a1').checked=true;
   document.getElementById('q1a2').checked=false; //cambiar el estado de la casilla no seleccionada
   document.getElementById('q1a3').checked=false;
   av1=document.getElementById('q1a1').value;
   console.log(av1);
 } 
 else if(data == 'q1a2'){ 
   //alert('q1a2');
   document.getElementById('q1a2').checked=true;
   document.getElementById('q1a1').checked=false;
   document.getElementById('q1a3').checked=false;
   av1=document.getElementById('q1a2').value;
   console.log(av1);
 }
 else if(data == 'q1a3'){ 
   document.getElementById('q1a3').checked=true;
   document.getElementById('q1a1').checked=false;
   document.getElementById('q1a2').checked=false;
   av1=document.getElementById('q1a3').value;
   console.log(av1); 
 }
 else { console.log('error'); }
};
//aquí inicia la pregunta dos
function answer2(data){ // inicio de la funcion y se asigna el valor
 if(data == 'q2a1'){    //evaluar el valor de la variable 
   //alert('q1a1');       // indica cuál es la opción seleccionada 
   document.getElementById('q2a1').checked=true;
   document.getElementById('q2a2').checked=false; //cambiar el estado de la casilla no seleccionada
   document.getElementById('q2a3').checked=false;
   av2=document.getElementById('q2a1').value;
   console.log(av2);
 } 
 else if(data == 'q2a2'){ 
   //alert('q1a2');
   document.getElementById('q2a2').checked=true;
   document.getElementById('q2a1').checked=false;
   document.getElementById('q2a3').checked=false;
   av2=document.getElementById('q2a2').value;
   console.log(av2);
 }
 else if(data == 'q2a3'){ 
   document.getElementById('q2a3').checked=true;
   document.getElementById('q2a1').checked=false;
   document.getElementById('q2a2').checked=false;
   av2=document.getElementById('q2a3').value;
   console.log(av2);
 }
 else { console.log('error'); }
};

function validate(){
  if(av1 == 'Tom Cruise'){ //correcto
    document.getElementById('q1p1').style.color="#55c624"
    if(av2 == 'Emma Watson'){ //correcto
      document.getElementById('q2p1').style.color="#55c624"
      alert('¡Bien hecho!');
    } else { //incorrecto
      document.getElementById('q2p1').style.color="red"
    }
  } else { //incorrecto
    document.getElementById('q1p1').style.color="red"
    if(av2 == 'Emma Watson'){ //correcto
      document.getElementById('q2p1').style.color="#55c624"
    } else { //incorrecto
      document.getElementById('q2p1').style.color="red"
    }
  }
};