import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-card-personagem',
  imports: [],
  templateUrl: './card-personagem.html',
  styleUrl: './card-personagem.css',
})
export class CardPersonagem {
  id= input<number>();
  nome = input<string>();
  imagem = input<string>();
  totalVotos = input<number>();

  votou = output<number|undefined | null>();
}


