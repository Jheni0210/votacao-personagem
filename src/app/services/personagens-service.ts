import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface IPersonagem {
  id: number;
  nome: string;
  imagem: string;
  votos: number;
}

@Injectable({
  providedIn: 'root',
})
export class PersonagensService {
  private personagens: IPersonagem[] = [
    {
      id: 113231,
      nome: 'Rick Sanchez',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      votos: 0,
    },
    {
      id: 12312,
      nome: 'Rick Sanchez',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      votos: 0,
    },
    {
      id: 3342342,
      nome: 'Rick Sanchez',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      votos: 0,
    },
    {
      id: 4234234,
      nome: 'Rick Sanchez',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      votos: 0,
    },
    {
      id: 5234234,
      nome: 'Rick Sanchez',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      votos: 0,
    },
  ];
  baseUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getPersonagens(): Observable<IPersonagem[]> {
    return this.httpClient.get<IPersonagem[]>(`${this.baseUrl}/personagens`);
  }

  votarPersonagem(id: number, totalVotos: number) {

    return this.httpClient.patch(`http://localhost:3000/personagens/${id}`,{votos: totalVotos+1});
    
  }

  

  

}
