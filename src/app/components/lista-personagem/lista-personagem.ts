import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardPersonagem } from '../card-personagem/card-personagem';
import { PersonagensService } from '../../services/personagens-service';

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
export class ListaPersonagem implements OnInit, OnDestroy {
  personagens: IPersonagem[] = [];

  constructor(private personagemService: PersonagensService) {
    console.log('constructor');
  }
  ngOnDestroy(): void {
   console.log('ngOnDestroy') 
  }

  carregarPersonagem() {
    this.personagemService.getPersonagens().subscribe((respostaDaApi) => {
      this.personagens = respostaDaApi;
    });
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.carregarPersonagem();
  }

  incremetarVotoPersonagem(evento: { id: number; totalVotos: number }) {
    this.personagemService
      .votarPersonagem(evento.id, evento.totalVotos)
      .subscribe((resposta) => {
        this.carregarPersonagem();
      });
  }


}
