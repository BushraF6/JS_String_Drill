function convertToNumber(strList) {

    if (Array.isArray(strList) && strList.length > 0) {

        for (str = 0; str < strList.length; str++) {

            if ( typeof strList[str] === 'string' && strList[str] ) {

                strList[str] = strList[str].replace('$', '');
                strList[str] = strList[str].replace(',', '');
                strList[str] = Number(strList[str]);
        
                if (!isNaN(strList[str])) {
                    continue;
                }else {
                    strList[str] = 0;
                }

            }else {
                strList = [];
            }  
        }
        return strList;

    }else {
        return [];
    }
    
}

module.exports = convertToNumber;

