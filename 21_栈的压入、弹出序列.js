function IsPopOrder(pushV, popV) {
    // write code here
    let stack = [];
    for(let i = 0; i < popV.length; ++i){
        let top = popV[i];
        // 如果在当前已经入栈的队列尾部找到
        if(stack.length !== 0 && stack.slice(-1) == top){
            stack.pop();
            continue;
        }
        // 否则将后续的值入栈
        while(pushV.length !== 0){
            if(pushV[0] !== top){
                stack.push(pushV.shift());
            }else{
                pushV.shift();
                break;
            }
        }
    }
    if(stack.length === 0){
        return true;
    }
    return false;
}
console.log(IsPopOrder([1,2,3,4,5],[4,3,5,1,2]));
