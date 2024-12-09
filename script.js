document.getElementById('meu-botao').addEventListener('click', function() {
    const mensagem = document.getElementById('hello world');
    mensagem.textContent = "Você clicou no botão! Parabéns por criar seu primeiro site interativo.";
});
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem-form').value;

    const resultado = document.getElementById('resultado');
    resultado.textContent = `Obrigado, ${nome}! Recebemos sua mensagem: "${mensagem}". Responderemos em breve para o email: ${email}.`;
});
