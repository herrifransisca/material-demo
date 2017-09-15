import { Component } from '@angular/core';
import 'rxjs/add/observable/timer';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading = false;

  constructor() {
    this.isLoading = true;
    this.getCourses()
      .subscribe(x => this.isLoading = false);
  }

  // it should not be here,
  // instead of in the service. but it doesn't matter for this demo
  getCourses() {
    return Observable.timer(2000);
  }
}
