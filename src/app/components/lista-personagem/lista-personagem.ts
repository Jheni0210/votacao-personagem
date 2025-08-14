import { Component } from '@angular/core';
import { CardPersonagem } from '../card-personagem/card-personagem';
import { Personagens } from '../../services/personagens.service';


interface IPersonagem {
  id: number;
  nome: string;
  imagem: string;
  votos: number;
}

@Component({
  selector: 'app-lista-personagem',
  imports: [CardPersonagem],
  templateUrl: './lista-personagem.html',
  styleUrl: './lista-personagem.css',
})
export class ListaPersonagem {
 
  personagens: IPersonagem[] = []

  constructor(private personagensService: Personagens) {
    this.personagens = this.personagensService.getPersonagens();
  }
  incremetarVotoPersonagem(id:Number) {
    const personagem = this.personagens.find(p => p.id === id);
    if (personagem) {
      personagem.votos++;
    }
  }
}


