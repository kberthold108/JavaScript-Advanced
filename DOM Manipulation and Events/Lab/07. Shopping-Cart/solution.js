function solve() {
   const [output] = document.getElementsByTagName("textarea");
   const buttons = Array.from(document.getElementsByClassName("add-product"));
   const [checkoutButton] = Array.from(document.getElementsByClassName("checkout"));
   
   checkoutButton.addEventListener("click", cartCheckout);
   buttons.forEach(button => button.addEventListener("click", addToCart));

   let total = 0;
   const products = new Set();

   function addToCart(event) {
      console.log("Here");
      const rootParent = event.target.parentNode.parentNode;
      const [productName] = Array.from(rootParent.getElementsByClassName("product-title"));
      const [productPrice] = Array.from(rootParent.getElementsByClassName("product-line-price"));
      total += Number(productPrice.textContent);
      products.add(productName.textContent);
      output.value += `Added ${productName.textContent} for ${productPrice.textContent} to the cart.\n`;
   }

   function cartCheckout() {
      buttons.forEach(button => button.disabled = true);
      checkoutButton.disabled = true;
      const list = Array.from(products).join(", ");
      total = total.toFixed(2);
      output.value += `You bought ${list} for ${total}.`;
   }

}