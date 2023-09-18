/**
 * 반복문을 파이프라인으로 바꾸기
 * 1. 반복문에서 사용하는 컬렉션을 가리키는 변수를 하나 만든다.
 * 2. 반복문의 첫 줄부터 시작해서, 각각의 단위 행위를 적절한 컬렉션 파이프라인 연산으로 대체한다.
 * 이때 컬렉션 파이프라인 연산은 (1)에서 만든 반복문 컬렉션 변수에서 시작하여, 이전 연산의 결과를 기초로 연쇄적으로 수행된다.
 * 3. 하나를 대체할 때마다 테스트한다.
 * 4. 반복문의 모든 동작을 대체했다면 반복문 자체를 지운다.
 */

function acquireData(input) {
    const lines = input.split('\n');
    let firstLine = true;
    const result = [];
    for (const line of lines) {
        if (firstLine) {
            firstLine = false;
            continue;
        }
        if (lines.trim() === '') continue;
        const record = line.split(',');
        if (record[1].trim() === 'India') {
            result.push({city: record[0].trim(), phone: record[2].trim()});
        }
    }
    return result;
}

function refactor_acquireData(input) {
    const lines = input.split('\n'); // lines도 인라인할까 생각했지만, 그대로 두는 편인 코드가 수행하는 일을 더 잘 설명해준다고 판단.
    const result = lines
        .slice(1)
        .filter(line => line.trim() !== '')
        .map(line => line.split(','))
        .filter(record => record[1].trim() === 'India')
        .map(record => ({city: record[0].trim(), phone: record[2].trim()}))
    ;

    return result;
}
