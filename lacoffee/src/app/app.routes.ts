import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Espresso } from './pages/espresso/espresso';
import { Cappuccino } from './pages/cappuccino/cappuccino';
import { Latte } from './pages/latte/latte';
import { ColdBrew } from './pages/cold-brew/cold-brew';
import { Pastries } from './pages/pastries/pastries';
import { Checkout } from './pages/checkout/checkout';
import { Contact } from './pages/contact/contact';
import { Accessibility } from './pages/accessibility/accessibility';
import { Faq } from './pages/faq/faq';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'espresso', component: Espresso },
  { path: 'cappuccino', component: Cappuccino },
  { path: 'latte', component: Latte },
  { path: 'cold-brew', component: ColdBrew },
  { path: 'pastries', component: Pastries },
  { path: 'checkout', component: Checkout },
  { path: 'contact', component: Contact },
  { path: 'accessibility', component: Accessibility },
  { path: 'faq', component: Faq },
  { path: '**', redirectTo: '' },
];
