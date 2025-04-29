import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { take } from 'rxjs';
import { Totvsheader } from '../interfaces/totvsheader';

@Injectable({
  providedIn: 'root'
})


export class CorreioService {

  //Dados do usuario
  dadosUsuario = {"Email":"servico@dieboldnixdorf.com", "Senha":"prodiebold11"}

  constructor(private http: HttpClient) { 
  }

   //---------------------- Variaveis Globais

   public Login(params?: any) {
    return this.http
      .post("https://localhost:7146/Login/", params)
      .pipe(take(1));
  }


  public RastroObjeto(params: string) {
      return this.http
        .get("https://azure/diebold:7000/Rastro/"+params, {headers: this.ObterToken()})
        .pipe(take(1));
    }


    public CalculoPrecoPrazo(params?: any) {
      return this.http
        .post("https://localhost:7146/CalculoPrecoPrazo", params, {headers: this.ObterToken()})
        .pipe(take(1));
    }

    public ObterToken():HttpHeaders
    {
      this.http.post('https://localhost:7146/login', this.dadosUsuario).pipe(take(1)).subscribe({
        next: (response: any) => {
          let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + response.token}); 
          return headers
        }
     })
     return new HttpHeaders
   }
}
