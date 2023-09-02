/**
 * 임시 변수를 질의 함수로 바꾸기
 *
 * 1. 변수가 사용되기 전에 값이 확실히 결정되는지, 변수를 사용할 때마다 계산 로직이 매번 다른 결과를 내지는 않는지 확인.
 * 2. 읽기전용으로 만들 수 있는 변수는 읽기전용으로 만든다.
 * 3. 테스트한다.
 * 4. 변수 대입문을 함수로 추출한다.
 * 5. 테스트한다.
 * 6. 변수 인라인하기로 임시 변수를 제거한다.
 */

class Order_before {
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }
    get price() {
        const basePrice = this._quantity * this._item.price;
        let discountFactor = 0.98;

        if (basePrice > 1000) {
            discountFactor -= 0.03;
            return basePrice * discountFactor;
        }
    }
}

class Order {
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }

    get price() {
        return this.basePrice * this.discountFactor;
    }

    get basePrice() {
        return this._quantity * this._item.price;
    }

    get discountFactor() {
        let discountFactor = 0.98;
        if (this.basePrice > 1000) {
            discountFactor -= 0.03;
        }
        return discountFactor;
    }
}
