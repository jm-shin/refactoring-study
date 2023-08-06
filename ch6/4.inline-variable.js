/**
 * 변수 인라인하기
 * 1. 대입문의 우변(표현식)에서 부작용(side-effect)이 없는지 확인
 * 2. 변수가 불변으로 선언되지 않았다면 불변으로 변경 후 테스트
 * 3. 이 변수를 가장 처음 사용하는 코드를 찾아서 대입문 우변의 코드로 변경
 * 4. 테스트한다.
 * 5. 변수를 사용하는 부분을 모두 교체할 때까지 이 과정을 계속 반복
 * 6. 변수 선언문과 대입문을 지운다
 * 7. 테스트한다.
 */
function before(anOrder) {
    let basePrice = anOrder.basePrice;
    return (basePrice > 100);
}

function after(anOrder) {
    return anOrder.basePrice > 1000;
}