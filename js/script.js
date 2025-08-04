// Elementos
const iniciarBtn = document.getElementById('iniciarBtn');
const tipoEntregaDiv = document.getElementById('tipoEntrega');
const propriaBtn = document.getElementById('propriaBtn');
const parceiraBtn = document.getElementById('parceiraBtn');
const formularioDiv = document.getElementById('formulario');
const voltarBtn = document.getElementById('voltarBtn');
const calcularBtn = document.getElementById('calcularBtn');
const resultadoDiv = document.getElementById('resultado');
const tipoSelecionadoP = document.getElementById('tipoSelecionado');

let tipoEntrega = '';

// Botão Iniciar
iniciarBtn.addEventListener('click', () => {
  iniciarBtn.style.display = 'none';
  tipoEntregaDiv.classList.remove('hidden');
});

// Seleção do tipo de entrega
propriaBtn.addEventListener('click', () => {
  tipoEntrega = 'própria';
  tipoSelecionadoP.textContent = 'Entrega Selecionada: Entrega Própria';
  tipoEntregaDiv.classList.add('hidden');
  formularioDiv.classList.remove('hidden');
});

parceiraBtn.addEventListener('click', () => {
  tipoEntrega = 'parceira';
  tipoSelecionadoP.textContent = 'Entrega Selecionada: Entrega Parceira';
  tipoEntregaDiv.classList.add('hidden');
  formularioDiv.classList.remove('hidden');
});

// Botão Voltar
voltarBtn.addEventListener('click', () => {
  tipoEntrega = '';
  iniciarBtn.style.display = 'block';
  tipoEntregaDiv.classList.add('hidden');
  formularioDiv.classList.add('hidden');
  resultadoDiv.textContent = '';
  tipoSelecionadoP.textContent = '';
  limparCampos();
});

// Limpa os campos
function limparCampos() {
  document.getElementById('valorProduto').value = '';
  document.getElementById('valorDesconto').value = '';
  document.getElementById('valorEntrega').value = '';
}

// Cálculo
calcularBtn.addEventListener('click', () => {
  const valorProduto = parseFloat(document.getElementById('valorProduto').value) || 0;
  const valorDesconto = parseFloat(document.getElementById('valorDesconto').value) || 0;
  const valorEntrega = parseFloat(document.getElementById('valorEntrega').value) || 0;

  let subtotal = valorProduto + valorDesconto + valorEntrega;
  let taxa = 0;

  if (tipoEntrega === 'própria') {
    taxa = 0.20; // 20%
  } else if (tipoEntrega === 'parceira') {
    taxa = 0.32; // 32%
  }

  const valorFinal = subtotal + (subtotal * taxa);

  resultadoDiv.textContent = `Preço Final no iFood: R$ ${valorFinal.toFixed(2)}`;
});
