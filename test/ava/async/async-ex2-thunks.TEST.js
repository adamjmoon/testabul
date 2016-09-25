"use strict";
import test from 'ava';
import Context from '../../../src/async/ex2-thunks/ex2-fixed';

test.cb("Output array should have files in correct order", t => {
    let ctx = new Context();
    let th = ctx.start();
    th((output) =>{
        t.deepEqual(output[0],"The first text");
        t.deepEqual(output[1],"The second text");
        t.deepEqual(output[2],"The third text");
        t.deepEqual(output[3],"Complete!");
        t.end();
    });
});
