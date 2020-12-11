import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  number1: number = 0;
  number2: number = 0;
  number3: number = 0;
  number4: number = 0;
  number5: number = 0;
  number6: number = 0;

  orderedNumbers: any;


  constructor() { }

  ngOnInit(): void {
  }

  generateRandomNumbers() {
    var number = Math.floor(Math.random() * 60 + 1)
    return number;
  }

  raffle() {
    this.number1 = this.generateRandomNumbers();
    this.number2 = this.generateRandomNumbers();
    this.number3 = this.generateRandomNumbers();
    this.number4 = this.generateRandomNumbers();
    this.number5 = this.generateRandomNumbers();
    this.number6 = this.generateRandomNumbers();

    var array = [
      this.number1,
      this.number2,
      this.number3,
      this.number4,
      this.number5,
      this.number6
    ]

    this.orderedNumbers = array.sort(function(a, b) {
      return a - b;
  });

  }

}
