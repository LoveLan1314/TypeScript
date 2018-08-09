var Symbols;
(function (Symbols) {
    var sym1 = Symbol();
    var sym2 = Symbol("key");
    var sym3 = Symbol("key");
    sym2 === sym3; // false, symbols是唯一的
})(Symbols || (Symbols = {}));
//# sourceMappingURL=symbols.js.map