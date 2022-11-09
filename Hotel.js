/* Você deve criar um sistema de reservas para um hotel organize os dados de cada
entidade em arrays diferentes:
Um hotel deve possuir: id, nome, categoria, endereço e telefone;
Uma reserva deve possuir: id, id do hotel, nome do responsável, dia de entrada e
dia de saída;
1. Criar funções para cadastrar um hotel e uma reserva;
2. Criar uma função que recebe como parâmetro o id do hotel e exibe na tela todas as
reservas neste hotel com as seguintes informações: nome do hotel - nome do
responsável da reserva - dia de entrada - dia de saída
3. Criar uma função que recebe como parâmetro o id de uma reserva e exibe no
console: nome do hotel - endereço - dia de entrada - dia de saída
4. Criar uma função que recebe como parâmetro o nome de uma pessoa e exibe na
tela todas as suas reservas;
5. Criar uma função que recebe como parâmetro uma categoria e retorna um array
com todos os hotéis nessa categoria;
6. Criar uma função que recebe o id de um hotel e um telefone como parâmetro, a
função deve atualizar o telefone de cadastro com o do parâmetro
Algumas validações devem ser feitas na hora de fazer os cadastros:
● O id não pode ser igual a nenhum outro já existente;
● O dia de entrada não pode ser maior que o de saída;
● No cadastro de uma reserva o id do hotel deve ser válido, ou seja, não deve permitir
o cadastro de um hotel que não esteja no sistema; */

// hotel
let idHotel = []
let nomeHotel = []
let categoria = []
let endereco = []
let telefone = []
let indexHotel = 0

// reserva 
let idReserva = []
let idReservaHotel = []
let nomeReserva = []
let diaEntrada = []
let diaSaida = []
let indexReserva = 0

//Funções

function CadastrarHotel(){
    idHotel[indexHotel] = indexHotel + 1
    nomeHotel[indexHotel] = prompt("Insira o nome do Hotel.")
    categoria[indexHotel] = prompt("Insira a categoria do Hotel.")
    endereco[indexHotel] = prompt("Insira o endereço do Hotel.")
    telefone[indexHotel] = prompt("Insira o telefone do Hotel.")
    indexHotel++ 
}

function CadastrarReserva(){
    indexReserva = indexReserva + 1
    idReservaHotel[indexReserva] = prompt("Insira o ID do Hotel que deseja fazer a reserva.")
    nomeReserva[indexReserva] = prompt("Insira o nome do responsável pela reserva.")
    diaEntrada[indexReserva] = prompt("Dia de CheckIn no Hotel.")
    diaSaida[indexReserva] = prompt("Dia do CheckOut no Hotel.")
    indexReserva++
}

function BuscarPorId(id) {
    for (let index = 0; index < idReserva.length; index++) {
        if(id == idReserva[index]){
            console.log("Nome do Hotel: " + nomeHotel[index] + ". Endereço do hotel: " + endereco[index] + ". Dia de Check In: " + diaEntrada[index] + ". Dia de Check Out: " + diaSaida[index])
        } else {
            console.log("ID não encontrado")
        }
    }
} 

function BuscarPorNome(nome){
    for (let index = 0; index < nomeReserva.length; index++) {
        if(nome == nomeReserva[index]){
            console.log("Todas as reservas no nome: " + idReserva[index])
        } else{
            console.log("Nome não encontrado")
        }
    }
}

function BuscarPorCategoria(cat){
    for (let index = 0; index < categoria.length; index++) {
        if(cat == categoria[index]){
            console.log("Todos os hoteis na categoria - " + cat + " : " + categoria[index])
        } else {
            console.log("Categoria não encontrada")
        }
    }
}

function AtualizarTelefone(id, novoTel){
    for (let index = 0; index < idHotel.length; index++) {
        if(id == idHotel[index]){
            telefone[index] = novoTel
        }
    }
}

// Fluxo de menu
let continuar = true

do{
    let opcao = prompt("Escolha uma opção: 1 - Cadastrar Hotel, 2 - Fazer Reserva, 3 - Buscar por ID, 4 - Buscar por nome, 5 - Buscar por Categoria, 6 - Atualizar Telefone, 7 - Encerrar")

    switch(opcao){
        case "1":
            CadastrarHotel()
            console.log("Hotel Cadastrado com sucesso.")
            break
        case "2":
            CadastrarReserva()
            console.log("Reserva Realizada com sucesso.")
            break
        case "3":
            let id = prompt("Insira o id que deseja buscar")
            BuscarPorId(id)
            break
        case "4":
            let nome = prompt("Digite um nome para busca")
            BuscarPorNome(nome)
            break
        case "5":
            let cat = prompt("Insira uma categoria para busca")
            BuscarPorCategoria(cat)
            break
        case "6":
            let id2 = prompt("Insira o Id do Hotel")
            let novoTel = prompt("Insira o telefone que deseja atualizar")
            AtualizarTelefone (id2, novoTel)
            break
        case "7":
            console.log("Reserva Finalizada")
            opcao = false
            break
        default:
            console.log("Opção incorreta, insire uma opção válida.")

    }

}while(continuar)