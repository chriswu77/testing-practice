function analyze(array) {
  const obj = {};

  obj.average = average(array);
  obj.min = min(array);
  obj.max = max(array);
  obj.length = array.length;

  return obj;
}

function average(array) {
  const count = array.length;
  const sum = array.reduce((total, num) => total + num);

  return sum/count;
}

function min(array) {
  return array.reduce((mini, num) => {
    if (num < mini) {
      mini = num;
    }
    return mini;
  });
}

function max(array) {
  return array.reduce((maxi, num) => {
    if (num > maxi) {
      maxi = num;
    }
    return maxi;
  });
}

module.exports = analyze;
