// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found')
// }
//
// getTempCallback("Fairfax", function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Fairfax').then(function (temp) {
//   console.log('promise success', temp)
// }, function (err) {
//   console.log('promise error', err)
// })


// Challenge Area
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof a == 'number' && typeof b == 'number') {
        resolve(a + b);
      } else {
        reject('a and b need to be numbers')
      };
    }, 1000)
  })
}

addPromise (2, 5).then(function (answer) {
  console.log('addPromise success', answer);
}, function (err) {
  console.log('addPromise error', err);
})
addPromise ('c', 5).then(function (answer) {
  console.log('addPromise success', answer);
}, function (err) {
  console.log('addPromise error', err)
})
addPromise (3, 'd').then(function (answer) {
  console.log('addPromise success', answer);
}, function (err) {
  console.log('addPromise error', err);
})
