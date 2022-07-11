function getSienuPlotas(ilgis, plotis, aukstis) {
  const perimetras = (ilgis + plotis) * 2;
  const sienuPlotas = perimetras * aukstis;
  console.log('sienuPlotas ===', sienuPlotas);
  return sienuPlotas;
}

function printToHtml(reiksme) {
  const divEl = document.getElementById('app');
  // divEl.innerHTML += `<p> apskaiciuotas sienu plotas yra ${sienuPlotas}kv/m </p>`;
  const pEl = document.createElement('p');
  pEl.textContent = `apskaiciuotas sienu plotas yra ${reiksme}kv/m`;
  // tevinisEl.append(ka ikelt)
  divEl.append(pEl);
}

// skaiciuojam sienu plota
const siena1 = getSienuPlotas(10, 5, 3);
const siena2 = getSienuPlotas(15, 15, 3);
const siena3 = getSienuPlotas(5, 5, 3);

// spausdinam sienu plota
printToHtml(siena1);
printToHtml(siena2);
printToHtml(siena3);
