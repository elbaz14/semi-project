import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-pastries',
  imports: [],
  templateUrl: './pastries.html',
  styleUrls: ['../shared-page.css'],
})
export class Pastries {
  private cart = inject(CartService);
  addedMap: Record<string, boolean> = {};

  products = [
    { name: 'Chocolate Croissant', price: 14, emoji: '🥐', desc: 'Buttery layers filled with dark chocolate' },
    { name: 'Cinnamon Roll', price: 16, emoji: '🍥', desc: 'Warm cinnamon swirl with cream cheese glaze' },
    { name: 'Blueberry Muffin', price: 14, emoji: '🫐', desc: 'Packed with fresh blueberries and crumble top' },
    { name: 'Cheesecake Slice', price: 22, emoji: '🍰', desc: 'New York style with a graham cracker crust' },
  ];

  addToCart(name: string, price: number): void {
    this.cart.addItem(name, price, 'Pastries');
    this.addedMap[name] = true;
    setTimeout(() => (this.addedMap[name] = false), 1200);
  }
}
