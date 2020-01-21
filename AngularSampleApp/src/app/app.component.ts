import { Component } from '@angular/core';

export interface ShoppingItem {
  name: string
  bought: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  shoppingList: ShoppingItem[] = [
    { name: 'Milk', bought: false },
    { name: 'Bread', bought: false },
    { name: 'Eggs', bought: false },
    { name: 'Onions', bought: false },
    { name: 'Tuna', bought: false }
  ];

  title = 'AngularSampleApp';

  public addItem(item: string) {
    if (item) {
      this.shoppingList.push({ name: item, bought: false });
    }
  }
  public toogleMark(item: ShoppingItem) {
    item.bought = !item.bought;
    console.log(item.name)
  }
}
