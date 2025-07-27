// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', function () {
  const envelope = document.getElementById('envelope');
  const conteudo = document.getElementById('conteudo');

  // Ao clicar no envelope, mostrar o conteúdo
  envelope.addEventListener('click', () => {
    envelope.style.display = 'none'; // Esconde o envelope
    conteudo.style.display = 'block'; // Mostra o conteúdo
  });
});
