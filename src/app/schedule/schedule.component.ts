import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  currentDay:string
  otherDays:Array<string>
  constructor() { }

  ngOnInit() {
    this.currentDay = "Friday"
    this.otherDays.push("Saturday")
    this.otherDays.push("Sunday")
  }

}