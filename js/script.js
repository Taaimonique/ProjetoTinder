// Captura envio do formulário de login
// ...existing code...
document.getElementById('form-login')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Login enviado!");
});

// Captura envio do formulário de cadastro
document.getElementById('form-cadastro')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Cadastro enviado!");
});

// Garante que todos os links abram na mesma aba
document.querySelectorAll('a').forEach(link => {
  link.target = '_self';
});
