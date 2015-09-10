var countUp = function(counter, target) {
  var numbers = [counter];
  var other_counter = counter;
  while (target - other_counter >= counter) {
    other_counter = other_counter + counter;
    numbers.push(other_counter);
  }

  return numbers.join(", ");
};



module.exports = countUp;
