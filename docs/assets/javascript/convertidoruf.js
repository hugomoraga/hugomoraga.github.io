async function getUf() {

    let response = await fetch('https://mindicador.cl/api/uf');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    let data = await response.json()
    const uf = parseInt(data.serie[0].valor) 
    return uf;

}

const uf = getUf();

async function currencyConverter(source, valNum, uf) {
  uf = await getUf();
  valNum = parseFloat(valNum);
  var inputUf = document.getElementById("inputUf");
  var inputPesos = document.getElementById("inputPesos");
  if (source == "inputUf") {
    inputPesos.value = (valNum * uf).toFixed(0);
  }
  if (source == "inputPesos") {
    inputUf.value = (valNum / uf).toFixed(0);
  }
}

currencyConverter();
