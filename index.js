function receivesAFunction(name) {
    return name();
}

function returnsANamedFunction() {
    return function jon() { }
}

function returnsAnAnonymousFunction() {
    return function () { }
}