function validar(){
    usuario = document.getElementById("email").value;
    clave = document.getElementById("password").value;

    // Hasheamos el usuario y la clave
    usuario_hash = CryptoJS.SHA256(usuario);
    clave_hash = CryptoJS.SHA256(clave);

    // Comparamos los valores hasheados con los valores esperados
    if ((usuario_hash.toString(CryptoJS.enc.Hex) === '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918') && (clave_hash.toString(CryptoJS.enc.Hex) === '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918')){
        alert("Acceso otorgado!!");
        window.open("/inicio", "_self");
    }
    else{
        alert("Lo sentimos no tiene acceso")
    }
}

// const hash = CryptoJS.SHA256("Hola mundo");
// console.log(hash.toString());


