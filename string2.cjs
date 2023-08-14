function convertToNumber(ip) {
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
}
module.exports = convertToNumber;
