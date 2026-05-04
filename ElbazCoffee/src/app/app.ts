import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Sidenav } from './sidenav/sidenav';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Sidenav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Elbaz Coffee';
}
