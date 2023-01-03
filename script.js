// // old way to fetch data by api 
// fetch("https://www.breakingbadapi.com/api/characters/1")
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data.name)

// })

const api = "https://www.breakingbadapi.com/api/";

async function getData(){
    try {
        const response = await fetch(api)
        const data = await response.json();
        printData(data)

        const v = Object.entries(data).map(m => m)
        console.log(data)
    } catch (error) {
        console.log("Error:", error.message)
    }
}

function printData(data){
    const header = document.querySelector("#header")
    const content = document.querySelector("#content")

    header.innerHTML += `
    <select class="form-control" onchange="getCh(this.value)">
        <option>Please Select Actor</option>
    ${data.map(character =>`<option>${character.name}</option>`)}
    </select>
    `
}

async function getCh(name){
    if(name !== 'Please Select Actor') {
    const response = await fetch(`${api}?name=${name}`)
    const data = await response.json()
    content.innerHTML = `
    <h2>${data[0].name} (${data[0].nickname})</h2>
    <h4>${data[0].portrayed}</h4>
    <img src="${data[0].img}" width="250"> 
    `
    }
}

getData()
