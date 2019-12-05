function ListNode(x) {
    this.val = x;
    this.next = null;
}
// 一开始写错了写成了链表反转 就是下边的代码

/**
function printListFromTailToHead(head)
{
    // write code here
    var curr = head;
    var tHead = new ListNode(head.val);
    var tPrev = tHead;

    while(curr.next !== null){
        curr = curr.next;
        tHead = new ListNode(curr.val);
        tHead.next = tPrev;
        tPrev = tHead;
    }
    return tHead;
}
**/

function printListFromTailToHead(head) {
    // write code here
    let arr = [];
    while (head != null) {
        arr.unshift(head.val)
        head = head.next;
    }
    return arr;
}


var l1 = new ListNode(1);
var l2 = new ListNode(2);
var l3 = new ListNode(3);
l1.next = l2;
l2.next = l3;

console.log(printListFromTailToHead(l1));
console.log(l1)