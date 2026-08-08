const Usuario = getElementById("email");
const Senha = getElementById("password");

const UsuariosRegistrados = [
    { email: "igorpazzianoto@gmail.com", senha: "123456" },
    { email: "georginapazzianoto@gmail.com", senha: "123456" },
];

if (!localStorage.getItem("Registros")) {
    localStorage.setItem("Registros", JSON.stringify(UsuariosRegistrados));
}
const UsuariosNoBancoDeDados = JSON.parse(localStorage.getItem("Registros"));

const ProcurarUsuario = UsuariosRegistrados.find(usuario => 
    usuario.email === Usuario && usuario.senha === Senha
);

if (ProcurarUsuario)
{
    alert("Login realizado com sucesso!");
    window.location.href = "BancoJuventude.html";
} 
else 
{
    mensagem.textContent = "E-mail ou senha incorretos!";
}