"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
printOut(newLine);

console.log("v Part 1 v");

const accountType = {
    normal: "Brukskonto",
    saving: "Sparekonto",
    credit: "Kreditkonto",
    pension: "pensionskonto",
};

printOut(`${accountType.normal}, ${accountType.saving}, ${accountType.credit}, ${accountType.pension}`);
printOut(newLine);

printOut("--- Part 2, 3, 4, 5, 6, 7 ----------------------------------------------------------------------------------------------");
printOut(newLine);

class TAccount {

    #type;
    #balanceBrukskonto;
    #balanceSparekonto;
    #balancePensjonskonto;
    #currency;
    #withdrawCount;

    static currencyTypes = {
        NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
        EUR: { value: 0.0985, name: "Euro", denomination: "€" },
        USD: { value: 0.1091, name: "US Dollar", denomination: "$" },
        GBP: { value: 0.0847, name: "Pounds", denomination: "£" },
        INR: { value: 7.8309, name: "Rupee", denomination: "₹" },
        AUD: { value: 0.1581, name: "Aus Dollar", denomination: "A$" },
        PHP: { value: 6.5189, name: "Peso", denomination: "₱" },
        SEK: { value: 1.0580, name: "Svenske Kroner", denomination: "kr" },
        CAD: { value: 0.1435, name: "CAD Dollar", denomination: "C$" },
        THB: { value: 3.3289, name: "Thai baht", denomination: "฿" },
    };

    constructor(initialType, brukskontoBalance, sparekontoBalance, pensjonskontoBalance, withdrawCount) {
        this.#type = initialType;
        this.#balanceBrukskonto = brukskontoBalance || 0;
        this.#balanceSparekonto = sparekontoBalance || 0;
        this.#balancePensjonskonto = pensjonskontoBalance || 0;
        this.#withdrawCount = withdrawCount || 0;
        this.#currency = TAccount.currencyTypes.NOK;
    }

    formatToMaxFourDecimals(num) {
        return num.toFixed(2).replace(/\.?0+$/, '');
    }

