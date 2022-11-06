/*
2. Faça uma função que verifique se um número é perfeito ou não. Um valor é dito
perfeito quando ele é igual a soma dos seus divisores. Ex.: 6 é perfeito, 6 = 1 + 2 +
3, que são seus divisores. A função deve retornar um valor booleano.

3. A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando
dados sobre o salário e o número de filhos. A prefeitura deseja saber:
a. A média do salário da população;
b. A média do número de filhos;
c. O maior salário;
d. A porcentagem de pessoas com salários até R$1.500,00
Salve os dados dos habitantes em arrays, crie uma função para cada item que
retorna o que é pedido.

4. Crie uma função que recebe 3 notas de um aluno como parâmetro e uma letra. Se a
letra for A a função calcula a média aritmética das notas do aluno, se for P, a sua
média ponderada (pesos: 5, 3 e 2). A média calculada deve ser retornada;





1. Uma empresa comercial quer um programa para controlar o orçamento de seus
projetos. Crie uma função para criar um projeto, essa função deve solicitar ao
usuário o nome do projeto e o seu orçamento total. Crie também uma função que
recebe 3 parâmetros: o nome do projeto, um valor e o tipo de despesa (“R” - receita
e “D” - despesa), uma receita deve ser somada ao saldo e uma despesa subtraída
do saldo, seu código deve impedir uma despesa maior que o saldo disponível e no
final exibir o saldo atual desse projeto.
*/

let saldoTotal = 0
let nomeProjeto
let orcamentoTotal

function CriarProjeto() {
    nomeProjeto = prompt("Insira o nome do projeto")
    orcamentoTotal = parseInt(prompt("Insira o orçamento total do projeto"))
}

function OrganizarProjeto(nomeProjeto, valor, tipoDeDespesa) {

    if (tipoDeDespesa == "d" && valor > orcamentoTotal) {

        console.log("A despesa foi maior que o Saldo total")

    } else {

        if (tipoDeDespesa == "r") {
            orcamentoTotal = orcamentoTotal + valor

        } else if (tipoDeDespesa == "d") {
            orcamentoTotal = orcamentoTotal - valor
        }
    }
    saldoTotal = orcamentoTotal
}

let continuar = "s"

while (continuar == "s") {

    CriarProjeto()
    
    let tipoDeDespesa = prompt("Insira o tipo de despesa para seu projeto,  Receita(r) ou Despesa(d)")
    let valor = parseInt(prompt("Insira o valor desejado"))
    OrganizarProjeto(nomeProjeto, valor, tipoDeDespesa)

    console.log("O saldo total do projeto é " + saldoTotal)

    let desejaContinuar = prompt("Deseja continar fazendo execuções? s ou n")
    if (desejaContinuar != 's') {
        continuar = "n"
    }

}