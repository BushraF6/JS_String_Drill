function joinStrings (array) {

    if (Array.isArray(array) && array.length > 0) {

        let string =  array.join(' ');
        return string;

    } else {
        return [];
    }

}

module.exports = joinStrings;
