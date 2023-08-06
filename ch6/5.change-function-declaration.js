/**
 * 함수 선언 바꾸기
 *
 * 간단한 절차
 * 1. 매개변수를 제거하려거든 먼저 함수 본문에서 제거 대상 매개변수를 참조하는 곳이 없는지 확인한다.
 * 2. 메서드 선언을 원하는 형태로 바꾼다.
 * 3. 기존 메서드 선언을 참조하는 부분을 모두 찾아서 바뀐 형태로 수정한다.
 * 4. 테스트 한다.
 *
 * 마이그레이션 절차
 * 1. 이어지는 추출 단계를 수월하게 만들어야 한다면 함수의 본문을 적당히 리팩터링 한다.
 * 2. 함수 본문을 새로운 함수로 추출한다. 새로 만들 함수 이름이 기존 함수와 같다면 일단 검색하기 쉬운 이름을 임시로 붙여둔다.
 * 3. 추출한 함수에 매개변수를 추가해야 한다면 "간단한 절차"를 따라 추가한다.
 * 4. 테스트한다.
 * 5. 기존 함수를 인라인 한다.
 * 6. 이름을 임시로 붙여뒀다면 함수 선언 바꾸기를 한번 더 적용해서 원래 이름으로 되돌린다.
 * 7. 테스트한다.
 */

// 예시: 간단한 절차
function circum(radius) {
    return 2 * Math.PI * radius;
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}

// 예시: 마이그레이션 절차
function circum2(radius) {
    return circumference2(radius);
}

function circumference2(radius) {
    return 2 * Math.PI * radius;
}

// 예시: 매개변수 추가하기
class Book {
    addReservation(customer) {
        this.zz_addReservation.push(customer);
    }

    zz_addReservation(customer, isPriority) {
        assert(isPriority === true || isPriority === false);
        this._reservation.push(customer);
    }
}

// 예시: 매개변수를 속성으로 바꾸기
function inNewEngland(aCustomer) {
    return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}

const newEnglanders = someCustomer.filter(c => inNewEngland(c));

function inNewEngland2(aCustomer) {
    const stateCode = aCustomer.address.state;
    return xxNEWinNEWEngland(stateCode);
}

function xxNEWinNEWEngland(stateCode) {
    return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

function inNewEngland3(aCustomer) {
    return xxNEWinNEWEngland(aCustomer.address.state);
}

const newEnglanders2 = someCustomer.filter(c => inNewEngland3(c));