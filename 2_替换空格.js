function replaceSpace(str)
{
    // replace函数是只替换一个 用正则表达式匹配全部即可全部替换
    return str.replace(/\s/g, '%20');
}

console.log(replaceSpace('We are hAPPY'));