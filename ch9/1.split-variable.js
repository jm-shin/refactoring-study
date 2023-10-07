/**
 * 9.1 변수 쪼개기
 *
 * 1. 변수를 선언한 곳과 값을 처음 대입하는 곳에서 변수 이름을 바꾼다.
 * 2. 가능하면 불변으로 선언.
 * 3. 이 변수에 두 번째로 값을 대입하는 곳 앞까지의 모든 참조(이 변수가 쓰인 곳)를 새로운 변수 이름으로 바꾼다.
 * 4. 두 번째 대입 시 변수를 원래 이름으로 다시 선언한다.
 * 5. 테스트 한다.
 * 6. 반복한다. 매 반복에서 새로운 이름으로 선언하고 다음 번 대입 때까지의 모든 참조를 새 변수명으로 바꾼다. 이 과정을 마지막 대입까지 반복한다.
 */

function distanceTravelled(scenario, time) {
    let result;
    let acc = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
    let primaryTime = Math.min(time, scenario.delay);
    result = 0.5 * acc * primaryTime; // 전파된 거리
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) {
        let primaryVelocity = acc * scenario.delay;
        acc = (scenario.primaryForce  + scenario.secondaryFore)  / scenario.mass;
        result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * secondaryTime;
    }
    return result;
}
