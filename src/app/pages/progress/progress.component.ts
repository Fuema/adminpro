import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent  {

   progreso1: number = 25;
   progreso2: number = 35;

   get getProgreso1Pct() {
    return `${this.progreso1}%`;
  }
  get getProgreso2Pct() {
    return `${this.progreso2}%`;
  }


}
