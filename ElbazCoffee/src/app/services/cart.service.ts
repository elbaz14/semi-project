import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items = signal<CartItem[]>([]);

  readonly cartItems = this.items.asReadonly();
  readonly itemCount = computed(() =>
    this.items().reduce((sum, item) => sum + item.quantity, 0)
  );
  readonly total = computed(() =>
    this.items().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  addItem(name: string, price: number, category: string): void {
    const id = name.toLowerCase().replace(/\s+/g, '-');
    const current = this.items();
    const existing = current.find((item) => item.id === id);

    if (existing) {
      this.items.set(
        current.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      this.items.set([...current, { id, name, price, quantity: 1, category }]);
    }
  }

  removeItem(id: string): void {
    this.items.set(this.items().filter((item) => item.id !== id));
  }

  updateQuantity(id: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeItem(id);
      return;
    }
    this.items.set(
      this.items().map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }

  clearCart(): void {
    this.items.set([]);
  }
}
