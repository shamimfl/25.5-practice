
// task 2 

const h2Color = document.getElementsByTagName('h2');
for (let i = 0; i < h2Color.length; i++) {
    const element = h2Color[i];
    element.style.color = 'blue'
}


// task 3 

document.getElementById('backpack').style.backgroundColor = 'tomato'


// task 4 

const cards = document.getElementsByClassName('card');

for (const card of cards) {
    // console.log(card)
    // card.classList.remove('border-0','border');
    card.classList.add('name')
    card.style.borderRadius = '30px';
}


// task 5

document.getElementById('handleEvent').addEventListener('click', function () {
    console.log('Button clicked')
})



// task 6

// const removeButton=(event)=>{
//     const elements = document.getElementsByClassName(event);
//     for (const element of elements) {
//         console.log(element.innerText)
//     }
// }
function removeButton(event) {
    const elements = document.getElementsByClassName(event);
    for (const element of elements) {
        element.style.display = 'none'
        // console.log(element)
        // element.classList.add('d-none')

    }
}


// task 7

function cheakEmail() {
    const inputFeild = document.getElementById('exampleInputEmail1');
    const inputValue = inputFeild.value;
    // 
    if (inputValue === 'email') {
        document.getElementById('button').removeAttribute('disabled')
    } else {
        document.getElementById('button').setAttribute('disabled', true)
    }


}


// task 8

// function changeImage(){
//     const imgBody = document.getElementById('image');
//     console.log(imgBody)
// }

document.getElementById('image').addEventListener('mouseenter', function () {
    const imgBody = document.getElementById('image');
    //   const  img = imgBody.removeAttribute('src')
    imgBody.src = "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/376687/01/sv01/fnd/IND/fmt/png";

    // console.log(imgBody)
})

document.getElementById('image').addEventListener('mouseout', function () {
    const imgBody = document.getElementById('image');
    //   const  img = imgBody.removeAttribute('src')
    imgBody.src = "images/shoes/shoe-1.png";

    // console.log(imgBody)
})



// function subscribe(){
//     document.getElementById('subscribe').style.backgroundColor = 'aqua'
// }