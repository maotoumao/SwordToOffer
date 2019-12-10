let stack = [];
let mini = [Infinity];
function push(node)
{
    let topMini = mini.slice(-1);
    mini.push(node > topMini ? topMini: node);
    stack.push(node);
}
function pop()
{   
    mini.pop();
    return stack.pop();
}
function top()
{
    return stack.slice(-1);
}
function min()
{
    return mini.length > 1 ? mini.slice(-1) : null;
}
