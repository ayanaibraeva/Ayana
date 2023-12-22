const container = document.querySelector(".container")

const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json')
xhr.setRequestHeader('Content-type','application/json')
xhr.send()

xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.response)
    console.log(data)

    data.forEach((country) => {
        const countryCard = document.createElement('div')
        countryCard.setAttribute('class', 'countryCard')

        countryCard.innerHTML = `
             <span>${country.nameCountry}</span>
            <h2>${country.nameOfCity}</h2>
            <img src="${country.photo}" alt="">
        `
        // document.querySelector('.content').innerHTML = data.content

        container.append(countryCard)
    })
})

// Second part of H/W

const xhrInConsole = new XMLHttpRequest();
xhrInConsole.open('GET', 'dataInConsole.json')
xhrInConsole.setRequestHeader('Content-type','application/json')
xhrInConsole.send()

xhrInConsole.addEventListener('load', () => {
    const dataInConsole = JSON.parse(xhrInConsole.response)
    dataInConsole.forEach((data) => {
        console.log(data)
    })
})

// Практика с урока у меня тоже есть, но только в другой папке, если нужно могу отправить)

