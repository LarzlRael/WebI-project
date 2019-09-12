import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-inicio',
	templateUrl: './inicio.component.html',
	styleUrls: ['./inicio.component.css']
})
export class InicioComponent {


	titulos: string[] = ["Nosotros", "contactanos", "redes sociales", "Tour 360", "blog", "curiosidades"];
	contenidos: string[] = ['Conoce quienes somos, médicos veterinarios, nuestra historia, misión y visión',
		' 5360-3311 y 5240-0404 Datos de contacto Clínica Veterinaria  Ver más',
		'Visita nuestras instalaciones por medio de un tour virtual 360°',
		'Visita nuestro blog donde encontrarás información, videos y tips para el cuidado de tu mascota',
		 'Visita esta página para divertirte y reflexionar un poco.'];


	lista: string[] = ["hola", "que", "tal", "estas"];
	detalles = [
		{
			titulo: "Nosotros",
			contenido: "Conoce quienes somos, médicos veterinarios, nuestra historia, misión y visión"
		},
		{
			titulo: " contactanos",
			contenido:"5360-3311 y 5240-0404 Datos de contacto Clínica Veterinaria  Ver más"
		},
		{
			titulo: " redes sociales",
			contenido:"Visita nuestras instalaciones por medio de un tour virtual 360°"
		},
		{
			titulo: "blog",
			contenido:"Visita nuestro blog donde encontrarás información, videos y tips para el cuidado de tu mascota"
		},
		{
			titulo: "Tour 360",
			contenido:"Visita nuestras instalaciones por medio de un tour virtual 360°"
		},
		{
			titulo: "misión y visión",
			contenido:"Visita esta página para divertirte y reflexionar un poco."
		}
	]

	
}
