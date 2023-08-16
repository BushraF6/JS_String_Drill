function getMonth(date) {

    if (typeof date === 'string' && date && date.includes('/')){
        let dateList = date.split('/');
        let month;

        for (let num = 0; num < dateList.length; num++){     
            dateList[num] = Number(dateList[num]);

            if (!isNaN(dateList[num])) {
                month = dateList[1];
            } else {
                month = '';
            }
        }

        return month;

    } else { 
        return '';
    }
    
}

module.exports = getMonth;
