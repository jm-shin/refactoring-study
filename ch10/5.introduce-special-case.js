class Site {
    constructor(data) {
        this._customer = data.customer;
    }
    get customer() {
        return (this._customer === '미확인 고객') ? new UnknowCustomer() : this._customer;
    }
}

function isUnknown(arg) {
    if (!((arg instanceof Customer) || (arg === '미확인 고객'))) {
        throw new Error(`잘못된 값과 비교: <${arg}>`);
    }
    return (arg === '미확인 고객');
}
