
export default function(){

    this.bobObjOld = {
        _name: "Bob",
        _friends: ["Bill"],
        printFriends() {
            var knows = "";
            this._friends.forEach(function () {
                knows += this._name + " knows " + f + " "
            });
            return knows.trim();
        }
    };

// Lexical this
    this.bobObjNew = {
        _name: "Bob",
        _friends: ["Bill"],
        printFriends() {
            var knows = "";
            this._friends.forEach(f =>
                knows += this._name + " knows " + f + " "
            );
            return knows.trim();
        }
    };

    this.BobFuncOld = function () {
        this._name = "Bob";
        this._friends = ["Bill"];
        this.printFriends = function () {
            var knows = "";
            this._friends.forEach(function (f) {
                knows += this._name + " knows " + f + " "
            });
            return knows.trim();
        };
    };

    this.BobFuncNew = () => {
        this._name = "Bob";
        this._friends = ["Bill"];
        this.printFriends = function () {
            var knows = "";
            this._friends.forEach(f =>
                knows += this._name + " knows " + f + " "
            );
            return knows.trim();
        };
    };
};