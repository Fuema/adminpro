import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-increments',
  templateUrl: './increments.component.html',
  styleUrls: ['./increments.component.css']
})
export class IncrementsComponent implements OnInit  {

  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }

// Pct
@Input('valorInput') progresoIn: number = 30;
@Input() btnClass: string = 'btn-primary';

@Output('valorOutput') progresoOut: EventEmitter<number> = new EventEmitter();

  ValorChanged(valor: number) {

   if (this.progresoIn >= 100 && valor >=0){
    this.progresoOut.emit(100) 
    return this.progresoIn = 100
    }

    if (this.progresoIn <= 0 && valor <0){
      this.progresoOut.emit(0) 
      return this.progresoIn = 0
     }

    this.progresoIn = this.progresoIn + valor
    return this.progresoOut.emit(this.progresoIn) 
  }

  onChangeInput(newValor: number) {

    if (newValor >= 100 ){
     this.progresoIn = 100
     }else if (newValor <= 0 ){
      this.progresoIn = 0
     }else {
      this.progresoIn = newValor
    } 
     this.progresoOut.emit(this.progresoIn) 
   }

}
