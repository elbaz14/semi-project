import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  cart = inject(CartService);
  private router = inject(Router);

  deliveryMethod: 'delivery' | 'pickup' = 'delivery';
  paymentMethod: 'apple' | 'google' | 'cash' = 'cash';
  orderPlaced = false;

  setDelivery(method: 'delivery' | 'pickup'): void {
    this.deliveryMethod = method;
  }

  setPayment(method: 'apple' | 'google' | 'cash'): void {
    this.paymentMethod = method;
  }

  decreaseQty(id: string, currentQty: number): void {
    this.cart.updateQuantity(id, currentQty - 1);
  }

  increaseQty(id: string, currentQty: number): void {
    this.cart.updateQuantity(id, currentQty + 1);
  }

  placeOrder(): void {
    if (this.cart.itemCount() === 0) return;
    this.orderPlaced = true;
    setTimeout(() => {
      this.cart.clearCart();
      this.orderPlaced = false;
      this.router.navigate(['/']);
    }, 3000);
  }
}
