import { AddList } from './MyMath.js'

describe("AddList", () => {

  test('Adds a list of numbers together', () => {
    let numElem = 1000;
    let input = [];
    let result = 0;
    var elem = 0;
    for(var j = 0; j < 10; j++) {
      for(var i = 0; i < numElem; i++){
        elem = Math.random()*1000;
        result += elem;
        input.push(elem);
      }
      expect(AddList(input)).toBe(result);
    }
  })
  test('Test if empty array returns undefined', () => {
    let input = [];
    expect(AddList(input)).toBeUndefined();
  })
  test('Tests if element array returns undefined', () => {
    let input = [undefined, 0, 2, 3];
    expect(AddList(input)).toBeUndefined();
  })
  test('Tests if non-array returns undefined', () => {
    let input = 100;
    expect(AddList(input)).toBeUndefined();
  })


})
 


// ICE 

// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
