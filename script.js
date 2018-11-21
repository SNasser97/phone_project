/*==================== TAX/TAXOUTPUT =====================*/
const taxOutput = document.querySelector('#tax');
/*======================= EVENTS =========================*/
const calcBtn = document.querySelector('#calc-price');
const resetBtn = document.querySelector('#reset');
//--------------------------------------------------------*/

/* 
  NOTES: 
  Remove unnecessary comments after
*/

/*===================== GET INPUT OF: =======================*/
function getBalance() { //give value to number
  const balance = document.querySelector('#balance');
  return Number(balance.value);
}

function getSpendLmt() {
  const spendLimit = document.querySelector('#spend-limit');
  return Number(spendLimit.value);
}

function getPhonePrice() {
  const phonePrice = document.querySelector('#phone-price');
  return Number(phonePrice.value);
}

function getAccPrice() {
  const accessoryPrice = document.querySelector('#acc-price');
  return Number(accessoryPrice.value);
}

function getAmt() {
  let amount = 0;
  return amount;
}
//------------------------------------------------------------

/*===================== CONDITIONAL LOOP =======================*/
function keepBuyingPhone() {
  while (getBalance() > amt) {
    //we keep going till condition is false
    if(getBalance() < amt) {
      //show no. of phones I can buy
    }
     //balance = balance - amt;
  } 
}
//------------------------------------------------------------

/*===================== CALCULATION =======================*/
function addOnAcc(a,b) {
  let amt = getAmt(); //0
  return amt += a + b; //amt = 0 + phoneprc + accPrc
}

function checkForAccessory() {
  let amt = getAmt();
  let addOnAcc = addOnAcc(getPhonePrice(), getAccPrice());
  if(getPhonePrice() < getSpendLmt()) { // phone cheap than spendlmt then we add on accssry
     return amt + addOnAcc;
  }
    return amt+=getPhonePrice(); //return just phoneprc
}

function calc() { //+ can add as string, make sure its int
  let total = '£' + Number(getBalance() - (getPhonePrice() + getAccPrice()));
  return output.textContent = total; 
}

function tax() {
  const TAX_RATE = 0.1;
  return TAX_RATE;
}
//------------------------------------------------------------

/*===================== CHECK INPUT =======================*/
function isInputValid(a,b,c,d,) { //balance | spendLimit | phonePrc | AccPrc
  if(isNaN(a) || isNaN(b) || isNaN(c) && a === 0 || b === 0 || c === 0) { //if NaN and 0 then true
    return true;
  } 
  return false;
}
//------------------------------------------------------------

/*===================== OUTPUT/RESULT ======================*/
function giveOutput() { //if input is NaN for amt/phone/accessory
  let bal = getBalance();
  let spendLimit = getSpendLmt();
  let phonePrice = getPhonePrice();
  let accPrice = getAccPrice();
  if(isInputValid(bal, spendLimit ,phonePrice, accPrice,)) {
    return output.textContent = 'Error! Enter valid money';
  }
    return calc(); //then input is not NaN so call calc
}
//------------------------------------------------------------

/*===================== RESET VALUES =======================*/
function reset() { 
  balance.value = 0; //somehow input for balance is set to 0
  spendLimit.value = 0; //does not work, goes for rest except balance
}
//------------------------------------------------------------

/*===================== EVENT =======================*/
taxOutput.setAttribute('value', tax());
calcBtn.addEventListener('click', giveOutput);
resetBtn.addEventListener('click', reset);

// output.textContent = '£' + parseFloat(0.00);
// calcBtn.addEventListener('click', calc);

//if value is number then change class of output to .true
