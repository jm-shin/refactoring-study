/**
 * 반복문 쪼개기
 * 1. 반복문을 복제해 두 개로 만든다.
 * 2. 반복문이 중복되어 생기는 부수효과(side effect)를 파악해서 제거한다.
 * 3. 테스트한다.
 * 4. 완료되었으면, 각 반복문을 함수로 추출할지 고민해본다.
 */

const people = [
    {
        name: 'youngsoo',
        age: 23,
        salary: 0,
    },
    {
        name: 'hyesoo',
        age: 25,
        salary: 1000,
    },
    {
        name: 'gosu',
        age: 33,
        salary: 3000,
    }
]

let youngest = people[0]? people[0].age : Infinity;
let totalSalary = 0;

for (const p of people) {
    // if (p.age < youngest) youngest = p.age; // 부수효과가 있는 코드는 한쪽만 남기고 제거
    totalSalary += p.salary;
}
// 반복문 복제
for (const p of people) {
    if (p.age < youngest) youngest = p.age;
    // totalSalary += p.salary; // 부수효과가 있는 코드는 한쪽만 남기고 제거
}
