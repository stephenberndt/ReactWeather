var names = ['Steve', 'Sutton', 'Caroline'];

names.forEach(function (name) {
  console.log('forEach', name)
});

names.forEach((name) => {
  console.log('arrowFunc', name)
});

//the item is returned as the return value
names.forEach((name) => console.log(name));

//preserves the this state
var person = {
  name: 'Steve',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    })
  }
}

person.greet();

//challenge
function add (a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
};

console.log(addStatement(5, 3))

var addExpression = (a, b) => a + b

console.log(addExpression(4, 4))
