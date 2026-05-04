import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-latte',
  imports: [],
  templateUrl: './latte.html',
  styleUrls: ['../shared-page.css'],
})
export class Latte {
  private cart = inject(CartService);
  addedMap: Record<string, boolean> = {};

  products = [
    { name: 'Classic Latte', price: 18, emoji: '🥛', desc: 'Smooth espresso with velvety steamed milk' },
    { name: 'Vanilla Latte', price: 20, emoji: '🌿', desc: 'Sweet vanilla infused with rich espresso' },
    { name: 'Caramel Latte', price: 20, emoji: '🍯', desc: 'Buttery caramel drizzle over creamy latte' },
    { name: 'Matcha Latte', price: 22, emoji: '🍵', desc: 'Japanese matcha blended with steamed milk' },
  ];

  addToCart(name: string, price: number): void {
    this.cart.addItem(name, price, 'Latte');
    this.addedMap[name] = true;
    setTimeout(() => (this.addedMap[name] = false), 1200);
  }
}
