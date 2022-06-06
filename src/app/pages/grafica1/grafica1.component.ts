import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component  {

  title1: string = "Sales";
  title2: string = "Imports";
  title3: string = "Purchase";
  title4: string = "Exports";

 public labels1: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
 public data1 = [[ 350, 450, 100 ]];

 public labels2: string[] = [ 'Download Imports', 'In-Store Imports', 'Mail-Order Imports' ];
 public data2 = [[ 300, 120, 60 ]];



}
