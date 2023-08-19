/**
 * 레코드 캡슐화하기
 *
 * 1. 레코드를 담은 변수를 캡슐화 한다.
 * 2. 레코드를 감싼 단순한 클래스로 해당 변수의 내용을 교체한다.
 * 이 클래스에 원본 레코드를 반환하는 접근자도 정의하고, 변수를 캡슐화하는 함수들이 이 접근자를 사용하도록 수정한다.
 * 3. 테스트한다.
 * 4. 원본 레코드 대신 새로 정의한 클래스 타입의 객체를 반환하는 함수들을 새로 만든다.
 * 5. 레코드를 반환하는 예전 함수를 사용하는 코드 (4)에서 만든 새 함수를 사용하도록 바꾼다. 필드에
 * 접근할 때는 객체의 접근자를 사용한다. 적절한 접근자가 없으면 테스트한다. 한 부분을 바꿀 때마다 테스트한다.
 * 6. 클래스에서 원본 데이터를 반환하는 접근자와 (1) 원본 레코드를 반환하는 함수를 제거한다.
 * 7. 테스트한다.
 * 8. 레코드의 필드도 데이터 구조인 중첩 구조라면 레코드 캡슐화하기와 컬렉션 캡슐화하기를 재귀적으로 적용한다.
 */

const organization = {name: '애크미 구스베리', country: 'GB'};
let result = '';
// let result += `<h1>${organization.name}</h1>`

// (1) 변수 캡슐화하기
function getRawDataOfOrganization() {
    return organization;
}
result += `<h1>${getRawDataOfOrganization().name}</h1>`
getRawDataOfOrganization().name = 'newName';

// (2) 레코드를 클래스로
// (3) 새 클래스의 인스턴스를 반환하는 함수를 새로 만듬.
class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }
    get name() { return this._name; }
    set name(aString) { this._name = aString; }
    get country() { return this._country; }
    set country(countryCode) { this._country = countryCode; }
}

const organization2 = new Organization({ name: '이름', country: '국가코드'});
