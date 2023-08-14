function getSnakeCase (string) {
    let newString = string;

    for (let i = 0; i < string.length; i++) {

        if (string[i] === string[i].toUpperCase()) {
            newString = newString.replace(string[i], '_' + string[i]);
        }
    }

    newString = newString.replace(string[0], string[0].toUpperCase());
    return newString;
}

module.exports = getSnakeCase;

