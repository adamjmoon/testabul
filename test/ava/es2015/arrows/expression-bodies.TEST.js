import test from 'ava';

test("Demonstrate arrow functions in Expression bodies",t => {

    var evens = [2,4,6,8,10];
    var odds = evens.map(v => v + 1);
    var nums = evens.map((v, i) => v + i);

    t.same(odds,[3,5,7,9,11]);
    t.same(nums,[2,5,8,11,14]);
});
