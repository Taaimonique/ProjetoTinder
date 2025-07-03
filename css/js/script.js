// Captura envio do formulário de login
document.getElementById('form-login')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Login enviado!");
});

// Captura envio do formulário de cadastro
document.getElementById('form-cadastro')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Cadastro enviado!");
});
// Captura o clique do botão de teste