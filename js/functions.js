let checkLengthString = function(string, length) {
  return string.length <= length;
}

checkLengthString('проверяемая строка', 20);

/* сделала так, как расписано в задании, но я не очень понимаю,
почему нужно так усложнять себе жизнь, так как, если мы уже заморочились циклами,
мы могли бы и сразу в цикле символы сравнивать и прервать программу,
когда попадется первое несовпадение, но ладно...*/

let checkPalindrome = function(string) {
  let originalString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = originalString.length - 1; i >= 0; i--) {
      reversedString += originalString[i];
  }
  return originalString === reversedString;
}

checkPalindrome('Лёша на полке клопа нашёл ');

let findNumbers = function(str) {
  let string = str.toString();
  let number = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i]))) {
        number += string[i];
    }
  }
  return parseInt(number);
}

findNumbers(1.5);
