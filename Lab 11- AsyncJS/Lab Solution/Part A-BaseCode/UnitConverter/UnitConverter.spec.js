import {expect} from "chai";
import unitConverter from './UnitConverter.js'

describe('Test cases for the UnitConverter class', () => {
    describe('Weight testing cases', () => {
        it('1 kgToOunce should be 35.274', () => {
            expect(unitConverter.kgToOunce(1)).equal(35.274)
        })

        it('2 kgToPound should be 4.4092 ', () => {
            expect(unitConverter.kgToPound(2)).equal(4.4092)
        });
    })

    describe('Distance testing cases', () => {
        it('1 meterToInch should be 39.3701 ', function () {
            expect(unitConverter.meterToInch(1)).equal(39.3701)
        });

        it('2 meterToFoot should be 6.5617 ', function () {
            expect(unitConverter.meterToFoot(2)).equal(6.5617)
        });
    })
})