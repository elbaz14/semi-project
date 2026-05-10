import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-espresso',
  imports: [],
  templateUrl: './espresso.html',
  styleUrls: ['../shared-page.css'],
})
export class Espresso {
  private cart = inject(CartService);
  addedMap: Record<string, boolean> = {};

  products = [
    { name: 'Single Espresso', price: 10, emoji: '☕', desc: 'A bold single shot of pure Italian espresso' },
    { name: 'Double Espresso', price: 14, emoji: '☕☕', desc: 'Twice the intensity, twice the flavor' },
    { name: 'Ristretto', price: 12, emoji: '🫗', desc: 'Short, concentrated and full-bodied' },
    { name: 'Lungo', price: 12, emoji: '🍵', desc: 'A longer, milder espresso pull' },
  ];

  addToCart(name: string, price: number): void {
    this.cart.addItem(name, price, 'Espresso');
    this.addedMap[name] = true;
    setTimeout(() => (this.addedMap[name] = false), 1200);
  }
}
