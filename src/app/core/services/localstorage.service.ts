import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalstorageService {

  public acessToken = "token";
  constructor() { }

  getToken(){
    return localStorage.getItem(this.acessToken);
  }

  saveToken(token:string){
    localStorage.setItem(this.acessToken,token);
  }


  destroy(){
    localStorage.removeItem(this.acessToken);
  }
}
