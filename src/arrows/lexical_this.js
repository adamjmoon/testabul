// Lexical this
export default {

    bobObjOld : {
        _name: "Bob",
        _friends: ["Bill"],
        printFriends() {
            var knows = "";
            this._friends.forEach(function () {
                knows += this._name + " knows " + f + " "
            });
            return knows.trim();
        }
    },

    bobObjNew : {
        _name: "Bob",
        _friends: ["Bill"],
        printFriends() {
            var knows = "";
            this._friends.forEach(f =>
                knows += this._name + " knows " + f + " "
            );
            return knows.trim();
        }
    },

    BobFuncOld : function () {
        this._name = "Bob";
        this._friends = ["Bill"];
        this.printFriends = function () {
            var knows = "";
            this._friends.forEach(function (f) {
                knows += this._name + " knows " + f + " "
            });
            return knows.trim();
        };
    },

    BobFuncNew : function () {
        this._name = "Bob";
        this._friends = ["Bill"];
        this.printFriends = function () {
            var knows = "";
            this._friends.forEach(f =>
                knows += this._name + " knows " + f + " "
            );
            return knows.trim();
        };
    }
};