

function cartPrice(){
    let subTotal = 0;
    let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
    cartItem.map(item =>{
    subTotal = item.totalPrice += subTotal;
    
        })
     console.log(  subTotal);
     document.querySelector('.priceView h3').textContent = "₱"+ subTotal
 }
 cartPrice()

 const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', function() {
  localStorage.clear();
  alert("Thank you for Ordering!")
});
