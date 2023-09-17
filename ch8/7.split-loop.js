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

function totalSalary() {
    let totalSalary = 0;
    for (const p of people) {
        totalSalary += p.salary;
    }
    return totalSalary;
}

function youngestAge() {
    let youngest = people[0]? people[0].age : Infinity;
    for (const p of people) {
        if (p.age < youngest) youngest = p.age;
    }
    return youngest;
}

// 파이프 라인으로 변경
function totalSalary() {
   return people.reduce((total, p) => total + p.salary, 0);
}

// 알고리즘 교체하기
function youngestAge() {
    return Math.min(...people.map(p => p.age));
}
