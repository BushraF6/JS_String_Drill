function joinStrings (array) {

    if (Array.isArray(array)) {

        let string =  array.join(' ');
        return string;

    } else {
        return [];
    }

}
 
module.exports = joinStrings;