function convertToNumber(strList) {

    for (let str = 0; str < strList.length; str++) {

        strList[str] = strList[str].replace('$', '');
        strList[str] = strList[str].replace(',', '');
        strList[str] = Number(strList[str]);

        if (!isNaN(strList[str])) {
            continue;
        } else{
            strList[str] = 0;
        }
    }

    return strList;
}

module.exports = convertToNumber;

