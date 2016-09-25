"use strict";
import test from 'ava';
import Context from '../../../src/async/ex5-rx-observable-sequence/ex5-fixed';


test("Output array should have files in correct order", t => {
    let ctx = new Context();
    return new Promise((resolve) => {
        ctx.start()
        .subscribe((output) => {
            console.log(output);
            t.deepEqual(output[0], "The first text");
            t.deepEqual(output[1], "The second text");
            t.deepEqual(output[2], "The third text");
            t.deepEqual(output[3], "Complete!");

            resolve();
        });
    });
});
