import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
	selector: 'app-mascota',
	templateUrl: './mascota.component.html',
	styleUrls: ['./mascota.component.css']
})
export class MascotaComponent {

	employeArray: Employee[] = [
		{ id: 1, name: 'Juancito Pinto', country: "Tarzan" },
		{ id: 2, name: 'Deivi Choque', country: "Hermoso" },
		{ id: 3, name: 'Lizeth Guitierrez', country: "Patitas" },
	];
	selectedEmployee: Employee = new Employee();
	addOrEddit() {

		if (this.selectedEmployee.id === 0) {
			this.selectedEmployee.id = this.employeArray.length + 1;
			this.employeArray.push(this.selectedEmployee);
			this.selectedEmployee = new Employee();
		};
		this.selectedEmployee = new Employee();
	};
	openForId(employee: Employee) {
		this.selectedEmployee = employee;
	};
	delete() {
		if (confirm('are you sure you want delete it?')) {
			this.employeArray = this.employeArray.filter(x => x != this.selectedEmployee);
			this.selectedEmployee = new Employee();
		}

	}
}
