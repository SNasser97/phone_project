/*==================== TAX/TAXOUTPUT =====================*/
const taxOutput = document.querySelector('#tax');
//--------------------------------------------------------*/

/*======================= EVENTS =========================*/
const calcBtn = document.querySelector('#calc-price');
const resetBtn = document.querySelector('#reset');
//--------------------------------------------------------*/

let amt = 0; //used for adding price on items etc.

/* 
  NOTES: 
    Work on calc()/calcTax() function - DONE
    Add/use checkfunctions for while loop - DONE
    Check function for adding accessory - DONE
    Refactor/format code - TODO/Optional
    Finally merge branch to master - TODO
    Remove unnecessary comments after - TODO
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
//------------------------------------------------------------

/*===================== CONDITIONAL LOOP =======================*/
function keepBuyingPhone() {
  let balance = getBalance();
  let amt = checkForAccessory(); //value is phoneprice + amt OR just phoneprice
  while (balance > amt) {
     return output.textContent = calcSum(balance, amt); //output calcSum func
     balance = balance - amt; //subtract amt from balance each time
  } 
}
//------------------------------------------------------------

/*===================== CALCULATION =======================*/
function addOnAcc(a,b) {
  return amt = a + b; //amt = 0 + phoneprc + accPrc
}

function checkForAccessory() {
  let addOn = addOnAcc(getPhonePrice(), getAccPrice());
  let amt = getPhonePrice();
  if(amt < getSpendLmt()) { // phone cheap than spendlmt then we add on accssry
     return amt = addOn; //amt = phoneprice + acc func
  } else {
    return amt = getPhonePrice(); //return just phoneprc
  }
}

function calcSum(a, b) { // (balance, amt) <- func gets balance divide by sum = no. of phones u can buy
  let sumOfPhone = Number(b + b * tax()).toFixed(2); //adds tax to amount
  return output.textContent = " you can buy " + Number(Math.floor(a/sumOfPhone)) + " phones at the price of £" + sumOfPhone;
}
// function calcTax(phonePrc,accPrc) { //+ can add as string, make sure its int
//   let total = '£' + Number((phonePrc + accPrc) * tax()) .toFixed(2);
//   return total; 
// }
function tax() {
  const TAX_RATE = 0.1;
  return TAX_RATE;
}
//------------------------------------------------------------

/*===================== CHECKS =======================*/
function isInputValid(a,b,c,d) { //balance | spendLimit | phonePrc | AccPrc
  if(isNaN(a) || 
     isNaN(b) || 
     isNaN(c) || 
     isNaN(d) || 
      a === 0 || 
      b === 0 || 
      c === 0) { //if a || b || c || d NaN OR 0 then true
    return true; 
  } else {
    return false;
  }
}

function checkSpendLmt(spendlimit, phoneprc) { 
  if(spendlimit < phoneprc) { //if spend limit less than phoneprc
    return true; //too expensive
  } else{
    return false;
  }
}

function checkBalance(balance, phoneprc) {
  if(balance <= phoneprc) { // we add tax on phone e.g. 500 * 0.1 = 550, 500 - 550 = -50.00
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
  
  if(checkBalance(getBalance(), getPhonePrice())) {
    return output.textContent = 'Insufficient funds in balance!';
  }
  if(checkSpendLmt(getSpendLmt(), getPhonePrice())) {
    return output.textContent = 'Your budget is too low!';
  }
  if(isInputValid(balance, spendLimit ,phonePrice, accPrice)) {
    return output.textContent = 'Enter valid money!';
  } else { 
    return keepBuyingPhone(); //then input is not NaN so call calc
  }
}
//------------------------------------------------------------

/*===================== CLEAR VALUES =======================*/
function clearInputs() {
  const inputs = document.getElementsByTagName('input'); //nodelist into array then set values to empty
  const clearInputs = Array.from(inputs).map(arr => arr.value = ''); 
  return clearInputs;
}

function clear() {
  amt = 0;
  clearInputs();
  output.textContent = 'FORM RESET!';
}
//------------------------------------------------------------

/*===================== EVENT LISTENERS ======================*/
taxOutput.textContent = tax();
calcBtn.addEventListener('click', giveOutput);
resetBtn.addEventListener('click', clear);

// output.textContent = '£' + parseFloat(0.00);
// calcBtn.addEventListener('click', calc);

//if value is number then change class of output to .true
