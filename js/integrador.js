// Funciónpara ocultar el boton de ir al inicio

function btninicio (){
    if (window.location.hash == "#inicio" || window.location.pathname == "/index.html")

    {
        document.getElementById("btninicio").className="d-none"
    }
    else{
        document.getElementById("btninicio").className=""
    }
    
}

function EnviarTema() {

    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let email=document.getElementById("email").value;
    let celular=document.getElementById("celular").value;
    let tema=document.getElementById("tema").value;

    if (nombre =="" && apellido== "" && email=="" && celular==""  ){
        document.getElementById("msgEnviarTema").innerHTML="Complete todos los campos."
            document.getElementById("msgEnviarTema").className="bg-danger m-2 p-2 rounded"
    }
    else {
        let texto=document.getElementById("tema").value;
        textoDividido=texto.split(" ");
        numPalab=textoDividido.length
        if (numPalab<=299){
            document.getElementById("msgEnviarTema").innerHTML="El resumen de su Tema debe contener al menos 300 palabras."
            document.getElementById("msgEnviarTema").className="bg-danger m-2 p-2 rounded"

        }
         else {
            
            document.getElementById("msgEnviarTema").innerHTML="Los datos ingresados son: </br>Nombre: " + nombre + "</br>Apellido: " + apellido + "</br>Email: " + email + "</br>Celular: " + celular + "</br>Tema: " + tema;
        document.getElementById("msgEnviarTema").className="bg-success m-2 p-2 rounded text-light"
        }
    }
}

function validarEmail() {
    let email=document.getElementById("email").value

    if (email.indexOf("@")==-1) {
        document.getElementById("msgUser").innerHTML="El Email debe conenter un  @"
        document.getElementById("msgUser").className="bg-danger m-2 p-2 rounded"
    } 
     else {
        document.getElementById("msgUser").innerHTML=""
        document.getElementById("msgUser").className=""

    }
}
function validarCelular() {
    let celular=document.getElementById("celular").value

    if (celular.indexOf("+")==-1) {
        document.getElementById("msgCelu").innerHTML="El Celular debe conenter un el código de país Ej. +54"
        document.getElementById("msgCelu").className="bg-danger m-2 p-2 rounded"
    } 
     else {
        document.getElementById("msgCelu").innerHTML=""
        document.getElementById("msgCelu").className=""

    }
}
function contarPalabras() {
    tema=document.getElementById("tema");
    //console.log("Ingreso a contarPalabras");
    let texto=document.getElementById("tema").value;
    textoDividido=texto.split(" ");
    numPalab=textoDividido.length
    if (numPalab <= 300 ){
        //console.log("ingreso a es menor a 300");
        

            document.getElementById("msgTema").innerHTML="Palabras Restantes " + (300 - numPalab);
            document.getElementById("msgTema").className="bg-info m-2 p-2 rounded";
        
    }
    else{
        document.getElementById("msgTema").innerHTML="";
            document.getElementById("msgTema").className="";
    }
    
    
}

//console.log(window.location.hash);
//console.log(window.location.pathname);

