"use strict";
import test from 'ava';
import ctx from '../../../dist/arrows/lexical_this';

test("bobObjOld this not in scope for printFriends()", t => {
    ctx.bobObjOld._friends.push("Sam");
    t.throws(ctx.bobObjOld.printFriends,TypeError);
});

test("bobOldFuncInst this not in scope for printFriends()", t => {

    var bobOldFuncInstance = new ctx.BobFuncOld();
    bobOldFuncInstance._friends.push("Sam");
    t.throws(bobOldFuncInstance.printFriends,TypeError);
});

test("bobObjOld this not in scope for printFriends()", t => {

    ctx.bobObjNew._friends.push("Sam");
    t.same(ctx.bobObjNew.printFriends(), "Bob knows Bill Bob knows Sam");
});

test("bobOldFuncInst this not in scope for printFriends()", t => {
    var bobNewFuncInstance = new ctx.BobFuncNew();
    bobNewFuncInstance._friends.push("Sam");
    t.same(bobNewFuncInstance.printFriends(), "Bob knows Bill Bob knows Sam");
});

