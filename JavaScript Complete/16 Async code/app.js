const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (options) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      options
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  // let positionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  // .then((posData) => {
  //   positionData = posData;
  //   return setTimer(2000);
  // })
  // .catch((error) => alert(error.message)) // не прерывает блоки then идущие после
  // .then((data) => {
  //   console.log(data, positionData);
  // });
  // .catch((error) => alert(error.message)); // прерывает все блоки then, так как стоит последним
  setTimer(1000).then(() => {
    console.log("Timer done!");
  });
  console.log("Sending HTTP request...");
}

// async function test() {
//   await setTimer(5000);
//   console.log("Timer done!");
// }

// test();

button.addEventListener("click", trackUserHandler);

// Promise.race([getPosition(), setTimer(5000)]).then((data) => { // возвращает первый выполненный
//   console.log(data);
// });

// Promise.all([getPosition(), setTimer(5000)]).then((data) => { // возвращает все, но только при выполнении
//   console.log(data);
// });

Promise.allSettled([getPosition(), setTimer(5000)]).then((data) => {
  // возвращает все с информацией об успешном и неуспешном выполнении
  console.log(data);
});

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
