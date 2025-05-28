function calcularInvestimento() {
  const capital = parseFloat(document.getElementById('capital').value);
  const taxa = parseFloat(document.getElementById('taxa').value) / 100;
  const periodo = parseInt(document.getElementById('periodo').value);
  const aporte = parseFloat(document.getElementById('aporte').value);
  const impostoPercentual = parseFloat(document.getElementById('imposto').value) / 100;

  const resultado = document.getElementById('resultado');
  const detalhes = document.getElementById('detalhes').getElementsByTagName('tbody')[0];

  if (isNaN(capital) || isNaN(taxa) || isNaN(periodo) || isNaN(aporte) || isNaN(impostoPercentual)) {
    resultado.innerText = "Por favor, preencha todos os campos corretamente.";
    detalhes.innerHTML = '';
    return;
  }

  let saldo = capital;
  detalhes.innerHTML = '';

  for (let mes = 1; mes <= periodo; mes++) {
    const rendimentoBruto = saldo * taxa;
    const imposto = rendimentoBruto * impostoPercentual; // imposto variável
    const rendimentoLiquido = rendimentoBruto - imposto;

    saldo += rendimentoLiquido; // adiciona rendimento líquido
    saldo += aporte;           // adiciona aporte mensal

    const row = document.createElement('tr');

    const cellMes = document.createElement('td');
    cellMes.textContent = mes;

    const cellBruto = document.createElement('td');
    cellBruto.textContent = rendimentoBruto.toFixed(2);

    const cellIR = document.createElement('td');
    cellIR.textContent = imposto.toFixed(2);

    const cellLiquido = document.createElement('td');
    cellLiquido.textContent = rendimentoLiquido.toFixed(2);

    const cellAporte = document.createElement('td');
    cellAporte.textContent = aporte.toFixed(2);

    const cellSaldo = document.createElement('td');
    cellSaldo.textContent = saldo.toFixed(2);

    row.appendChild(cellMes);
    row.appendChild(cellBruto);
    row.appendChild(cellIR);
    row.appendChild(cellLiquido);
    row.appendChild(cellAporte);
    row.appendChild(cellSaldo);

    detalhes.appendChild(row);
  }

  resultado.innerText = `Valor final após ${periodo} meses: R$ ${saldo.toFixed(2)}`;
}
