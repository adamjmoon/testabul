"use strict";
import test from 'ava';
import Context from '../../../src/async/ex4-map-reduce-promises/ex4-fixed';

test("Output array should have files in correct order", t => {
    let ctx = new Context();
    return Promise.resolve(
        ctx.start([],["file1","file2","file3","file4"])
        .then((output) => {
            t.same(output[0], "The first text");
            t.same(output[1], "The second text");
            t.same(output[2], "The third text");
            t.same(output[3], "The fourth text");
            t.same(output[4], "Complete!");
        })
    );
});
