/**
 * 여러 함수를 클래스로 묶기
 *
 * 1. 함수들이 공유하는 공통 데이터 레코드를 캡슐화 한다.
 * 2. 공통 레코드를 사용하는 함수 각각을 새 클래스로 옮긴다.(함수 옮기기)
 * 3. 데이터를 조작하는 로직들은 함수로 추출해서 새 클래스로 옮긴다.
 */
class Reading {
    constructor(data) {
        this._customer = data.custom;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }
    get customer() { return this._customer }
    get quantity() { return this._quantity }
    get month() { return this._month }
    get year() { return this._year }

    get baseChange() {
        return baseRate(this.month, this.year) * this.quantity;
    }
    get taxableChange() {
        return Math.max(0, this.baseChange - taxThreshold(this.year));
    }
}

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChangeAmount = aReading.baseChange(aReading);

// case-1
const rawReading1 = acquireReading();
const aReading1 = new Reading(rawReading1);
const baseChage1 = aReading1.baseChange;

// case-2
const rawReading2 = acquireReading();
const aReading2 = new Reading(rawReading2);
const taxbleChange = Math.max(0, aReading2.baseChange - taxThreshold(aReading2.year));

// 함수 추출
function taxableChangeFn (aReading) {
    return Math.max(0, aReading2.baseChange - taxThreshold(aReading2.year));
}

// case-3
const rawReading3 = acquireReading();
const aReading3 = new Reading(rawReading3);
// const taxableChange3 = taxableChangeFn(aReading3);
const taxableChange3 = aReading3.taxableChange;