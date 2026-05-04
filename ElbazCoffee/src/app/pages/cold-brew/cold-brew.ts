import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cold-brew',
  imports: [],
  templateUrl: './cold-brew.html',
  styleUrls: ['../shared-page.css'],
})
export class ColdBrew {
  private cart = inject(CartService);
  addedMap: Record<string, boolean> = {};

  products = [
    { name: 'Classic Cold Brew', price: 18, emoji: '🧊', desc: 'Slow-steeped 12 hours for a smooth finish' },
    { name: 'Nitro Cold Brew', price: 22, emoji: '🫧', desc: 'Infused with nitrogen for a creamy cascade' },
    { name: 'Vanilla Cold Brew', price: 20, emoji: '🌿', desc: 'Sweet vanilla meets cold-brewed perfection' },
    { name: 'Mocha Cold Brew', price: 22, emoji: '🍫', desc: 'Rich chocolate blended with cold brew' },
  ];

  addToCart(name: string, price: number): void {
    this.cart.addItem(name, price, 'Cold Brew');
    this.addedMap[name] = true;
    setTimeout(() => (this.addedMap[name] = false), 1200);
  }
}
