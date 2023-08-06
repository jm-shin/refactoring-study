/**
 * 변수 추출하기
 * 1. 추출하려는 표현식에 부작용은 없는 지 확인한다.
 * 2. 불변 변수를 하나 선언하고 이름을 붙일 표현식의 복제본을 대입한다.
 * 3. 원본 표현식을 새로 만든 변수로 교체한다.
 * 4. 테스트한다.
 * 5. 표현식을 여러 곳에서 사용한다면 각각을 새로만든 변수로 교체한다. 하나 교체할 때마다 테스트를 진행한다.
 */
// case-1
function price(order) {
    // 가격(price) = 기본 가격 - 수량 할인 + 배송비
    return order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100);
}

module.exports = price;