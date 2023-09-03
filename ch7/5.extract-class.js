/**
 * 클래스 추출하기
 *
 * 1. 클래스의 역할을 분리할 방법을 정한다.
 * 2. 분리될 역학을 담당할 클래스를 새로 만든다.
 * 3. 원래 클래스의 생성자에서 새로운 클래스의 인스턴스를 생성하여 필드에 저장해둔다.
 * 4. 분리될 역할에 필요한 필드들을 새 클래스로 옮긴다. 하나씩 옮길 때마다 테스트한다.
 * 5. 매서드들도 새 클래스로 옮긴다. 이때 저수준 메서드. 즉 다른 메서드를 호출하기보단 호출을 당하는 일이 많은 메서드부터 옮긴다.
 * 하나씩 옮길 때 마다 테스트한다.
 * 6. 양쪽 클래스의 인터페이스를 살펴보면서 불필요한 메서드를 제거하고, 이름도 새로운 환경에 맞게 바꾼다.
 * 7. 새 클래스를 외부로 노출할지 정한다. 노출하려거든 새 클래스에 참조를 값으로 바꾸기를 적용할 지 고민해본다.
 */
class Person {
    get name() {return this._name;}
    set name(arg) {this._name = arg;}
    get telephoneNumber() { return `(${this.officeAreaCode}) ${this.officeNumber}`;}
    get officeAreaCode() { return this._officeAreaCode;}
    set officeAreaCode(arg) { this._officeAreaCode = arg;}
    get officeNumber() { return this._officeNumber; }
    set officeNumber(arg) { this._officeNumber = arg; }
}
