import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-card-personagem',
  standalone: true,
  imports: [],
  templateUrl: './card-personagem.html',
  styleUrl: './card-personagem.css',
})
export class CardPersonagem {
  id = input.required<number>();
  nome = input.required<string>();
  imagem = input.required<string>();
  totalVotos = input.required<number>();

  votou = output<{id: number, totalVotos: number}>();
}