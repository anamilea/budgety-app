import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import * as Highcharts from 'highcharts';
import { UsersService } from '../services/users.service';
import { ExpenseService } from '../expense/expense.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  data = [
  
  ];
  people;
  categories;
  dataCategories = [];
  isCategoryVisible = false;
  isPeopleVisible = false;

  constructor(private _authService: AuthService, private _usersService: UsersService, private _expensesService: ExpenseService) {
    this._authService.handleAuthentication();
  }

  ngOnInit() {
    this._usersService.readPeople(this._authService.userID).subscribe(res => {
      this.people = res.map(obj => obj.name);
    });

    this._usersService.readCategories(this._authService.userID).subscribe(res => {
      this.categories = res.map(obj => obj.name);
    });

    this._expensesService.readExpenses(this._authService.userID).subscribe(res=> {

      res.forEach(element => {
        this.data.push([element.date, element.value]);
        this.dataCategories.push(element.date); 
      });
 
      this.drawChart();
    });

  }

  

  drawChart(){
    Highcharts.chart('container', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Graficul cheltuielilor'
      },
      xAxis: {
        categories: this.dataCategories
      },
      yAxis: {
        title: {
          text: 'Valoare (RON)'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
        type: 'area',
        name: 'Valoarea cheltuielii',
        data: this.data
      }]
    });
  }

  categoryInput() {
    this.isCategoryVisible = true;
  }

  peopleInput() {
    this.isPeopleVisible = true;
  }

  addPeople(event: any) {
    this._usersService.createPeople(this._authService.userID, event.target.value).subscribe(res => {
      this.isPeopleVisible = false;
      this.people.push(res[0].name);
    });

  }

  addCategory(event: any) {
    this._usersService.createCategory(this._authService.userID, event.target.value).subscribe(res => {
      this.isCategoryVisible = false;
      this.categories.push(res[0].name);
    });
  }

}
