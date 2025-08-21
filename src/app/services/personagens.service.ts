import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Helper function to assert the response matches IPersonagem
function assertPersonagem(response: any): IPersonagem {
  if (!response || typeof response !== 'object') {
    throw new Error('Invalid response format - expected an object');
  }
  
  const { id, nome, imagem, votos } = response;
  
  if (typeof id !== 'number' || 
      typeof nome !== 'string' || 
      typeof imagem !== 'string' || 
      typeof votos !== 'number') {
    throw new Error('Invalid response format - missing required fields');
  }
  
  return { id, nome, imagem, votos };
}


export interface IPersonagem {
  id: number;
  nome: string;
  imagem: string;
  votos: number;
}

@Injectable({
  providedIn: 'root'
})

export class Personagens {
  private readonly API_URL = 'http://localhost:3000/personagens';

  constructor(private http: HttpClient) {}

  getPersonagens(id: number) {
    return this.http.get(`${this.API_URL}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }) as unknown as Observable<IPersonagem>;
  }

  getImagemUrl(imagemPath: string): string {
    if (!imagemPath) return 'https://via.placeholder.com/150x150/cccccc/666666?text=Sem+Imagem';
    if (imagemPath.startsWith('http')) return imagemPath;
    return `${this.API_URL}/${imagemPath.replace(/^\//, '')}`;
  }


// votarPersonagem(id: number, totalVotos: number): Observable<any> {
//  //Assuming your API accepts PATCH requests to update the vote count
//    return this.http.patch(`${this.API_URL}/${id}`, { votos: totalVotos + 1 });
//   }

  // getPersonagemPorId(): Observable<IPersonagem> {
  //   return this.http.get(this.baseUrl+'/personagens/id')
  // }

}