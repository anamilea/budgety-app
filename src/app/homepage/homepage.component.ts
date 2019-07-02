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

  dataCategories = [];
  isCategoryVisible = false;
  isPeopleVisible = false;
  isChartAvailable = false;
  count = [];
  total = 0;
  isChartReady = false;
  categories = [
  ];
  people = [
];
  chartCategories: any;
  highcharts;
  highchartsPeople;
  chartOptions;
  chartOptionsPeople;
  categoriesData = [];
  peopleData = [];
  isHighchartAvailable = false;
  rowData;

  constructor(private _authService: AuthService, private _usersService: UsersService, private _expensesService: ExpenseService) {
    this._authService.handleAuthentication();
  }

  ngOnInit() {
    this._expensesService.readExpenses(this._authService.userID).subscribe(res=> {
      this.rowData = res;
      res.forEach(element => {
        this.data.push([element.date, element.value]);
        this.dataCategories.push(element.date); 
      });
 
      this.drawChart();
      this.getData();
    });
  }

  getData() {
    this._usersService.readPeople(this._authService.userID).subscribe(res => {
      if(res) {
        this.people = res.map(obj => obj.name.replace(/\s/g,''));
      }
 
    });

    this._usersService.readCategories(this._authService.userID).subscribe(res => {
      if(res){
        this.categories = res.map(obj => obj.name.replace(/\s/g,''));
        this.isHighchartAvailable = true;
        this.setChartData();
      }
     });
  }


  private setPeopleChart() {
    this.highchartsPeople = Highcharts;
    this.chartOptionsPeople = {
      chart: {
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Total cheltuieli în funcție de persoane'
      },
      tooltip: {
        pointFormat: '{series.name}: {point.y:.1f} RON.'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        type: 'pie',
        name: 'Suma cheltuită:',
        data: this.peopleData
      }]
    };
  }

  private setCategoriesChart() {
    this.isChartReady = true;
    this.highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Total cheltuieli pe categorii'
      },
      tooltip: {
        pointFormat: '{series.name}: {point.y:.1f} RON.'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        type: 'pie',
        name: 'Suma cheltuită:',
        data: this.categoriesData
      }]
    };
  }

  setChartData() {

    this.categories.forEach(category => {
      this.count[category] = 0;
    });

    this.people.forEach(person => {   
      this.count[person] = 0;
    });

    this.rowData.forEach(expense => {
      this.count[expense.category] += expense.value;

      if (expense.people != null) {

        let ppl = expense.people.split(',');

        ppl.forEach(element => {
          this.count[element] += expense.value;
        });
      }
      this.count[expense];
      this.total += expense.value;
    });

    //set data pt chart
    this.categories.forEach(category => {
      this.categoriesData.push([category, this.count[category]]);
    });

    //set data pt chart
    this.people.forEach( person => {
      this.peopleData.push([person, this.count[person]]);
    });

    this.setCategoriesChart();
    this.setPeopleChart();

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
}
