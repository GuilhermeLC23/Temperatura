const key = "bb7146a7580ef318643c8468d722bb92"

function colocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".city").innerHTML = " Tempo em  " + dados.name
    document.querySelector(".weather-forecast").innerHTML = dados.weather[0].description
    document.querySelector(".moisture").innerHTML = dados.main.humidity + "%"
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C  máxima"
    document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
  
}

async function buscarCity(city) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const city = document.querySelector(".input-city").value

    buscarCity(city)
}