import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private localStorageService: LocalstorageService) { }

  isAuthenticate(){
    const token = this.localStorageService.getToken()
    if(token) {
      return true;
    }
    return false;
  }
}
