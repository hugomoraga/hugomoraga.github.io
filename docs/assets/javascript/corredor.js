function mostrarMensaje(tipo, mensaje) {
    const div = document.getElementById("mensajes");
    if( tipo == 'error') {
        div.className = "error"
    } else {
        div.className = "ok"
    }
    div.innerHTML = mensaje
}
  
  function registrarPropiedad(event) {
    event.preventDefault(); 

    const boton = document.getElementById("boton").disabled = true;



     // recupero los valores ingresador x el usuario
     const form      = event.currentTarget;
     const nombre    = form[0].value 
     const tipo      = form[1].value 
     const direccion = form[2].value 
     const comuna    = form[3].value 
     const region    = form[4].value 
     const valor_uf  = form[5].value 
     const valor_pesos   = form[6].value 


    const baseURL = 'https://mwouximqkpguzanqswfi.supabase.co';
    const apiCall   = '/rest/v1/propiedades'

    const apiKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzc1ODk0MywiZXhwIjoxOTU5MzM0OTQzfQ.LdF6-P91FlknXc06maRQ7tkI3SsjgXJ5wplOaA6U2bI'
    const url       = baseURL + apiCall

    const propiedad    = {
        nombre,
        tipo,
        direccion,
        comuna,
        region,
        valor_uf,
        valor_pesos
    } 
    
    fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "apikey": apiKey,
            "authorization": "Bearer "+apiKey
        },
        body: JSON.stringify(propiedad)
    })
        .then( response => {
            if( response.ok ) {
                mostrarMensaje("ok", "Se han guardado correctamente sus datos.");
                return response.json();
            } else {
                mostrarMensaje("error", "Hubo un error al guardar el registro.");
            }
        })
        .then( data     => console.log(data) ) 
        .catch( err     => mostrarMensaje("error", "Se generó una excepción al ejecutar, contacte al administrador si el problema persiste.") )
    ;

    return false;
}

document.getElementById("form-registro")
    .addEventListener("submit", registrarPropiedad);