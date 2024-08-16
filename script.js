document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const service = document.getElementById('service').value;

    // Verificação básica se todos os campos estão preenchidos
    if (name && email && date && time && service) {
        // Simula o envio dos dados para o servidor
        console.log("Dados enviados:", {
            name: name,
            email: email,
            date: date,
            time: time,
            service: service
        });

        // Exibe mensagem de confirmação
        document.getElementById('message').innerHTML = `
            <p>Obrigado, ${name}! Seu agendamento para ${service} no dia ${date} às ${time} foi realizado com sucesso.</p>
        `;

        // Limpa o formulário
        document.getElementById('scheduleForm').reset();
    } else {
        // Exibe mensagem de erro
        document.getElementById('message').innerHTML = `
            <p style="color: red;">Por favor, preencha todos os campos.</p>
        `;
    }
});
