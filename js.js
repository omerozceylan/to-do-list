let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', takeInput)
let listDOM = document.querySelector('#list')
let startListDOM = document.querySelector('#startList')
let alertDOM = document.querySelector('#alertZone')
let theOneDOM = document.querySelector('#theOne')
let firstStartListDOM = document.querySelector('#firstStart')
let buttonZoneDOM = document.querySelector('#buttonZone')
let clearButton = document.createElement('button')
let h3 = document.createElement('h3')
let hr = document.createElement('hr')

h3.innerHTML = 'List'




const alert = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>missing information!</strong> You should write something.
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`
const alert2 = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>it's too much!</strong> You should write less than 24 hour.
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`

const clearButtonText = `
<button class="btn btn-primary rounded-pill btn btn-dark">Clear</button>
`

function startConfg(){
  let elements = JSON.parse(localStorage.getItem('elementOfList'))
  if(!elements){
    localStorage.setItem('elementOfList',JSON.stringify([]))
  }else{
    elements.forEach(element => {
        createItem(element)
    });
  }
}
startConfg()

function takeInput(event){
    //event.preventDefault()
    let numberAlert = "numberAlert"
    let input1DOM = document.querySelector('#input1InHTML')
    let input1 = input1DOM.value

    
    if(!input1 == ""){       
        input1DOM.value = ""
        console.log(input1);
        let elsArr = JSON.parse(localStorage.getItem('elementOfList'))
        elsArr.push(input1)
        console.log(elsArr);
        localStorage.setItem('elementOfList', JSON.stringify(elsArr))
      }else{
        alertDOM.innerHTML = alert
    }
}

function createItem(input1){
      let paragraph = document.createElement('p')
      buttonZoneDOM.appendChild(clearButton)
      startListDOM.appendChild(paragraph)
      theOneDOM.appendChild(hr)  
      theOneDOM.appendChild(h3)
      
      
      paragraph.innerHTML = input1
      
      let clickCounter = 0
      paragraph.addEventListener('click', function(){
         
        if(!clickCounter == 0){
            paragraph.style.textDecoration= 'none'
            paragraph.style.backgroundColor='#343A40'
            paragraph.style.color='aliceblue'
            console.log('cizgi kaldırıldı')
            clickCounter = 0
          }else{
          paragraph.style.textDecoration = 'line-through'
          paragraph.style.backgroundColor = '#404258'
          paragraph.style.color = 'black'
          clickCounter++}
          console.log(clickCounter);
        })
        
        clearButton.innerHTML = 'Clear'
        clearButton.classList.add('btn','btn-primary','rounded-pill','btn-dark')
        clearButton.addEventListener('click',function(){
        paragraph.remove()
        clearButton.remove()
        h3.remove()
        hr.remove()
        localStorage.clear()
        localStorage.setItem('elementOfList',JSON.stringify([]))
})
        
} 