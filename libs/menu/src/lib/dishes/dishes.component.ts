import { Component, OnInit } from '@angular/core';
import { Dish } from '@yfx-kitchen';
import { MenusService } from '../data-access/menus.service';
@Component({
  selector: 'home-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes: Dish[] = [];
  constructor(private menu: MenusService) {}
  ngOnInit(): void {
    const test = 'HOla Mundo';
    console.log(test);
  }

  getDishes(
    type: string,
    count: number,
    taste: string,
    inStock: boolean
  ): string {
    let selection = '';

    const dish = { name: 'ceviche' };

    console.log(dish);

    if (type == 'vegan' && count > 2 && taste != 'spicy') {
      selection = `${count} ${type} dishes, no spicy`;
    }

    // if(inStock){
    //  //
    // }

    this.validate(inStock);

    return selection;
  }

  validate(inStock: boolean) {
    if (inStock) {
      console.log(inStock);
    }
  }

  showMenu() {
    const dishes = this.menu.availableDishes();
    if (dishes.length > 0) {
      this.dishes = dishes;
    }
  }
}
