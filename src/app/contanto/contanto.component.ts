import { Component, OnInit } from '@angular/core';
import { contactoUsuario } from '../models/usuario';
import { UserPass } from '../models/user-pass'
import { TesingService } from '../servicios/tesing.service'

@Component({
  selector: 'app-contanto',
  templateUrl: './contanto.component.html',
  styleUrls: ['./contanto.component.css'],
  providers: [TesingService]

})
export class ContantoComponent implements OnInit {

  public traidos: any;

  public c_usuario: contactoUsuario;
  public user_pass: UserPass;
  public usuarios: Array<contactoUsuario>;

  public userId: any;



  constructor(private _testingServices: TesingService) {
    this.c_usuario = new contactoUsuario('', '', '', '');
    this.user_pass = new UserPass('', '', '');
    this.userId = 2;
  }


  // acabos de crear el servicio ahora debemos usarlo en el html
  ngOnInit() {
    this.cargarUsuario();
  }

  onSubmit() {
    console.log('evento submit enviado');
    console.log(this.c_usuario);

  }
  onSubmitLogin(form) {
    console.log(this.user_pass);
    this.user_pass.mostrar();
    form.reset();

  }

  cargarUsuario() {
    this._testingServices.getUser(this.userId).subscribe(
      result => {
        this.traidos = result.data;
        console.log(this.traidos);
      },
      error => {
        console.log(error);

      }
    )
  }

}
