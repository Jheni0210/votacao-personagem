import { Component } from '@angular/core';
import { CardPersonagem } from '../card-personagem/card-personagem';


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
 
  personagens: IPersonagem[] = [
    {
      id:1,
      nome:"claudio",
      imagem:"https://static.vecteezy.com/ti/fotos-gratis/t1/36471598-ai-gerado-colorida-camaleao-empoleirado-em-uma-arvore-ramo-com-vibrante-neon-luz-efeito-digital-arte-generativo-ai-foto.jpg",
      votos:0,
    },
     {
      id:2,
      nome:"paula",
      imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINKLRdnJnkQpBYDPYnxSTj4rcAZNRFA0wDQ&s",
      votos:0,
    },
     {
      id:3,
      nome:"olivia",
      imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNwTfP0KVPfRBPIkaNWuOyGBmVN0TzlXMSA&s",
      votos:0,
    },
     {
      id:4,
      nome:"paloma",
      imagem:"https://s2.glbimg.com/cYa3pKAKIPidjKyGPuAd8T4Hd1I=/e.glbimg.com/og/ed/f/original/2017/08/21/dog-2570398_960_720.jpg",
      votos:0,
    },
     {
      id:5,
      nome:"jorge",
      imagem:"https://st.depositphotos.com/1475009/1572/i/450/depositphotos_15725225-stock-photo-capybara-hydrochoerus-hydrochaeris-resting.jpg",
      votos:0,
    },
       {
      id:6,
      nome:"Gino",
      imagem:"https://st2.depositphotos.com/1703608/7553/i/450/depositphotos_75536045-stock-photo-portrait-of-a-cute-little.jpg",
      votos:0,
    },
       {
      id:7,
      nome:"Big",
      imagem:"https://jpimg.com.br/uploads/2025/02/8-animais-mais-fortes-do-mundo.jpg",
      votos:0,
    },
       {
      id:8,
      nome:"Raph",
      imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCga4d4OwD-AepJ9cYes_38GxF6GuK5b_DpoH3Q7ENiqWrzUXZYrGjwkORogXkGWma_jo&usqp=CAU",
      votos:0,
    }
  ]
  incremetarVotoPersonagem(id:Number) {
    const personagem = this.personagens.find(p => p.id === id);
    if (personagem) {
      personagem.votos++;
    }
  }
}

