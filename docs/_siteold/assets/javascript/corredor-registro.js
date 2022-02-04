const { createClient } = supabase
supabase = createClient("https://mwouximqkpguzanqswfi.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzc1ODk0MywiZXhwIjoxOTU5MzM0OTQzfQ.LdF6-P91FlknXc06maRQ7tkI3SsjgXJ5wplOaA6U2bI")

const form = document.querySelector("#form-registro")
form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const formInputs = form.querySelectorAll('input, select, textarea')

    let submision = {}

    formInputs.forEach(element => {
        const { value, name } = element
        if (value) {
            submision[name] = value
        }
    })



    const { error, data } = await supabase.from('propiedades').insert([submision])

    const div = document.getElementById("mensajes");

    if (error) {
        div.innerHTML = 'Error en el Registro intente nuevamente'
    } else {
        div.innerHTML = 'registro realizado'
    }


})