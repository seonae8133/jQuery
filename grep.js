let members = [];

members.push({
    name: "hong",
    point: 80
});

members.push({
    name: "hwang",
    point: 100
});

members.push({
    name: "park",
    point: 95
});

members.push({
    name: "choi",
    point: 50
});

members.push({
    name: "ryu",
    point: 30
});

$(members).each((a, b) => {
    console.log(a, b);
});

console.log("-----------------------------");

let grepMem = $.grep(members, (a, b) => {
    console.log(a, b);
    return (a.point > 50 ? a : null);
});
console.log("-----------------------------");
console.log(grepMem);


console.log("-----------------------------");
console.clear();

let sum = $(grepMem).map((a, b) => { //a : 인덱스값 b:element 요소
    return b.ponit ;
}).get();
console.log("전체 point 값 : " + sum);
