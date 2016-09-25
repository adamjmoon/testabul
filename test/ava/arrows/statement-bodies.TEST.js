import test from 'ava';

test("Demonstrate arrow functions in Statement bodies",t => {

    var nums = [5,10,15,19];
    var fives = [];
    // Statement bodies
    nums.forEach(v => {
        if (v % 5 === 0)
            fives.push(v);
    });

    t.deepEqual(fives,[5,10,15]);

});
