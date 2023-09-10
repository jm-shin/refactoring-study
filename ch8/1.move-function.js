/**
 * 함수 옮기기
 * 1. 선택한 함수가 현재 컨텍스트에서 사용 중인 모든 프로그램 요소를 살펴본다. 이 요소들 중에도 함께 옮겨야 할 게 있는지 고민
 * 2. 선택한 함수가 다형 메서드인지 확인한다.
 * 3. 선택한 함수를 타깃 컨텍스트로 복사한다.(원래의 함수를 소스함수, 복사해서 만든 새로운 함수를 타깃함수) 타깃 함수가 새로운 터전에 잘 자리잡도록 다듬는다.
 * 4. 정적 분석을 수행한다.
 * 5. 소스 컨텍스트에서 타깃 함수를 참조할 방법을 찾아 반영한다.
 * 6. 소스 함수를 타깃 함수의 위임함수가 되도록 수정한다.
 * 7. 테스트한다.
 * 8. 소스 함수를 인라인할지 고민해본다.
 */

// 예시: 중첩 함수를 최상위로 옮기기
function trackSummary(points) {
    const totalTime = calculateTime()
    const pace = totalTime / 60 / totalDistance(points)
    return {
        time: totalTime,
        distance: totalDistance(points),
        pace: pace,
    }
}

function totalDistance(points) {
    let result = 0
    for (let i = 0; i < points.length; i++) {
        result += distance(points[i-1], points[i])
    }
    return result

    function distance(p1, p2) {} // 두 지점의 거리 계산
    function radians(degrees) {} // 라디안 값으로 변환
    function calculateTime()  {} // 총 시간 계산
}