    setCurrency(currencyCode) {
        if (!TAccount.currencyTypes[currencyCode]) {
            printOut(`Currency code ${currencyCode} not recognized.`);
            printOut(newLine);
            throw new Error(`Currency code ${currencyCode} not recognized.`);
        }

        const newCurrency = TAccount.currencyTypes[currencyCode];
        this.#currency = newCurrency;
        printOut(`Currency changed to ${currencyCode}. New denomination: ${this.#currency.denomination}`);
        printOut(newLine);
        printOut(this.toString(this.#type));
        printOut(newLine);
    }

    getCurrency() {
        return this.#currency;
    }

    getDenomination() {
        return this.#currency.denomination;
    }

    toString() {
        if (this.#type == "Brukskonto") {
            return `${this.#type}, Balance: ${this.formatToMaxFourDecimals(this.#balanceBrukskonto * this.#currency.value)} ${this.#currency.denomination}`;
        } else if (this.#type == "Sparekonto") {
            return `${this.#type}, Balance: ${this.formatToMaxFourDecimals(this.#balanceSparekonto * this.#currency.value)} ${this.#currency.denomination}`;
        } else if (this.#type == "Pensjonskonto") {
            return `${this.#type}, Balance: ${this.formatToMaxFourDecimals(this.#balancePensjonskonto * this.#currency.value)} ${this.#currency.denomination}`;
        }
    }

    setType(typeA) {
        if (typeA == "Brukskonto" || typeA == "Sparekonto" || typeA == "Pensjonskonto");
        printOut(`Account is changed from ${this.#type} to ${typeA}.`);
        printOut(newLine);
        this.#type = typeA;
    }

    getBalance() {
        return `The balance is ${this.#balanceBrukskonto}`;
    }

    deposit(aAmount, typeA) {
        if (typeA == undefined) {
            typeA = "NOK";
        }

        const typeACurrency = TAccount.currencyTypes[typeA];

        if (typeof typeA !== "undefined" && !(typeA in TAccount.currencyTypes)) {
            printOut(`Could not read currency`);
            printOut(newLine);
            printOut(`${this.#type}, balance: ${this.formatToMaxFourDecimals(this.#balanceSparekonto)}${this.#currency.denomination}`);
            printOut(newLine);
        } else {
            const newCurrency = typeACurrency.value;
            const depositedAmountInNOK = aAmount / newCurrency;

            if (this.#type == "Sparekonto") {
                this.#balanceSparekonto += depositedAmountInNOK;
                printOut(`Deposited ${this.formatToMaxFourDecimals(aAmount)}${typeACurrency.denomination} to ${this.#type}.`);
                printOut(newLine);
                printOut(`New balance is ${this.formatToMaxFourDecimals(this.#balanceSparekonto * this.#currency.value)}${this.#currency.denomination}.`);
                printOut(newLine);
            } else if (this.#type == "Brukskonto") {
                this.#balanceBrukskonto += depositedAmountInNOK;
                printOut(`Deposited ${this.formatToMaxFourDecimals(aAmount)}${typeACurrency.denomination} to ${this.#type}.`);
                printOut(newLine);
                printOut(`New balance is ${this.formatToMaxFourDecimals(this.#balanceBrukskonto / this.#currency.value)}${this.#currency.denomination}.`);
                printOut(newLine);
            }
        }
    }

    withdraw(aAmount, typeA) {
        if (typeA == undefined) {
            typeA = "NOK";
        }

        const typeACurrency = TAccount.currencyTypes[typeA];
        const aAmountToCurrency = this.formatToMaxFourDecimals(aAmount * TAccount.currencyTypes[typeA].value);

        if (typeof typeA !== "undefined" && !(typeA in TAccount.currencyTypes)) {
            printOut(`Could not read currency`);
            printOut(newLine);
            printOut(`${this.#type}, balance: ${this.formatToMaxFourDecimals(this.#balanceSparekonto)}${this.#currency.denomination}`);
            printOut(newLine);
        } else {
            switch (this.#type) {
                case "Brukskonto": {
                    if (aAmountToCurrency > this.#balanceBrukskonto) {
                        printOut(`You can not withdraw an amount greater than your balance`);
                        printOut(newLine);
                        printOut(this.#type);
                        printOut(newLine);
                    } else {
                        this.#balanceBrukskonto -= aAmount / TAccount.currencyTypes[typeA].value;
                        printOut(`Withdrew ${aAmount}${this.#currency.denomination} from ${this.#type}`);
                        printOut(newLine);
                        printOut(`New balance is ${this.formatToMaxFourDecimals(this.#balanceBrukskonto / this.#currency.value)}${this.#currency.denomination}.`);
                        printOut(newLine);
                    }
                    break;
                }
                case "Sparekonto": {
                    if (aAmountToCurrency > this.#balanceSparekonto) {
                        printOut(`You can not withdraw an amount greater than your balance`);
                        printOut(newLine);
                        printOut(this.#type);
                        printOut(newLine);
                    } else {
                        this.#balanceSparekonto -= aAmount / TAccount.currencyTypes[typeA].value;
                        printOut(`Withdrew ${aAmount}${TAccount.currencyTypes[typeA].denomination} from ${this.#type}`);
                        printOut(newLine);
                        printOut(`New balance is ${this.formatToMaxFourDecimals(this.#balanceSparekonto / this.#currency.value)}${this.#currency.denomination}.`);
                        printOut(newLine);
                    }
                    break;
                }
                case "Pensjonskonto": {
                    printOut(`You cannot withdraw from ${this.#type}`);
                    printOut(newLine);
                    break;
                }
            }
        }
    }

    transfer(typeA, typeB, aAmount) {
        switch (typeA + "->" + typeB) {
            case "Brukskonto->Sparekonto": {
                if (aAmount > this.#balanceBrukskonto) {
                    printOut(`You  can not transfer an amount greater than your balance. Your balance is ${this.#balanceBrukskonto}${this.#currency.denomination}.`);
                    printOut(newLine);
                } else {
                    printOut(`Transferring from Brukskonto to Sparekonto.`);
                    printOut(newLine);
                    this.#balanceBrukskonto -= aAmount;
                    this.#balanceSparekonto += aAmount;
                    printOut(`Brukskonto = ${this.#balanceBrukskonto * this.#currency.value}${this.#currency.denomination}.`);
                    printOut(newLine);
                    printOut(`Sparekonto = ${this.#balanceSparekonto * this.#currency.value}${this.#currency.denomination}.`);
                    printOut(newLine);
                }
                break;
            }
            case "Sparekonto->Brukskonto": {
                if (aAmount > this.#balanceSparekonto) {
                    printOut(`You  can not transfer an amount greater than your balance. Your balance is ${this.#balanceSparekonto * this.#currency.value}${this.#currency.denomination}.`);
                    printOut(newLine);
                } else {
                    printOut(`Transferring from Sparekonto to Brukskonto.`);
                    printOut(newLine);
                    this.#balanceBrukskonto += aAmount;
                    this.#balanceSparekonto -= aAmount;
                    printOut(`Brukskonto = ${this.#balanceBrukskonto * this.#currency.value}${this.#currency.denomination}.`);
                    printOut(newLine);
                    printOut(`Sparekonto = ${this.#balanceSparekonto * this.#currency.value}${this.#currency.denomination}.`);
                    printOut(newLine);
                }
                break;
            }
            default: {
                printOut(`You can not transfer from or to your pensjonskonto.`);
                printOut(newLine);
                printOut(`Please select other accounts.`);
                printOut(newLine);
                break;
            }
        }
    }
}

const BankAccount = new TAccount("Brukskonto");

printOut(`myAccount = ${BankAccount}`);
printOut(newLine);

BankAccount.setType("Sparekonto");
BankAccount.deposit(1, "NOK");
BankAccount.deposit(1, "EUR");
BankAccount.deposit(1, "USD");
BankAccount.deposit(1, "GBP");
BankAccount.deposit(1, "INR");
BankAccount.deposit(1, "AUD");
BankAccount.deposit(1, "PHP");
BankAccount.deposit(1, "SEK");
BankAccount.deposit(1, "CAD");
BankAccount.deposit(1, "THB");

BankAccount.setCurrency("NOK");
BankAccount.deposit(1, "faw");
BankAccount.withdraw(1, "USD");
BankAccount.withdraw(1);

printOut(newLine);

function extendString(text, maxSize, char, insertBefore) {
    // ... din funksjonsimplementasjon her
}

const string1 = prompt("string 1");

extendString(string1, 10, "-", true);
extendString(string1, 12, "-", false);
extendString(string1, 8, "-", true);
extendString(string1, 10, "-", false);

printOut(newLine);
