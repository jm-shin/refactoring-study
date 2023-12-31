/**
 * 1. 폭넓게 쓰이는 변수라면 변수 캡슐화하기를 고려한다.
 * 2. 이름을 바꿀 변수를 참조하는 곳을 모두 찾아서, 하나씩 변경한다.
 *    - 다른 코드베이스에서 참조하는 변수는 외부에 공개된 변수이므로 이 리팩토링을 적용할 수 없다.
 *    - 변수 값이 변하지 않는다면 다른 이름으로 복제본을 만들어서 하나씩 점진적으로 변경한다. 하나씩 바꿀때마다 테스트한다.
 * 3. 테스트한다.
 */

// 예시: 변수 캡슐화하기
let result = '';
let tpHd = 'untitled';
result += `<h1>${tpHd}</h1>`;

tpHd = obj['articleTitle'];

// solution
let solutionResult = `<h1>${title()}</h1>`;
let solutionTpHd = 'untitled';

setTitle(obj['articleTitle']);
function title() { return solutionTpHd }
function setTitle(arg) { solutionTpHd = arg; }

// 예시: 상수 이름 바꾸기
// const cpyNm = 'mynameiscode';
const companyName = 'mynameiscode';
const cpyNm = companyName;
