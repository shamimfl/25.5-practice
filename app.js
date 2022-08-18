
// task 2 

const h2Color = document.getElementsByTagName('h2');
for (let i = 0; i < h2Color.length; i++) {
    const element = h2Color[i];
    element.style.color = 'blue'
}


// task 3 

document.getElementById('backpack').style.backgroundColor = 'tomato'


// task 4 

const cards  = document.getElementsByClassName('card') ;

for (const card of cards) {
    // console.log(card)
    card.classList.remove('border-0','border');
    // card.classList.remove('')
    card.style.border = '30px solid aqua'
   
}


// task 5

document.getElementById('handleEvent').addEventListener('click', function(){
    console.log('Button clicked')
})


// const removeButton=(event)=>{
//     const elements = document.getElementsByClassName(event);
//     for (const element of elements) {
//         console.log(element.innerText)
//     }
// }
function removeButton(event){
    const elements = document.getElementsByClassName(event);
    for (const element of elements) {
        element.style.display = 'none'
        // console.log(element)
        // element.classList.add('d-none')
        
    }
}

