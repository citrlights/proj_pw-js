var nome = window.prompt ("Digite seu nome:")
var idade = Number(window.prompt("Digite sua idade:"))
document.write(`Seu nome é <b>${nome}</b> e tem <b>${idade}</b> anos <br>`);
document.write(`Seu nome tem <b>${nome.lenght} caracteres.</b><br>`);
document.write(`Seu nome em letras maiúsculas é <b>${nome.toUpperCase()}</b><br>`);
document.write(`Sua idade em dias são <b>${idade*365}</b>`)