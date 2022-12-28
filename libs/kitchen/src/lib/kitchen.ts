// import { create } from 'domain';
import { verify } from './ingredients';

export function kitchen(): string {
  return 'kitchen';
}

export type Taste = 'spicy' | 'sweet' | 'sour';

export interface Country {
  name: string;
  language: string;
}

export interface Dish {
  taste?: Taste;
  name: string;
  country?: Country;
  available?: boolean;
}

const dish: Dish = {
  taste: 'spicy',
  name: 'ceviche',
  country: {
    name: 'Perú',
    language: 'Español'
  }
};

export type SweetType = 'no-carbs' | 'low-carbs' | 'high-carbs';

export interface Dessert {
  type: SweetType;
  name: string;
}

const dessert: Dessert = {
  type: 'low-carbs',
  name: 'Picarones'
};

export type OrderKind = Dish | Dessert;

function createOrder<OrderKind>(order: OrderKind): OrderKind {
  //...
  return order;
}

createOrder<Dessert>(dessert);
createOrder<Dish>(dish);

export interface Ingredient {
  name: string;
  dish: Dish;
  inStock: boolean;
}

export function validateDish(dish: Dish): boolean {
  const ingredientsInStock = verify(dish).valid;
  // all other actions
  return ingredientsInStock ? true : false;
}
