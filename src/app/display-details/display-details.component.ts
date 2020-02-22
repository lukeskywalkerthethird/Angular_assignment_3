import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css'],
  styles:[`
  .textColor{
    color: white;
  }
  `]
})
export class DisplayDetailsComponent implements OnInit {
  counter = 0;
  paragraphStateVisible = true;
  buttonClickedLog = [];
  color = 'white';
  constructor() { }

  ngOnInit(): void {
  }
  changeVisibility(){
    this.counter++;
    this.color = this.counter >= 5?'blue':'';
    this.buttonClickedLog.push(new Date());
    this.paragraphStateVisible = !this.paragraphStateVisible;
    return this.paragraphStateVisible;
  }


}
