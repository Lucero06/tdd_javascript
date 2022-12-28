import { Dish, Ingredient } from '../kitchen';

export const dishMock: Dish = {
  taste: 'spicy',
  name: 'ceviche',
  country: {
    name: 'Mexico',
    language: 'Español'
  },
  available: true
};

export const ingredientsMock: Ingredient[] = [
  {
    name: 'pescado',
    dish: {
      name: 'ceviche'
    },
    inStock: true
  },
  {
    name: 'limon',
    dish: {
      name: 'ceviche'
    },
    inStock: false
  },
  {
    name: 'cebolla',
    dish: {
      name: 'ceviche'
    },
    inStock: false
  },
  {
    name: 'tortillas',
    dish: { name: 'tacos' },
    inStock: true
  }
];
