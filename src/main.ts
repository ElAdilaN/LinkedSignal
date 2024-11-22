import { Component, linkedSignal, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
<!-- <div>Select Town</div>
<select
     [ngModel]="selectedProduct()"
     (change)="onTownSelected($any($event.target).value)">
     <option disabled value="">--Select a quantity--</option>
      @for( q of towns(); track q){
       <option >{{ q  }}</option>
     } 

   </select> -->


<div>Select product  </div>
<select
     [ngModel]="selectedProduct()"
     (change)="onProductSelected($any($event.target).value)">
     <option disabled value="">--Select a quantity--</option>
      @for( q of productsAvailable(); track q){
       <option >{{ q.price  }}</option>
     } 

   </select>


<div>Select Quantity </div>
   <select
        [ngModel]="quantity()"
        (change)="onQuantitySelected($any($event.target).value)">
        <option disabled value="">--Select a quantity--</option>
         @for( q of qtyAvailable(); track q){
          <option >{{ q }}</option>
        } 

      </select>
  

    


  `,
})
export class App {
  name = 'Angular';
  selectedProduct = signal<number | null>(null);
  selectedTown = signal<number | null>(null);

  quantity = linkedSignal({
    source: this.selectedProduct,
    computation: () => {
      return 1;
    },
  });

  qtyAvailable = signal([1, 2, 3, 4, 5]);
  towns = signal(['town 1', 'town 2', 'town 3', 'town 4', ' town 5']);
  productsAvailable = signal([
    { name: 'Prod 1', price: 1 },
    { name: 'Prod 2', price: 2 },
    { name: 'Prod 3', price: 3 },
    { name: 'Prod 4', price: 4 },
    { name: 'Prod 5', price: 5 },
    { name: 'Prod 6', price: 6 },
  ]);
  onQuantitySelected(qNumber: any) {
    this.quantity.set(qNumber);
  }
  onProductSelected(product: any) {
    this.selectedProduct.set(product);
    console.log('product ' + product);
  }
  /*   onTownSelected(town: any) {
    this.selectedTown.set(town);
  } */
}

bootstrapApplication(App);
