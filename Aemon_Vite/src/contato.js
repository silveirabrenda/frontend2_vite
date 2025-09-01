// Aguarda o carregamento completo do DOM para rodar o script
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona o formulário pelo ID
  const form = document.getElementById('form-contato');
  // Seleciona o modal de feedback e seus elementos internos
  const modal = document.getElementById('modal-feedback');
  const modalDesc = document.getElementById('modal-desc');
  const modalCloseBtn = document.getElementById('modal-close');

  // Evento de envio do formulário
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita o envio padrão para podermos enviar via fetch

    // Cria um objeto FormData com os dados do formulário
    const formData = new FormData(form);

    try {
      // Envia os dados via fetch para o endpoint configurado no atributo action do form
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Accept': 'application/json' // Espera receber JSON na resposta
        },
        body: formData
      });

      // Verifica se o envio foi bem sucedido (status HTTP 200)
      if (response.ok) {
        // Exibe mensagem de sucesso no modal
        showModal('Mensagem enviada com sucesso! Obrigada pelo contato.');
        // Reseta os campos do formulário
        form.reset();
      } else {
        // Caso o servidor retorne erro, exibe mensagem de falha
        showModal('Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
      }
    } catch (error) {
      // Em caso de erro na conexão, exibe mensagem apropriada
      showModal('Erro de conexão. Verifique sua internet e tente novamente.');
    }
  });

  // Fecha o modal quando o botão "Fechar" for clicado
  modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  /**
   * Função para mostrar o modal com a mensagem de feedback
   * @param {string} message - Texto da mensagem a ser exibida
   */
  function showModal(message) {
    modalDesc.textContent = message; // Coloca o texto no modal
    modal.classList.add('active'); // Exibe o modal adicionando a classe 'active'
  }
});
