document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); 

      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;

      if (name === '' || email === '' || message === '') {
          alert('Por favor, preencha todos os campos.');
      } else {
          alert('Obrigado por entrar em contato, ' + name + '! Sua mensagem foi enviada com sucesso.');
      
          document.getElementById('contactForm').reset();
      }
  });
});