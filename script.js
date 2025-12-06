 function replaceTheDiv(event, element) {
                event.preventDefault();
                const cartControl = element.parentElement;
                cartControl.innerHTML = `
                    <button onclick="decrementQuantity(this)" style="background: #ff3c00; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 16px; font-weight: bold; margin-right: 10px;">-</button>
                    <span class="qty-value" style="font-size: 18px; font-weight: bold; margin: 0 10px;">1</span>
                    <button onclick="incrementQuantity(this)" style="background: #ff3c00; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 16px; font-weight: bold; margin-left: 10px;">+</button>
                `;
            }

            function incrementQuantity(button) {
                const qtySpan = button.previousElementSibling;
                let currentQty = parseInt(qtySpan.textContent);
                currentQty++;
                qtySpan.textContent = currentQty;
            }

            function decrementQuantity(button) {
                const qtySpan = button.nextElementSibling;
                let currentQty = parseInt(qtySpan.textContent);
                currentQty--;
                
                if (currentQty === 0) {
                    const cartControl = button.parentElement;
                    cartControl.innerHTML = '<a href="#" class="order-btn" onclick="replaceTheDiv(event, this)">Order Now</a>';
                } else {
                    qtySpan.textContent = currentQty;
                }
            }