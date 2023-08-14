function getName (nameObj) {
    let names = Object.values(nameObj);

    for (char = 0; char < names.length; char++) {
        
        names[char] = names[char].toLowerCase();
        names[char] = names[char].replace(names[char][0], names[char][0].toUpperCase());
    }

    return names = names.join(' ');
}

module.exports = getName;