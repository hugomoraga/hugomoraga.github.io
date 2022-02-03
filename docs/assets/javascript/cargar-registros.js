const { createClient } = supabase;

supabase = createClient(
  "https://mwouximqkpguzanqswfi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzc1ODk0MywiZXhwIjoxOTU5MzM0OTQzfQ.LdF6-P91FlknXc06maRQ7tkI3SsjgXJ5wplOaA6U2bI"
);

async function loadpropiedades() {
  const ul = document.getElementById("propiedades");
  const list = document.createDocumentFragment();
  const { data: propiedades, error } = await supabase
    .from("propiedades")
    .select("*");
  let mostrarPropiedades = propiedades;

  mostrarPropiedades.map(function (propiedad) {
    let li = document.createElement("li");
    li.className = "card col-md-3 m-3 p-3";

    let nombre = document.createElement("h5");
    let direccion = document.createElement("p");
    let tipo;
    let comuna = document.createElement("p");
    let region;
    let valor_pesos = document.createElement("p");
    let valor_uf = document.createElement("p");

    nombre.innerHTML = `${propiedad.nombre} <span class="badge rounded-pill fs-6 bg-primary">${propiedad.tipo}</span>`;
    direccion.innerHTML = `<strong>Direccion:</strong> ${propiedad.direccion}`;
    comuna.innerHTML = `${propiedad.comuna} , ${propiedad.region}`;
    valor_pesos.innerHTML = `<strong>Precio:</strong> $ ${propiedad.valor_pesos}`;
    valor_uf.innerHTML = ` ${propiedad.valor_uf}`;

    li.appendChild(nombre);
    li.appendChild(direccion);
    li.appendChild(comuna);
    li.appendChild(valor_pesos);
    list.appendChild(li);
  });

  ul.appendChild(list);
}

loadpropiedades();
