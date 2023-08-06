const assert = require('assert');
const price = require('../../ch6/3.extract-variable');

// Jest 테스트 코드
describe('price 함수 테스트', () => {
    it('계산1', () => {
        const order = {
            quantity: 300,
            itemPrice: 15
        };
        assert.equal(price(order), 4600); // 300 * 15 = 4500
    });

    it('계산2', () => {
        const order = {
            quantity: 700,
            itemPrice: 25
        };
        assert.equal(price(order),17350); // 700 * 25 - (700 - 500) * 25 * 0.05 = 16525
    });

    it('계산3', () => {
        const order = {
            quantity: 800,
            itemPrice: 30
        };
        assert.equal(price(order),23650); // 800 * 30 - 800 * 30 * 0.1 = 24000
    });
});
