"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function () {
    var _this2 = this;

    this.bobObjOld = {
        _name: "Bob",
        _friends: ["Bill"],
        printFriends: function printFriends() {
            var knows = "";
            this._friends.forEach(function () {
                knows += this._name + " knows " + f + " ";
            });
            return knows.trim();
        }
    };

    // Lexical this
    this.bobObjNew = {
        _name: "Bob",
        _friends: ["Bill"],
        printFriends: function printFriends() {
            var _this = this;

            var knows = "";
            this._friends.forEach(function (f) {
                return knows += _this._name + " knows " + f + " ";
            });
            return knows.trim();
        }
    };

    this.BobFuncOld = function () {
        this._name = "Bob";
        this._friends = ["Bill"];
        this.printFriends = function () {
            var knows = "";
            this._friends.forEach(function (f) {
                knows += this._name + " knows " + f + " ";
            });
            return knows.trim();
        };
    };

    this.BobFuncNew = function () {
        _this2._name = "Bob";
        _this2._friends = ["Bill"];
        _this2.printFriends = function () {
            var _this3 = this;

            var knows = "";
            this._friends.forEach(function (f) {
                return knows += _this3._name + " knows " + f + " ";
            });
            return knows.trim();
        };
    };
};

;
module.exports = exports["default"];