
let total = 0;
function handleClick(target) {
  const selectedItemContainer = document.getElementById("selected-items");
  const itemName = target.parentNode.childNodes[3].innerText;
  const li = document.createElement("li");
  li.innerText = itemName;
  selectedItemContainer.appendChild(li);
  const price = target.parentNode.childNodes[5].innerText.split(" ")[0];
  total = parseInt(total) + parseInt(price);
  document.getElementById("total").innerText = total;
  setInnerText("total",total);
}

// function setInnerText(id,value){
//   document.getElementById(id).innerText = value;
// }

// function applyCoupon(){
//   const couponCode = document.getElementById("coupon-code").value;
//   if(total >== 200 && couponCode == "SELL200"){
//     const discountedAmount = total*0.2;
//     const total = parseInt(total) - parseInt(discountedAmount)
//     setInnerText("discount",discountedAmount);
//     setInnerText("total",total);
//   }else{
//     alert("invalid coupon try again")
//   }
// }

document.getElementById('coupon-btn').addEventListener('click', function(){ 
  const inputField = document.getElementById('input-field');
  const inputText = inputField.value;
  inputText.value = '';
  console.log(inputText)
})


