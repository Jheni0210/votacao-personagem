import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPersonagem, Personagens } from '../../services/personagens.service';

@Component({
  selector: 'app-detalhe-personagem',
  imports: [],
  templateUrl: './detalhe-personagem.html',
  styleUrls: ['./detalhe-personagem.css']
})
export class DetalhePersonagem implements OnInit{
  IDPersonagem: number=0;
  personagem!: IPersonagem;

  constructor(private route: ActivatedRoute, private service: Personagens) { }

  ngOnInit(): void {
    this.IDPersonagem = Number(this.route.snapshot.paramMap.get('id')!);
    this.service.getPersonagens(this.IDPersonagem).subscribe((resposta: IPersonagem) => {
      this.personagem = resposta;
    });
  }
}