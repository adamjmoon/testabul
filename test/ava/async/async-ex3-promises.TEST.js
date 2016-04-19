"use strict";
import test from 'ava';
import Context from '../../../src/async/ex3-promises/ex3-fixed';


test("Output array should have files in correct order", t => {
    let ctx = new Context();
    return Promise.resolve(
        ctx.start()
        .then((output) => {
            t.same(output[0], "The first text");
            t.same(output[1], "The second text");
            t.same(output[2], "The third text");
            t.same(output[3], "Complete!");
        })
    );
});



