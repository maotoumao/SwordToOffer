function ListNode(x){
    this.val = x;
    this.next = null;
}
function ReverseList(pHead) {
    // write code here
    if (pHead === null) {
        return null;
    }
    if (pHead.next === null) {
        return pHead;
    }

    let rPrev = new ListNode(pHead.val);
    let rCurr;
    pHead = pHead.next;
    while (pHead !== null) {
        rCurr = new ListNode(pHead.val);
        rCurr.next = rPrev;
        rPrev = rCurr;
        pHead = pHead.next;
    }
    return rCurr;
}

var l1 = new ListNode(1);
var l2 = new ListNode(2);
var l3 = new ListNode(3);
l1.next = l2;
l2.next = l3;

console.log(ReverseList(l1))