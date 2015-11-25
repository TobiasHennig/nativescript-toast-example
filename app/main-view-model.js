var observable = require("data/observable");
var Toast = require("nativescript-toast");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
        this.counter = 42;
        this.set("message", this.counter + " taps left");
        Toast.makeText(this.counter + " taps left").show();
    }
    HelloWorldModel.prototype.tapAction = function () {
        this.counter--;
        if (this.counter <= 0) {
            this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
            Toast.makeText("Hoorraaay! You unlocked the NativeScript clicker achievement!").show();
        }
        else {
            this.set("message", this.counter + " taps left");
            Toast.makeText(this.counter + " taps left").show();
        }
    };
    return HelloWorldModel;
})(observable.Observable);
exports.HelloWorldModel = HelloWorldModel;
exports.mainViewModel = new HelloWorldModel();
