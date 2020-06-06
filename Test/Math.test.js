const assert = require('assert');
const math = require('../Math');

describe('Simple Math Test', () => {
        describe('math.add() Test', () => {
            it('should equal 2', () => {
                const result = math.add(1, 1);
                assert.equal(result,2);
            });
            it('should equal 4', () => {
                const result = math.add(2, 2);
                assert.equal(result,4);
            });
        });

        describe('math.subtract() Test', () => {
            it('should equal 0', () => {
                const result = math.subtract(1, 1);
                assert.equal(result,2);
            });
            it('should equal 4', () => {
                const result = math.subtract(6, 2);
                assert.equal(result,4);
            });
        });
        
        describe('math.multiply() Test', () => {
            it('should equal 3', () => {
                const result = math.multiply(3, 1);
                assert.equal(result, 3);
            });
            it('should equal 10', () => {
                const result = math.multiply(5, 2);
                assert.equal(result, 10);
            });
        });

        describe('math.divide() Test', () => {
            it('should equal 3', ()=> {
                const result = math.divide(9,3);
                assert.equal(result , 3);
            });

            it('should equal undefined', () =>{
                const result = math.divide(9,0);
                assert.equal(result , undefined);
            });
        });

        describe('math.remainder() Test', () => {
            it('should equal 0', ()=> {
                const result = math.remainder(9,3);
                assert.equal(result , 0);
            });

            it('should equal undefined', () =>{
                const result = math.remainder(9,0);
                assert.equal(result , undefined);
            });

            it('should equal 3', () =>{
                const result = math.remainder(9,6);
                assert.equal(result, 3);
            })
        });
    });