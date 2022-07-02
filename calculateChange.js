const calculateChange = function(total, cash) {
  let denoms = [2000,1000,500,200,100,25,10,5,1];
  let totals = [0,0,0,0,0,0,0,0,0];
  const change = {
  };
  let due = cash - total;
  let i = 0;
  while (due > 0) {
    if (denoms[i] <= due) {
      totals[i]++;
      due = due - denoms[i];
      continue;
    }
    i++;
  }

  if (totals[0] > 0) {
    change.twentyDollar = totals[0];
  }
  if (totals[1] > 0) {
    change.tenDollar = totals[1];
  }
  if (totals[2] > 0) {
    change.fiveDollar = totals[2];
  }
  if (totals[3] > 0) {
    change.twoDollar = totals[3];
  }
  if (totals[4] > 0) {
    change.oneDollar = totals[4];
  }
  if (totals[5] > 0) {
    change.quarter = totals[5];
  }
  if (totals[6] > 0) {
    change.dime = totals[6];
  }
  if (totals[7] > 0) {
    change.nickel = totals[7];
  }
  if (totals[8] > 0) {
    change.penny = totals[8];
  }

  return change;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));