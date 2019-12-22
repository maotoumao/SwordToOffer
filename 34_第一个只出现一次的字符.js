function FirstNotRepeatingChar(str) {
    if (str === null) {
        return null;
    }
    if (str.length < 1) {
        return -1;
    }
    let moreThanOne = [];
    let one = [];
    for (let i = 0; i < str.length; ++i) {
        // 如果在moreThanOne中，直接跳过
        if (moreThanOne.indexOf(str[i]) >= 0){
            continue;
        } 
        // 如果没出现过且在one中，抵消,加入moreThanOne
        if(one.indexOf(str[i]) >= 0){
            moreThanOne.push(...one.splice(one.indexOf(str[i]), 1));
            continue;
        }
        // 如果没有出现过，加入one中
        one.push(str[i]);
    }

    if(one.length === 0){
        return -1;
    }
    return str.indexOf(one[0]);
}


console.log(FirstNotRepeatingChar('aaaavadsfbbb'))