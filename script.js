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
  const spendLimit = document.querySelector('#spendlimit');
  return Number(spendLimit.value);
}

function getPhonePrice() {
  const phonePrice = document.querySelector('#phoneprice');
  return Number(phonePrice.value);
}

function getAccPrice() {
  const accessoryPrice = document.querySelector('#accprice');
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
     return amt += addOnAcc;
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
function isInputValid(a,b,c,d) { //balance | spendLimit | phonePrc | AccPrc
  debugger;
  if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || a === 0 || b === 0 || c === 0) { //if a||b||c||d NaN OR 0 then true
    return true; 
  } else {
    return false;
  }
}
//------------------------------------------------------------

/*===================== OUTPUT/RESULT ======================*/
function giveOutput() { //if input is NaN for amt/phone/accessory
  let balance = getBalance();
  let spendLimit = getSpendLmt();
  let phonePrice = getPhonePrice();
  let accPrice = getAccPrice();
  if(isInputValid(balance, spendLimit ,phonePrice, accPrice)) {
    return output.textContent = 'Error! Enter valid money';
  } // 
    return calc(); //then input is not NaN so call calc
}
//------------------------------------------------------------

/*===================== RESET VALUES =======================*/
function reset() { 
   //we're setting value from DOM itself
   //since the cache are in their own func scope
   //reason we can change the value is because DOM is global
   //console.log(spendlimit); //id of DOM, not the cache in function getSpendLimit()
   //so its spendlimit.value (accessible in global)
   //while spendLimit.value is only in func
  output.textContent ='';
  balance.value = ''; //somehow input for balance is set to 0
  spendlimit.value = ''; //does not work, goes for rest except balance
  accprice.value = '';
  phoneprice.value = '';
}
//------------------------------------------------------------

/*===================== EVENT LISTENERS ======================*/
taxOutput.setAttribute('value', tax());
calcBtn.addEventListener('click', giveOutput);
resetBtn.addEventListener('click', reset);

// output.textContent = '£' + parseFloat(0.00);
// calcBtn.addEventListener('click', calc);

//if value is number then change class of output to .true
