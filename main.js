

const namesUrl = `https://bobsburgers-api.herokuapp.com/characters`
const select = document.querySelector('.newName')

fetch(namesUrl)
        .then(response => response.json())
        .then(data => {
              let allNames = data.map(data => data.name)
              for (let i=0; i < allNames.length; i++) {
                  const option = document.createElement('option') //<option></option>
                  option.value = allNames[i] //<option value='breed'> 
                  option.innerText = allNames[i]//<option value='breed'>breed</option>
                  select.appendChild(option)//adds current <option> tag to the select box list of options
              }
              
            })


select.addEventListener('change', event => {
  let url = `https://bobsburgers-api.herokuapp.com/characters?name=${event.target.value}`
  getInfo(url)
})

const img = document.querySelector('.image')
const sex = document.querySelector('.gender')
const hair = document.querySelector('.hColor')
const job = document.querySelector('.job')
const episode = document.querySelector('.fEpisode')

const getInfo = url => {
  fetch(url)
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data[0])
      img.src = data[0].image
      sex.innerText = data[0].gender
      hair.innerText = data[0].hairColor
      job.innerText = data[0].occupation
      episode.innerText = data[0].firstEpisode
    })
}

// spaces in names need a + inbetween them. 


// console.log(data)
// img.src = data.image
