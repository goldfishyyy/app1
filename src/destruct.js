const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary() {
  let maxS = Number.MIN_VALUE;
  for (let key in salaries) {
    if (salaries[key] > maxS) {
      maxS = salaries[key];
      //console.log(maxS);
    }
  }
  console.log(maxS);
}
topSalary(salaries);
