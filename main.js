

function countLetters(letter, str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow) {
    const letter = prompt("Введіть літеру, яку потрібно порахувати:");
    const countFirst = countLetters(letter, firstRow);
    const countSecond = countLetters(letter, secondRow);

    if (countFirst > countSecond) {
        alert(firstRow);
    } else if (countSecond > countFirst) {
        alert(secondRow);
    } else {
        alert("Кількість літер однакова в обох рядках.");
    }
}



function formattedPhone(phone) {
    let cleanPhone = phone.replace(/\D/g, '');

    if (cleanPhone.length === 10) {
        cleanPhone = '38' + cleanPhone;
    } else if (cleanPhone.length === 11 && cleanPhone.startsWith('8')) {
        cleanPhone = '3' + cleanPhone;
    }

    if (cleanPhone.length !== 12 || !cleanPhone.startsWith('38')) {
        return "Неправильний формат номера";
    }

    const countryCode = cleanPhone.slice(0, 2);
    const operatorCode = cleanPhone.slice(2, 5);
    const firstPart = cleanPhone.slice(5, 8);
    const secondPart = cleanPhone.slice(8, 10);
    const thirdPart = cleanPhone.slice(10);

    return `+${countryCode} (${operatorCode}) ${firstPart}-${secondPart}-${thirdPart}`;
}

function handlePhoneFormatting() {
    const phoneInput = prompt("Введіть номер телефону:");
    alert(formattedPhone(phoneInput));
}

document.getElementById("task1").addEventListener("click", function() {
    const firstRow = 'Slow and steady wins the race';
    const secondRow = 'You can say that again';
    getRow(firstRow, secondRow);
});

document.getElementById("task2").addEventListener("click", function() {
    handlePhoneFormatting();
});
