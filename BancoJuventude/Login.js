const Formulario = document.getElementById("Formulario");
const Usuario = document.getElementById("email");
const Senha = document.getElementById("password");

const UsuariosRegistrados = [
    { email: "igorpazzianoto@gmail.com", senha: "123456"},
    { email: "georginapazzianoto@gmail.com", senha: "123456"},
];

if (!localStorage.getItem("Registros")) {
    localStorage.setItem("Registros", JSON.stringify(UsuariosRegistrados));
}
const UsuariosNoBancoDeDados = JSON.parse(localStorage.getItem("Registros"));

Formulario.addEventListener("submit", function(event) {
    event.preventDefault();

const ProcurarUsuario = UsuariosNoBancoDeDados.find(usuario => 
    usuario.email === Usuario.value && usuario.senha === Senha.value
);

if (ProcurarUsuario) {
        alert("Login realizado com sucesso!");
        window.location.href = "https://lucasscotthood.github.io/Ordem/BancoJuventude/BancoJuventude.html";
    } else {
        mensagem.textContent = "E-mail ou senha incorretos!";
    }
});
