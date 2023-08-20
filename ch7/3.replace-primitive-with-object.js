/**
 * 기본형을 객체로 바꾸기
 * 1. 아직 변수를 캡슐화하지 않았다면 캡슐화한다.
 * 2. 단순한 값 클래스를 만든다. 생성자는 기존 값을 인수로 받아서 저장하고, 이 값을 반환하는 게터를 추가한다.
 * 3. 정적 검사를 수행한다.
 * 4. 값 클래스의 인스턴스를 새로 만들어서 필드에 저장하도록 세터를 수정한다. 이미 있다면 필드의 타입을 적절히 변경한다.
 * 5. 새로 만든 클래스의 게터를 호출한 결과를 반환하도록 게터를 수정한다.
 * 6. 테스트한다.
 * 7. 함수 이름을 바꾸면 원본 접근자의 동작을 더 잘 드러낼 수 있는지 검토한다.
 */

class Order {
    constructor(data) {
        this.priority = data.priority
    }
}

const highPriorityCount = orders.filter(o => 'high' === o.priority || 'rush' === o.priority).length;

// (1) 변수를 캡슐화

class Order {
    constructor(data) {
        this._priority = data.priority
    }
    get priority() { return this._priority; }
    set priority(aString) { this._priority = aString; }
}

// (2) 속성을 표현하는 값 클래스 Priority를 만든다.
class Priority {
    constructor(value) {
        this._value = value;
    }
    toString() { return this._value; }
}

// (4),(5) Priority 클래스를 사용하도록 접근자를 수정
class Order {
    constructor(data) {
        this._priority = data.priority
    }
    get priority() { return this._priority.toString(); }
    set priority(aString) { this._priority = new Priority(aString); }
}

// (7) Order 게터가 반환하는 값이 우선순위 자체가 아니라 우선순위를 표현하는 문자열이기에 함수이름을 변경해준다.
class Order {
    constructor(data) {
        this._priority = data.priority
    }
    get priorityString() { return this._priority.toString(); }
    set priority(aString) { this._priority = new Priority(aString); }
}

const highPriorityCount = orders.filter(o => 'high' === o.priorityString || 'rush' === o.priorityString).length; // 클라이언트