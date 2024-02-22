// let num1 = document.getElementById('num1');
// let num2 = document.getElementById('num2');

// let btnPlus = document.getElementById('plus');
// let btnMinus = document.getElementById('minus');
// let btnMultiply = document.getElementById('multiply');
// let btnDivide = document.getElementById('divide');

// let resultParagraph = document.getElementById('result');
// let result 


// btnPlus.addEventListener('click', function (e) {
//     e.preventDefault();
//     result = parseInt(num1.value) + parseInt(num2.value);
//     resultParagraph.textContent = 'Result: ' + result;
// })


// btnMinus.addEventListener('click', function (e) {
//     e.preventDefault();
//     result = parseInt(num1.value) - parseInt(num2.value);
//     resultParagraph.textContent = 'Result: ' + result;
// })

// btnMultiply.addEventListener('click', function (e) {
//     e.preventDefault();
//     result = parseInt(num1.value) * parseInt(num2.value);
//     resultParagraph.textContent = 'Result: ' + result;
// })

// btnDivide.addEventListener('click', function (e) {
//     e.preventDefault();
//     result = parseInt(num1.value) / parseInt(num2.value);
//     resultParagraph.textContent = 'Result: ' + result;
    

//     if (num2.value == 0 ) {
//         resultParagraph.textContent = 'This is not possible.'
//     }
// })


// Task2: 


// const word = document.getElementById('word');

// const convert = document.querySelector('#btnConvert');

// const result = document.querySelector('#result');


// convert.addEventListener('click', function (e) {
//     e.preventDefault();
//     result.innerHTML = 'Result: ' + word.value.split('').reverse().join('');

// });



// Task 3 


// const width = document.getElementById('width');

// const height = document.getElementById('height');

// const borderWidth = document.querySelector('#border_width');

// const borderStyle = document.querySelector('#border_style');

// const borderColor = document.querySelector('#border_color');

// const bgColor = document.querySelector('#bg_color');

// const color = document.querySelector('#color');

// const btnOK = document.getElementById('btn_ok');

// const result = document.getElementById('result_div');


// btnOK.addEventListener('click', function (e) {
//     e.preventDefault();
//     result.style.width = parseInt(width.value) + 'px';
//     result.style.height = parseInt(height.value) + 'px';
//     result.style.borderWidth = parseInt(borderWidth.value) + 'px';

//     result.style.borderStyle = borderStyle.value;
//     result.style.borderColor = borderColor.value;
//     result.style.backgroundColor = bgColor.value;
//     result.style.color = color.value;
// })

// bgColor.addEventListener('change', function (e) {
//     e.preventDefault();
    
//     result.style.backgroundColor = bgColor.value;
// });


// Task 4 

// const width = document.getElementById('width');

// const height = document.getElementById('height');

// const borderWidth = document.querySelector('#border_width');

// const btnOK = document.getElementById('btn_ok');

// const result = document.getElementById('result_div');

// console.log(result.offsetWidth);
// console.log(result.offsetHeight);

// btnOK.addEventListener('click', function (e) {
//     result.style.width = result.offsetWidth + parseInt(width.value) + 'px';
//     result.style.height = result.offsetHeight + parseInt(height.value) + 'px';

//     console.log(result.offsetWidth);
//     console.log(result.offsetHeight);

// });



// Task 5

// const products = [
//     {
//         name: 'Product 1 ', 
//         title: ' lorem1 ',
//         img: "./pics/1.jpg",
//         info: ' Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
//         client: "Client 1",
//         category: "Category 1"
//     },

//     {
//         name: 'Product 2 ', 
//         title: ' lorem2 ',
//         img: "./pics/2.jpg",
//         info: ' Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
//         client: "Client 2",
//         category: "Category 2"
//     },

//     {
//         name: 'Product 3 ', 
//         title: ' lorem3 ',
//         img: "./pics/3.jpg",
//         info: ' Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
//         client: "Client 3",
//         category: "Category 3"
//     },

//     {
//         name: 'Product 4 ', 
//         title: ' lorem4 ',
//         img: "./pics/4.jpg",
//         info: ' Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
//         client: "Client 4",
//         category: "Category 4"
//     },

//     {
//         name: 'Product 5 ', 
//         title: ' lorem5 ',
//         img: "./pics/5.jpg",
//         info: ' Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
//         client: "Client 5",
//         category: "Category 5"
//     },

//     {
//         name: 'Product 6 ', 
//         title: ' lorem6 ',
//         img: "./pics/6.jpg",
//         info: ' Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
//         client: "Client 6",
//         category: "Category 6"
//     }
// ];



// const imgs = document.querySelectorAll ('.container_box img');

// const modal = document.querySelector ('.container_modal');

// const closeBtn = document.querySelector('#modal_close');

// const closeBtn2 = document.querySelector("#close_btn");

// const modalContent = document.querySelector('.modal_content');

// imgs.forEach(function (img, index) {
//     img.addEventListener('click', function (e) {
//         modal.style.display = 'block';
//         let item = products[index];
//         modalContent.innerHTML = 
//         `
//         <h4> ${item.name} </h4>
//         <p class="modal_title"> ${item.title}</p>
//         <img src=${item.img}>
//         <p class="modal_info">${item.info}</p>
//         <div>${item.client}</div>
//         <div>${item.category}</div>
//         `
//     });

    
// });

// closeBtn.addEventListener('click', function (e) {
//     modal.style.display = "none";
// });

// closeBtn2.addEventListener('click', function (e) {
//     modal.style.display = "none";
// });




// Task 6: 


const tab = document.querySelector('.tab');

const btns = document.querySelectorAll('.tab button');

const texts = document.querySelectorAll('.tab_text');

btns.forEach(function (btn, index) {
    btn.addEventListener('click', function (e){
        e.preventDefault();
        if (texts[index].classList.contains('showText')) {
            texts[index].classList.remove('showText');
        }
        else {
            texts[index].classList.add('showText');
        }
    })       

});