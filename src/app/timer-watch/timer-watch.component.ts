import { Component } from '@angular/core';

@Component({
  selector: 'app-timer-watch',
  templateUrl: './timer-watch.component.html',
  styles: [
  ]
})
export class TimerWatchComponent  {

  

  interval: any
    time :{hours:number,minutes:number, seconds:any,milliSeconds: any}=  {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliSeconds: 0

  }
  constructor() { 
    // this.interval = setInterval(() => {
    //   this.setTime();
    //   this.time.milliSeconds++;
    // }, 10 );
    
    
  }
  

  handleCounter(command: string): void {
    if (command === 'stop') return clearInterval(this.interval);
    else if(command ==='reset') return this.reset()
    this.interval = setInterval(() => {
      this.setTime();
      this.time.milliSeconds++;
    }, 10);
  }

  reset() {
    this.time.milliSeconds = 0;
    this.time.seconds = 0;
    this.time.minutes = 0;
    this.time.hours = 0;
  }


  setTime():void{

      

    if(this.time.milliSeconds == 60){
      this.time.milliSeconds = 0;
      this.time.seconds+=1;
      
    }
    else if (this.time.seconds == 60){
      this.time.seconds = 0;
      this.time.minutes+=1;
    }
    else if (this.time.minutes == 60){
      this.time.minutes =0;
      this.time.hours +=1;
    }
  
  }
 
  }
