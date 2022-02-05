!async function(){

    let uf = fetch('https://mindicador.cl/api/uf')
        .then(result => result.json())
        .then((output) => {
            return uf = output.serie[0].valor;
        
            
    }).catch(err => console.error(err));
    
    }();
    