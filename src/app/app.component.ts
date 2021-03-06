import { Component, OnInit } from '@angular/core';
import { TimerService } from './services/timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private ts3: TimerService, private ts5: TimerService) { }

  ngOnInit() {
    this.ts5.startWithRepeat(5000, 5000, this.fiveSecondTick.bind(this));
    // this.ts3.startWithRepeat(3000, 3000, this.threeSecondTick.bind(this));
    this.ts3.start(3000, this.threeSecondTick.bind(this));
  }

  fiveSecondTick() {
    console.log('app.component.fiveSecondTick!');
    this.ts3.start(3000, this.threeSecondTick.bind(this));
  }

  threeSecondTick() {
    this.ts3.stop(this.threeSecondTick.bind(this));
    console.log('app.component.threeSecondTick!');
  }
}
