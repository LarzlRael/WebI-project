

export class UserPass {

      public user: string;
      public password: string;
      public imagen: string;
      constructor(user, password, imagen) {
            this.user = user,
                  this.password = password
            this.imagen = imagen;
      }
      mostrar() {
            console.log('mostrando ', this.user,this.password,this.imagen);
            
      }
}
