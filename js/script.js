const carros = ['Fusca', 'Civic', 'Gol', 'Corolla', 'Uno'];
const campo1 = document.getElementById('campo1');
const campo2 = document.getElementById('campo2');
const moverBtn = document.getElementById('mover');

let itemSelecionado = null;

function criarItem(nome) {
  const div = document.createElement('div');
  div.className = 'item';
  div.textContent = nome;
  div.onclick = () => {
    document.querySelectorAll('.item').forEach(el => el.classList.remove('selected'));
    div.classList.add('selected');
    itemSelecionado = div;
    atualizarBotao();
  };
  return div;
}

function atualizarBotao() {
    if (itemSelecionado) {
      const emCampo1 = itemSelecionado.parentElement === campo1;
      moverBtn.innerHTML = emCampo1 ? '<span class="seta">→</span> Mover' : '<span class="seta">←</span> Mover';
    } else {
      moverBtn.innerHTML = '<span class="seta">→</span> Mover';
    }
  }
  
carros.forEach(nome => campo1.appendChild(criarItem(nome)));

moverBtn.onclick = () => {
  if (itemSelecionado) {
    const origem = itemSelecionado.parentElement;
    const destino = origem === campo1 ? campo2 : campo1;
    destino.appendChild(itemSelecionado);
    itemSelecionado.classList.remove('selected');
    itemSelecionado = null;
    atualizarBotao();
  }
};
