import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class ListaPersonagem implements OnInit , OnDestroy {
  personagens: IPersonagem[] = []
  constructor(private personagensService: Personagens) {}

  carregarPersonagens() {
    this.personagensService.getPersonagens().subscribe((respostaDaAPI) => {
     this.personagens = respostaDaAPI;
    });
  }

 ngOnInit() {
  console.log('ngOnInit');
  this.carregarPersonagens();
 }

 ngOnDestroy() {
  console.log('ngOnDestroy') 
 }


  incremetarVotoPersonagem(evento: {id :number, totalVotos: number}) {
   this.personagensService
   .votarPersonagem(evento.id, evento.totalVotos)
   .subscribe((resposta) => {
    this.carregarPersonagens();
   })
    }
    

}
