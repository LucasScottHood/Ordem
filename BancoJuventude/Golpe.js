import {Logado} from "./Login.js";

if (!Logado) {
	alert("Você precisa estar logado para acessar esta página!");
	window.location.href = "Login.html";
}

let Cartas = [ ["Ás de Paus", "2 de Paus", "3 de Paus", "4 de Paus", "5 de Paus", "6 de Paus", "7 de Paus", "Dama de Paus", "Valete de Paus", "Rei de Paus"], ["Ás de Copas", "2 de Copas", "3 de Copas", "4 de Copas", "5 de Copas", "6 de Copas", "7 de Copas", "Dama de Copas", "Valete de Copas", "Rei de Copas"], ["Ás de Espadas", "2 de Espadas", "3 de Espadas", "4 de Espadas", "5 de Espadas", "6 de Espadas", "7 de Espadas", "Dama de Espadas", "Valete de Espadas", "Rei de Espadas"], ["Ás de Ouros", "2 de Ouros", "3 de Ouros", "4 de Ouros", "5 de Ouros", "6 de Ouros", "7 de Ouros", "Dama de Ouros", "Valete de Ouros", "Rei de Ouros"] ];
let j = 0, CartaUm = 0, CartaDois = 0, CartaTres = 0, CartasNoJogo = [];
while (j < (Jogadores+1)*3)
{
	let CartinhasNoBaralho = j%3
	let ONaipe = Math.trunc(Math.random()*Cartas.length);
	let ACarta = Math.trunc(Math.random()*(Cartas[ONaipe].length));
	let Distribuicao = Cartas[ONaipe][ACarta];
	Cartas[ONaipe].splice(ACarta, 1);
	if (CartinhasNoBaralho == 0)
	{
		CartaUm = Distribuicao;
	}
	if (CartinhasNoBaralho == 1)
	{
	    CartaDois = Distribuicao;
	}
	if (CartinhasNoBaralho == 2)
	{
		CartaTres = Distribuicao;
	}
	let Indice = 0;
	while (Indice < Cartas.length) 
	{
		let TamanhoCartas = Cartas[Indice];
		if (TamanhoCartas == 0) 
		{
			Cartas.splice(Indice, 1);
			Indice--;
		} 
		else 
		{
			Indice++;
		}
	}
    if ((CartaUm != 0) && (CartaDois != 0) && (CartaTres != 0))
	{
	    CartasNoJogo.push(CartaUm, CartaDois, CartaTres)
	}
	if (CartinhasNoBaralho == 0)
	{
		CartaUm = 0;
		CartaDois = 0;
		CartaTres = 0;
	}
	j++
}