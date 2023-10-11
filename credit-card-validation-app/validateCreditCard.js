// validateCreditCard.js

function validateCreditCard(cardNumber) {
  // Remove spaces and non-digit characters
  const cleanedNumber = cardNumber.replace(/\D/g, "");

  let sum = 0;
  let isSecondDigit = false;

  for (let i = cleanedNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanedNumber[i]);

    if (isSecondDigit) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isSecondDigit = !isSecondDigit;
  }

  return sum % 10 === 0;
}

module.exports = validateCreditCard;
