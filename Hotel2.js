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

let hoteisIds = []
let idHotel = 1
let hoteisNomes = []
let hoteisCategorias = []
let hoteisEnderecos = []
let hoetisTelefones = []

let reservasIds = []
let idReserva = 1
let reservasIdsHoteis = []
let reservasNomesResponsaveis = []
let reservasDiaEntradas = []
let reservasDiaSaidas = []

function CadastrarHotel() {
    hoteisIds.push(idHotel)
    idHotel++
    hoteisNomes.push(prompt("Insira o nome do Hotel "))
    hoteisCategorias.push(parseInt(prompt("Insira a categoria do Hotel ")))
    hoteisEnderecos.push(prompt("Insira o endereço do Hotel "))
    hoetisTelefones.push(prompt("Insira o telefone do Hotel "))
}

function CadastrarReserva() {
    reservasIds.push(idReserva)
    idReserva++
    let hotelValido = false
    while (hotelValido == false){
        let idHotelValidacao = parseInt(prompt("Insira o Id do Hotel "))
        if (hoteisIds.includes(idHotelValidacao)){
            reservasIdsHoteis.push(idHotelValidacao)
            hotelValido = true
        } else {
            console.log("Esse Id de hotel não existe.")
        }
        
    }
    
    reservasNomesResponsaveis.push(prompt("Insira o nome do responsável pela reserva"))
    let diaEntrada = prompt("Insira o dia de entrada ")
    reservasDiaEntradas.push(diaEntrada)

    let diaValido = false
    while(diaValido == false){
        let diaSaida = prompt("Insira o dia de saída ")
        if(diaSaida < diaEntrada){
            console.log("Dia de saída deve ser maior que o dia de entrada.")
        } else {
            reservasDiaSaidas.push(diaSaida)
            diaValido = true
        }
    }
}

function ProcurarReservaPorId(idReserva){
    let index = reservasIds.indexOf(idReserva)
    let idHotelReserva = reservasIdsHoteis[index]
    let indexHotel = hoteisIds.indexOf(idHotelReserva)
    let nomeHotel = hoteisNomes[indexHotel]
    let enderecoHotel = hoteisEnderecos[indexHotel]
    console.log("Hotel: " + nomeHotel + ", Endereço: " + enderecoHotel + ", Entrada no dia: " + reservasDiaEntradas[index] + ", Saída no dia: " + reservasDiaSaidas[index])
}

function ProcurarReservaPorNome(nomeResponsavel){
    for (let index = 0; index < reservasNomesResponsaveis.length; index++) {
        if(reservasNomesResponsaveis[index] == nomeResponsavel){
            console.log("Id da Reserva " + reservasIds[index] + ", Id do hotel " + reservasIdsHoteis[index])
        }
        
    }
}

function ProcurarPorCategoria(categoria){
    let hoteisPorCategoria = []
    let indexHoteis = 0
    for (let index = 0; index < hoteisCategorias.length; index++) {
        if(hoteisCategorias[index] == categoria){
            hoteisPorCategoria[indexHoteis] = hoteisNomes[index]
            indexHoteis++
        }
        
    }

    return hoteisPorCategoria
}

function AtualizarTelefone(idHotel, telefone){
    let index = hoteisIds.indexOf(idHotel)
    hoetisTelefones[index] = telefone
}

let continuar = "s"

while(continuar == "s"){
    let opcao = prompt("Insira a opção que deseja realizar: 1 - Cadastrar Hotel, 2 - Cadastrar Reserva, 3 - Buscar uma reserva por ID, 4 - Buscar uma reserva por nome, 5 - Buscar hoteis por Categoria, 6 - Atualizar Telefone ")
    switch(opcao){
        case "1":
            CadastrarHotel()
            console.log("Hotel Cadastrado com sucesso!")
            break;
        case "2":
            CadastrarReserva()
            console.log("Reserva cadastrada com sucesso!")
            break;
        case "3":
            let idReserva = parseInt(prompt("Insira o Id da reserva: "))
            ProcurarReservaPorId(idReserva)
            break;
        case "4":
            let nomeReserva = prompt("Insira o nome do responsável pela reserva. ")
            ProcurarReservaPorNome(nomeReserva)
            break;
        case "5":
            let categoria = parseInt(prompt("Insira a categoria que deseja procurar: "))
            console.log(ProcurarPorCategoria(categoria))
            break;
        case "6":
            let idHotel = parseInt(prompt("Insira o id do Hotel"))
            let telefone = prompt("Insira o novo telefone: ")
            AtualizarTelefone(idHotel, telefone)
            console.log("Telefone atualizado com sucesso!")
            break;
        default:
            console.log("Opção inválida!")
    }
    continuar = prompt("Deseja continuar? s ou n")
}