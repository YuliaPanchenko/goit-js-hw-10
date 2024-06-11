import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Використовуємо DOMContentLoaded для того, щоб впевнитися, що весь HTML завантажений перед виконанням скрипта.
// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('.form');
// })

const delayInput = document.querySelector('input[name="delay"]');
const inputRadios = document.querySelectorAll('input[name="state"]');

// const btn = document.querySelector('button[type="submit"]');
const form = document.querySelector('.form');

// let inputNumber;

// delayInput.addEventListener('input', ev => {
//   inputNumber = parseInt(ev.target.value);
//   console.log(inputNumber);
// });

// let selectedState;

// inputRadios.forEach(radio => {
//   radio.addEventListener('change', ev => {
//     if (ev.target.checked) {
//       selectedState = ev.target.value;
//       console.log('Selected State:', selectedState);
//     }
//   });
// });

form.addEventListener('submit', ev => {
  ev.preventDefault();

  const inputNumber = form.elements.delay.value;
  const selectedState = form.elements.state.value;
  createPromise(inputNumber, selectedState).then(onFulfilled).catch(onRejected);

  function createPromise(delay, state) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('State:', state);
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
    return promise;
  }

  function onFulfilled(delay) {
    iziToast.success({
      message: `✅ Fulfilled promise in ${delay}ms`,
    });
    console.log(`✅ Fulfilled promise in ${delay}ms`);
  }

  function onRejected(delay) {
    iziToast.error({
      message: `❌ Rejected promise in ${delay}ms`,
    });
    console.log(`❌ Rejected promise in ${delay}ms`);
  }
});

// function createPromise(value, delay, status) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (status) resolve(value);
//       else reject(value);
//     }, delay);
//   });
//   return promise;
// }
