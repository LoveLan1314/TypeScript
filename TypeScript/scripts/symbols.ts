namespace Symbols {
    let sym1 = Symbol();

    let sym2 = Symbol("key");

    let sym3 = Symbol("key");

    sym2 === sym3;  // false, symbols是唯一的
    
}