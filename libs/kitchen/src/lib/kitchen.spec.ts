import { kitchen, validateDish } from './kitchen';
import { dishMock } from './__mocks__/dishes.mocks';
import { verifyMock } from './__mocks__/spies.mocks';
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const utils = require('./ingredients');

// import * as utils from './ingredients';
import { verify, ingredients } from './ingredients';

// jest.mock('./ingredients.ts', () => {
//   return {
//     ingredients: [
//       {
//         name: 'limon',
//         dish: {
//           name: 'ceviche'
//         },
//         inStock: false
//       }
//     ],
//     verify: jest.fn()
//   };
// });
jest.mock('./ingredients.ts');

// const verifyMock = verify as jest.MockedFunction<typeof verify>;

describe('kitchen', () => {
  // //MOcking dependency
  // const originalValue = utils.verify;
  // const verifySpy = jest.spyOn(utils, 'verify');
  // let verifySpy = jest.spyOn(utils, 'verify');

  // beforeEach(()=>{});
  afterEach(() => {
    // utils.verify = originalValue;
    // verifySpy.mockReset();
    verifyMock.mockReset();
  });

  it('should work', () => {
    expect(kitchen()).toEqual('kitchen');
  });

  it('should get a valid dish...', () => {
    //mocking dependecy

    //arrange
    const validVerification = {
      missedIngredients: [],
      valid: true
    };

    // utils.verify = () => validVerification;
    // utils.verify = jest.fn(() => validVerification);

    // verifySpy.mockImplementation(() => validVerification);
    // verifySpy.mockReturnValue(validVerification);

    ingredients; //?
    // dishMock; //?
    verifyMock.mockReturnValue(validVerification);

    //act
    const result = validateDish(dishMock);

    //assert
    expect(result).toBe(true);
    // expect(utils.verify).toHaveBeenCalledWith(dishMock);
    expect(verify).toHaveBeenCalledWith(dishMock);
  });

  it('should get an invalid dish...', () => {
    // verifySpy.mockRestore();
    verifyMock.mockRestore();
    //arrange
    const invalidVerification = {
      missedIngredients: ['limon', 'cebolla'],
      valid: false
    };

    // verifySpy = jest.spyOn(utils, 'verify');
    // utils.verify = () => validVerification;
    // utils.verify = jest.fn(() => invalidVerification);
    // verifySpy.mockReturnValue(invalidVerification);
    verifyMock.mockReturnValue(invalidVerification);
    //act
    const result = validateDish(dishMock);
    // console.log(utils.verify.mock);
    // console.log(utils.verify.mock.calls);
    // console.log(utils.verify.mock.results);
    // console.log(verifySpy.mock);
    // console.log(verifySpy.mock.calls);
    // console.log(verifySpy.mock.results);
    console.log(verifyMock.mock);
    console.log(verifyMock.mock.calls);
    console.log(verifyMock.mock.results);
    //assert
    expect(result).toBe(false);

    // expect(utils.verify).toHaveBeenCalledWith(dishMock);
    // expect(verifySpy).toHaveBeenCalledWith(dishMock);
    expect(verifyMock).toHaveBeenCalledWith(dishMock);

    // expect(utils.verify.mock.results[0].value).toEqual(invalidVerification);
    // expect(verifySpy.mock.results[0].value).toEqual(invalidVerification);
    expect(verifyMock.mock.results[0].value).toEqual(invalidVerification);
  });
});
