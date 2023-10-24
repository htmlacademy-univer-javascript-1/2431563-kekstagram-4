const checkLengthString = function(string, length) {
  return string.length <= length;
};

checkLengthString('проверяемая строка', 20);

/* сделала так, как расписано в задании, но я не очень понимаю,
почему нужно так усложнять себе жизнь, так как, если мы уже заморочились циклами,
мы могли бы и сразу в цикле символы сравнивать и прервать программу,
когда попадется первое несовпадение, но ладно...*/

const checkPalindrome = function(string) {
  const originalString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = originalString.length - 1; i >= 0; i--) {
    reversedString += originalString[i];
  }
  return originalString === reversedString;
};

checkPalindrome('Лёша на полке клопа нашёл ');

const findNumbers = function(str) {
  const string = str.toString();
  let number = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      number += string[i];
    }
  }
  return parseInt(number, 10);
};

findNumbers(1.5);

const getTimeInMinutes = function(time) {
  const timeArray = time.split(':');
  return Number(timeArray[0]) * 60 + Number(timeArray[1]);
};

const checkTime = function(start, finish, startConferention, length) {
  const intStartConferention = getTimeInMinutes(startConferention);
  return (getTimeInMinutes(start) <= intStartConferention) && (intStartConferention + length <= getTimeInMinutes(finish));
};
checkTime('8:00', '17:30', '08:00', 90);
