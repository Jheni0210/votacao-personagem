import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { ListaPersonagem } from "./components/lista-personagem/lista-personagem";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, ListaPersonagem, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('votacao-personagens');
}
