// // console.log('123124234');
// const bla = 2;
// // console.log('earstdyfugihojpk[l');
// 
// const text = document.querySelector('.text');
// const nameUser = 'Irina';

// const sayhello = (a) => console.log(a);
// const addDocument = (a) => text.textContent = a;
// const addArr = (a) => {
//   const newArr = [a];
//   console.log(newArr);
//   return newArr;
// }

// add.addEventListener('click', () => {
//   sayhello(nameUser);
//   addDocument(nameUser);
//   addArr(nameUser);
// });


// const jsinputAdd = document.querySelector('.js-inputAdd');
// const addButton = document.querySelector('.add');
// const endButton = document.querySelector('.end');
// let arr = [];

// addButton.addEventListener('click', () => {
//   if (!jsinputAdd.value == '') {
//     arr.push(jsinputAdd.value);
//   } else {
//     console.log('ведите правильное число')
//   }
//   jsinputAdd.value = '';
// });

// endButton.addEventListener('click', () => {

//   arr.sort((a, b) => {
//     return a - b;
//   });
//   console.log(arr);
//   arr = [];
// });

const show = [['птицы', , 500], ['звери', 120], ['смайлик', 500]];
const color = [['красный', 10], ['зеленый', 200], ['синий', 300], ['фиолетовый', 11]]
const form = document.querySelector('.form');
const arr1 = form.querySelector('.arr1');
const selectArr2 = form.querySelector('.selectArr2');


arr1.addEventListener('click', () => {
  selectArr2.disabled = false;
  let a = '';
  (arr1.value == 'color')
  if (arr1.value == 'color') {
    color.forEach((element) => {
      a += `<option value="${element[1]}">${element[0]}</option>`;
    })
    selectArr2.innerHTML = a;
  } else if (arr1.value == 'art') {
    art.forEach((element) => {
      a += `<option value="${element[1]}">${element[0]}</option>`;
    })
    selectArr2.innerHTML = a;
  }
  // console.log(selectArr2.value);
});

// selectArr2.addEventListener('change', () => {

// })

const fruits = document.querySelectorAll('input[name="fruit"]')
const byuBlock = form.querySelector('.byuBlock');

const fruitsBlock = document.getElementById('fruits');
byuBlock.addEventListener('change', () => {
  let p = 0;
  for (const elem of fruits) {
    if (elem.checked) {
      p = elem.value;
      // console.log(elem.value)
    }
  }
  // console.log(selectArr2.value);
  let summ = +selectArr2.value + +p;
  console.log(summ);
})



