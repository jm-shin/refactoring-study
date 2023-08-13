/**
 * 여러 함수를 변환 함수로 묶기
 *
 * 1. 변환할 레코드를 입력받아서 값을 그대로 반환하는 변환 함수를 만든다.
 *      -> 깊은 복사해야하며, 원본값이 유지되는지 테스트코드를 작성하는 것이 좋음.
 * 2. 묶을 함수 중 함수 하나를 골라서 본문 코드를 변환 함수로 옮기고, 처리 결과를 레코드에 새 필드로 기록한다. 그런 다음 클라이언트 코드가 이 필드를 사용하도록 수정.
 * 3. 테스트 한다.
 * 4. 나머지 관련 함수도 위 과정에 따라 처리한다.
 */
import _ from "lodash";

const reading = {
    customer: 'ivan',
    quantity: 10,
    month: 5,
    year: 2023,
}

// client-1
const aReading = acquireReading();
const baseChange = baseRate(aReading.month, aReading.year) * aReading.quantity;

// client-2
const aReading2 = acquireReading();
const base = (baseRate(aReading2.month, aReading2.year) * aReading2.quantity);
const taxableChange = Math.max(0, base - taxThreshould(aReading2.year));

// client-3
const aReading3 = acquireReading();
const basicChangeAmount = calculateBaseChange(aReading3);

function calculateBaseChange (aReading3) {
    return baseRate(aReading3.month, aReading3.year) * aReading3.quantity;
}

// solution
function enrichReading(original) {
    const result = _.cloneDeep(original);
    result.baseChange = calculateBaseChange(result);
    result.taxableChange = Math.max(0, result.baseChange - taxThreshould(result.year));
    return result;
}

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableChange = aReading.taxableChange;