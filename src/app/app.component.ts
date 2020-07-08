import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title =  'Angular 9 Project!';
  str = 'GOOD MORNING how ArE yOU';
  today = new Date();
  salary = 34568;
  months = [ 'Jan ', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  data = [{id: 1, name: 'Harry', city: 'PUNE'},{ id: 2, name: 'Sumit', city: 'MUMBAI'}];
  jsonval = {name: 'Rox', age: '25', address: {a1: 'Mumbai', a2: 'Karnataka'}};
  jsonval1 = [ {name: 'Rox', age: '25', address: 'Pune'}, {name: 'acv', age: '22', address: 'Mumbai'},
              {name: 'dre', age: '24', address: 'Satara'}, {name: 'wer', age: '21', address: 'Thane'}];
  employee = [ { name: 'Harry', age: 23, gender: 'male'}, { name: 'Seema', age: 23, gender: 'female'},
                {name: 'Sumit', age: 24, gender: 'male'}, {name: 'Kiran', age: 22, gender: 'female'} ];

}
