let user = 3;
let menu = 2;

switch (user) {
  case 1:
  case 4:
    console.log("물건사기")
    break;
  case 2:
    console.log("반품하기")
    break;
  case 3:
    console.log("교환하기")
}

let answer = menu >= 3 ? "범위 안에 있는 숫자" : "범위 밖에 있는 숫자"
console.log(answer)