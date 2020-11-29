function add (n1: number, n2: number) {
  return n1 + n2;
}

function printResult (num: number): void {
  console.log('Result: ' + num);
}
// void는 이 함수는 아무것도 return 하지 않는다는 의미.

function addAndHandle (n1: number, n2: number, n3: (num: number, num_: number) => void) {
  const result = n1 + n2;
  n3(result, n2);
}

printResult(add(5, 12));

const values: (a: number, b: number) => number = add;

console.log(values(1, 5));

addAndHandle(10, 20, (result, b) => {
  console.log(result, b);
});