/**
 * 매개변수 객체 만들기
 * 1. 적당한 데이터 구조가 아직 마련되 있지 않다면 새로 만든다.
 * 2. 테스트한다.
 * 3. 함수 선언 바꾸기로 새 데이터 구조를 매개변수로 추가한다.
 * 4. 테스트한다.
 * 5. 함수 호출시 새로운 데이터 구조 인스턴스를 넘기도록 수정한다. 하나씩 수정할 때마다 테스트.
 * 6. 기존 매개변수를 사용하던 코드를 새 데이터 구조의 원소를 사용하도록 바꾼다.
 * 7. 다 바꿨다면 기존 매개변수를 제거하고 테스트를 진행한다.
 */

const station = {
    name: '2호선',
    readings: [
        { temp: 47, time: '2023-08-08 09:10'},
        { temp: 53, time: '2023-08-08 09:20'},
        { temp: 58, time: '2023-08-08 09:30'},
        { temp: 53, time: '2023-08-08 09:40'},
        { temp: 51, time: '2023-08-08 09:50'},
    ],
};

class NumberRange {
    constructor(min, max) {
        this._data = { min, max };
    }
    get min() { return this._data.min; }
    get max() { return this._data.max; }
}

const range = new NumberRange(operationPlan.temperatureFloor, operationPlan.temperatureCeiling);

function readingOutsideRange(station, range) {
    return station.readings
        .filter(r => r.temp < range.min || r.temp > range.max);
}

const alerts = readingOutsideRange(station, range);
