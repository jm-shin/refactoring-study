/**
 * 9.2 필드 이름 바꾸기
 *
 * 1. 레코드의 유효 범위가 제한적이라면 필드에 접근하는 모든 코드를 수정한 후 테스트. 이후 단계는 필요없다.
 * 2. 레코드가 캡슐화되지 않았다면 우선 레코드를 캡슐화 한다.
 * 3. 캡슐화된 객체 안의 private 필드명을 변경하고, 그에 맞게 내부 메서드를 수정한다.
 * 4. 테스트한다.
 * 5. 생성자의 매개변수 중 필드와 이름이 겹치는 게 있다면 함수 선언 바꾸기로 변경한다.
 * 6. 접근자들의 이름도 바꿔준다.
 */
class Organization {
    constructor(data) {
        this._title = data.title;
        this._country = data.country;
    }
    get title() { return this._title; }
    set title(aString) { this._title = aString; }
    get country() { return this._country; }
    set country(aCountryCode) { this._country = aCountryCode; }
}

const organization = new Organization({ title: '제임스딘', country: 'USA' });
