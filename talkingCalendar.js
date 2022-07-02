const talkingCalendar = function(date) {
  let output = "";
  
  let month = date.substring(5,7);

  switch (month) {
  case '01':
    output += 'January';
    break;
  case '02':
    output += 'February';
    break;
  case '03':
    output += 'March';
    break;
  case '04':
    output += 'April';
    break;
  case '05':
    output += 'May';
    break;
  case '06':
    output += 'June';
    break;
  case '07':
    output += 'July';
    break;
  case '08':
    output += 'August';
    break;
  case '09':
    output += 'September';
    break;
  case '10':
    output += 'October';
    break;
  case '11':
    output += 'November';
    break;
  case '12':
    output += 'December';
    break;
  }
  
  let day = date.substring(8,10);
  switch (day) {
  case '01':
    output += ' 1';
    break;
  case '02':
    output += ' 2';
    break;
  case '03':
    output += ' 3';
    break;
  case '04':
    output += ' 4';
    break;
  case '05':
    output += ' 5';
    break;
  case '06':
    output += ' 6';
    break;
  case '07':
    output += ' 7';
    break;
  case '08':
    output += ' 8';
    break;
  case '09':
    output += ' 9';
    break;
  default:
    output += " " + day;
    
  }

  if (day === '01' || day === '21' || day === '31') {
    output += 'st, ';
  } else if (day === '02' || day === '22') {
    output += 'nd, ';
  } else if (day === '03' || day === '23') {
    output += 'rd, ';
  } else {
    output += 'th, ';
  }

  output += date.substring(0,4);

  return output;

  
};

console.log(talkingCalendar("2017/12/01"));
console.log(talkingCalendar("2007/11/03"));
console.log(talkingCalendar("1987/08/24"));