import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cappuccino',
  imports: [],
  templateUrl: './cappuccino.html',
  styleUrls: ['../shared-page.css'],
})
export class Cappuccino {
  private cart = inject(CartService);
  addedMap: Record<string, boolean> = {};

  products = [
    { name: 'Classic Cappuccino', price: 16, emoji: '☕', desc: 'Perfect balance of espresso, steamed milk, and foam' },
    { name: 'Dry Cappuccino', price: 16, emoji: '☁️', desc: 'Extra foam, less milk — bold and airy' },
    { name: 'Wet Cappuccino', price: 16, emoji: '🥛', desc: 'More steamed milk for a creamy, smooth sip' },
    { name: 'Iced Cappuccino', price: 18, emoji: '🧊', desc: 'Chilled perfection with cold foam' },
  ];

  addToCart(name: string, price: number): void {
    this.cart.addItem(name, price, 'Cappuccino');
    this.addedMap[name] = true;
    setTimeout(() => (this.addedMap[name] = false), 1200);
  }
}
