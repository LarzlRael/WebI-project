import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
	selector: 'app-clinica',
	templateUrl: './clinica.component.html',
	styleUrls: ['./clinica.component.css']
})
export class ClinicaComponent implements OnInit {

	public seguidores: number;
	public nombre: string;
	public fecha = new Date();
	public name = " gato";
constructor(private _route: ActivatedRoute,
	private _router: Router, private dataservice: DataService) {
	this.dataservice.getData().subscribe(data => {
		console.log(data);

	})
}

ngOnInit() {

	this._route.params.subscribe((params: Params) => {
		this.nombre = params.nombre;
		this.seguidores = params.seguidores;
	});
}

redirigir() {
	this._router.navigate(["/mascota"]);
}

post = [];

}
