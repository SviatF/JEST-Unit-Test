const { test, expect } = require('@jest/globals');
const MassN = require('./226');


test('The number of digits in the number',()=>{
        mass=[1,2,5,10];
        expect(MassN(10,50)).toBe(mass);
})