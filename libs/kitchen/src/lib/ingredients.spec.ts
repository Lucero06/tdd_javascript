import { dishMock } from './__mocks__/dishes.mocks';
import { verify } from './ingredients';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const utils = require('./ingredients');

describe('ingredients', () => {
  it('should get valid dish ', () => {
    const expectedVerification = {
      missedIngredients: ['limon', 'cebolla'],
      valid: false
    };
    expect(verify(dishMock)).toEqual(expectedVerification);
  });

  it('should get a valid dish', () => {
    const originalIngredients = utils.ingredients;
    utils.ingredients = [
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
        inStock: true
      },
      {
        name: 'cebolla',
        dish: {
          name: 'ceviche'
        },
        inStock: true
      },
      {
        name: 'tortillas',
        dish: { name: 'tacos' },
        inStock: true
      }
    ];

    const expectedVerification = {
      missedIngredients: [],
      valid: true
    };

    expect(verify(dishMock)).toEqual(expectedVerification);
    utils.ingredients; //?
    utils.ingredients = originalIngredients;
  });
});
