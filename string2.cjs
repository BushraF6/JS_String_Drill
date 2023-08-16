function convertToNumber(ip) {

    if (typeof ip === 'string' && ip) {
        let ipList = ip.split('.');

        for (let num = 0; num < ipList.length; num++) {

            ipList[num] = Number(ipList[num]);

            if (isNaN(ipList[num])) {
                ipList = [];
                break;
        
            }else {
                continue;
            }
        }

        return ipList;

    }else {
        return '';
    }

}

module.exports = convertToNumber;
