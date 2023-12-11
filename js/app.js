document.getElementById('btnProduct').onclick = function () {
  calcCost();
};

function calcCost() {
  const sP = document.getElementById('selectProduct').value;
  const qP = document.getElementById('quantityProduct').value;
  let total = sP * qP;
  document.getElementById('priceProduct').innerHTML = total;

  document.getElementById('infoProduct').style.display = 'block';

  if (sP == 0 || qP == 0) {
    document.getElementById('infoProduct').style.display = 'none';
    alert ('Вкажіть значення')
    return;
  }
}