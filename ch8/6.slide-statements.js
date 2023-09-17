/**
 * 문장 슬라이드하기
 * 1. 코드 조각을 이동할 목표 위치를 찾는다. 코드 조각의 원래 위치와 목표 위치 사이의 코드를 보면서
 * 조각을 모으고 나면 동작이 달라지는 코드가 있는지 확인. 다음과 같은 간섭이 있다면 포기.
 * -> 코드 조각에서 참조하는 요소를 선언하는 문장 앞으로는 이동할 수 없다.
 *
 */

const pricingPlan = retrievePricingPlan();
const order = retreiveOrder();
const baseCharge = pricingPlan.base;
let charge;
const chargePerUnit = pricingPlan.unit;
const units = order.units;
let discount;
charge = baseCharge + units * chargePerUnit;
let discountableUnits = Math.max(units - pricingPlan.discountThreshould, 0);
discount = discountableUnits * pricingPlan.discountFactor;
if (order.isRepeat) discount += 20;
charge = charge - discount;
chargeOrder(charge);
