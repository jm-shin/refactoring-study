/**
 * 변수 캡슐화하기
 * 1. 변수로의 접근과 갱신을 전담하는 캡슐화 함수들을 만든다.
 * 2. 정적 검사를 수행한다.
 * 3. 변수를 직접 참조하던 부분을 모두 적절한 캡슐화 함수 호출로 바꾼다. 하나씩 바꿀때마다 테스트한다.
 * 4. 변수의 접근 범위를 제한한다. (변수 이름을 바꿔서 테스트해보면 해당 변수를 참고하는 곳을 쉽게 찾아낼수 있다.)
 * 5. 테스트한다.
 * 6. 변수 값이 레코드라면 레코드 캡슐화하기를 적용할지 고려.
 */

let defaultOwner = { firstName: '마틴', lastName: '파울러' };

// before: spaceship.owner = defaultOwner;
spaceship.owner = getDefaultOwner();

// before: defaultOwner = { firstName: '레베카', lastName: '파슨스' };
defaultOwner = setDefaultOwner({ firstName: '레베카', lastName: '파슨스' });

// 캡슐화를 위해 함수 정의
function getDefaultOwner() { return defaultOwner }
function setDefaultOwner(arg) { defaultOwner = arg; }

/**
 * 값 캡슐화하기
 */
let ownerData = { firstName: '켄트', lastName: '백' };
export function defaultOwner2() { return new Person(ownerData) }
export function setDefaultOwner2(arg) { ownerData = arg; }

class Person {
    constructor(data) {
        this._lastName = data.lastName;
        this._firstName = data.firstName;
    }
    get lastName() { return this._lastName };
    get firstName() { return this._firstName };
}