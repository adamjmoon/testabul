"use strict";
import test from 'ava';
import Context from '../../../src/async/ex5-rx-observable-sequence/ex5-fixed';


test("Output array should have files in correct order", t => {
    let ctx = new Context();
    return new Promise((resolve) => {
        ctx.start()
        .subscribe((output) => {
            console.log(output);
            t.same(output[0], "The first text");
            t.same(output[1], "The second text");
            t.same(output[2], "The third text");
            t.same(output[3], "Complete!");


            resolve();
        });
    });
});



