import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'money-clock';
  initialAmount = 15000;
  currentAmount = this.initialAmount;
  targetAmount = 150000;
  costsPerYear = 13000;

  dailyRate = 300;
  netDailyRate = this.dailyRate*0.66;
  // netDailyRate = 200;
  netPerYear = this.netDailyRate*5*45;
  sparePerYear = this.netPerYear - this.costsPerYear;
  netPerMonth = this.netPerYear/12;
  sparePerMonth = this.sparePerYear/12;
  sparePerWeek = this.sparePerYear/52;
  sparePerDay = this.sparePerWeek/7;
  sparePerHour = this.sparePerDay/24;
  sparePerMinute = this.sparePerHour/60;
  sparePerSecond = this.sparePerMinute/60;

  yearsLeft = (this.targetAmount-this.currentAmount)/this.sparePerYear;

  ngOnInit() {
  //Update the number every 1 second
    interval(1000).subscribe(x => {
      this.currentAmount += this.sparePerSecond;
    });
  }

}
