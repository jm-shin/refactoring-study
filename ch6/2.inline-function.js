/**
 * 함수 인라인
 * 1. 다형 메서드인지 확인. 서브클래스에서 오버라이드하는 메서드는 인라인 해서는 안된다.
 * 2. 인라인 함수를 호출하는 곳을 모두 찾는다.
 * 3. 각 호출문을 함수 본문으로 교체한다.
 * 4. 하나씩 교체할 때마다 테스트한다.
 * 5. 원래 함수(함수 정의)를 삭제한다.
 */
// case-1
function rating(aDriver) {
    return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

function moreThanFiveLateDeliveries(aDriver) {
    return aDriver.numberOfLateDeliveries > 5;
}

// case-2
function reportLines(aCustomer) {
    const lines = [];
    lines.push(['name', aCustomer.name]);
    lines.push(['location', aCustomer.location]);
    return lines;
}

function gatherCustomerData(out, aCustomer) {
    out.push(['name', aCustomer.name]);
    out.push(['location', aCustomer.location]);
}