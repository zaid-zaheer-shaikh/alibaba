"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
function logMethod(target, propertyName, propertyDesciptor) {
    // target === Employee.prototype
    // propertyName === "greet"
    // propertyDesciptor === Object.getOwnPropertyDescriptor(Employee.prototype, "greet")
    var method = propertyDesciptor.value;
    propertyDesciptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // convert list of greet arguments to string
        var params = args.map(function (a) { return JSON.stringify(a); }).join();
        // invoke greet() and get its return value
        var result = method.apply(this, args);
        // convert result to string
        var r = JSON.stringify(result);
        // display in console the function call detail
        // return the result of invoking the method
        return result;
    };
    return propertyDesciptor;
}
exports.logMethod = logMethod;
;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.greet = function (message) {
        return this.firstName;
    };
    __decorate([
        logMethod
    ], Employee.prototype, "greet");
    return Employee;
}());
var emp = new Employee('Mohan Ram', 'Ratnakumar');
emp.greet('hello');
