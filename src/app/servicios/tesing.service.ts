import { Injectable } from '@angular/core';
import { contactoUsuario } from '../models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class TesingService {

  public url: string;
  // public contacto: Array<contactoUsuario>;
  constructor(public _http: HttpClient) {

    // this.contacto = [
    //   new contactoUsuario('juan', 'mamani', 'xd@gmail.com', 'este es un mensaje desde aqui'),
    //   new contactoUsuario('pedro', 'lopez', 'lopee@gmail.com', 'estes uun mensaje del lopex'),
    //   new contactoUsuario('daniela', 'mamani', 'dani@gmail.com', 'este es in emsnaje ded dani'),
    //   new contactoUsuario('eliot', 'algrasoza', 'eli@gmail.com', 'este es in emsnaje ded aldoza'),

    // ]
    this.url = 'https://reqres.in/';
  }
  // getUsuarios(): Array<contactoUsuario> {
  //   return this.contacto;
  // }
  // gettext(): string {
  //   return ('hola desde un servicio');
  // }

  getUser(userID): Observable<any> {
    return this._http.get(this.url + 'api/users/' + userID);
  }
}
