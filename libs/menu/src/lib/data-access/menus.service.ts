import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from '@yfx-kitchen';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  private dishes: Dish[] = [];
  constructor(private http: HttpClient) {}

  get(): Observable<Dish[]> {
    return this.http.get<Dish[]>('http://idontknowtheurlyet.com/dishes');
  }

  availableDishes(): Dish[] {
    return this.dishes.filter((dish) => dish.available);
  }
}
