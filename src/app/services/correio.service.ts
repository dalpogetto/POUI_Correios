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

  
  constructor(private http: HttpClient) { }

   public Login(params?: any) {
    return this.http
      .post("https://localhost:7146/Login/", params)
      .pipe(take(1));
  }


  public RastroObjeto(params: string, token:string) {
        return this.http
        .get("https://localhost:7146/Rastro/"+params, {headers: new HttpHeaders({'Authorization': 'Bearer ' + token})})
        .pipe(take(1));
    }


    public CalculoPrecoPrazo(params: any, token:string) {
      return this.http
        .post("https://localhost:7146/CalculoPrecoPrazo", params, {headers: new HttpHeaders({'Authorization': 'Bearer ' + token})})
        .pipe(take(1));
    }

   

   
}
