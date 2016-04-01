"use strict";
import test from 'ava';
import Context from '../../dist/arrows/lexical_this';


test("Demonstrate arrow functions and lexical this", t => {
    var cxt = new Context();
    cxt.bobObjOld._friends.push("Sam");

    t.throws(cxt.bobObjOld.printFriends,TypeError);
})

