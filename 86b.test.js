const { test, expect } = require('@jest/globals');
const sumN = require('./86b');



test('The number of digits in the number',()=>{
    expect(sumN(2022)).toBe(6);
})