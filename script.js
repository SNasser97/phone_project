/*----------------------DOM ELEMENTS----------------------*/
/*==================== TAX/TAXOUTPUT =====================*/
const taxOutput = document.querySelector('#tax');
/*=========== BALANCE/SPDLIMIT/PHONEPRC/ACCPRC ===========*/
let balance = document.querySelector('#balance');
let spendLimit = document.querySelector('#spend-limit');
let phonePrice = document.querySelector('#phone-price');
let accessoryPrice = document.querySelector('#acc-price');
/*===================== TOTAL/OUTPUT =====================*/
const totalOutput = document.querySelector('#total');
let output = document.querySelector('#output');
/*======================= EVENTS =========================*/
const calcBtn = document.querySelector('#calc-price');
const resetBtn = document.querySelector('#reset');
/*--------------------------------------------------------*/

// I know I went overboard with the comments, 
// I'll remove them once this is complete

/*===================== GET VALUES =======================*/
function getBalance() { //give value to number
  return Number(balance.value);
}

function getSpendLmt() {
  return Number(spendLimit.value);
}

function getPhonePrice() {
  return Number(phonePrice.value);
}

function getAccPrice() {
  return Number(accessoryPrice.value);
}

function getAmount() {
  let amount = 0;
  return amount;
}

function getOutput() {
  return output.textContent;
}
/*===================== CONDITIONAL =======================*/

function addAccPrice() {
  if(getPhonePrice() < getSpendLmt()) {
    //add accprice to phone price
  }
    //else only give phonePrice
}

function keepBuyingPhone() {
  /* while (balance > amt) {
    we keep going
  } else {
    we STOP
  }
  balance = balance - amt;
  */
}

function calc() { //+ can add as string, make sure its int
  let total = '£' + Number(getBalance() - (getPhonePrice() + getAccPrice()));
  return output.textContent = total; 
}

function tax() {
  const TAX_RATE = 0.1;
  return TAX_RATE;
}

function reset() {
  balance.value = 0;
  spendLimit.value = 0;
  phonePrice.value = 0;
  accessoryPrice.value = 0;
  output.textContent = '£';
}

/*===================== CHECK INPUT =======================*/
function isInputValid(a,b,c,) { //sep func
  if(isNaN(a) || isNaN(b) || isNaN(c)) { //if NaN then true
    return true;
  }
  return false;
}

function giveInput(a,b,c,) { //if input is NaN for amt/phone/accessory
  if(isInputValid(getBalance(), getPhonePrice(), getAccPrice(),)) {
    return output.textContent = 'Enter valid monies'; //this
  }
    return calc(); //then input is not NaN so call calc
}

output.textContent = '£' + parseFloat(0.00);
taxOutput.setAttribute('value', tax());
//calcBtn.addEventListener('click', calc);
calcBtn.addEventListener('click', giveInput);
resetBtn.addEventListener('click', reset);

//if value is number then change class of output to .true
