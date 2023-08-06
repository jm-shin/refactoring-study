function printBanner() {
    console.log("***********");
    console.log("**고객채무***");
    console.log("***********");
}

function printDetails(invoice, outstanding) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printOwing(invoice) {
    let outstanding = 0;

    printBanner();

    // 미해결 채무를 계산한다
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }

    // 마감일을 기혹한다.
    recordDueDate(invoice);

    // 세부사항을 출력한다.
    printDetails(invoice, outstanding);
}