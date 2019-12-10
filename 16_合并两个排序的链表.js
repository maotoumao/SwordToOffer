function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2)
{
    // write code here
    let ans = [];
    let p1, p2;

    while(pHead1 !== null && pHead2 !== null){
        p1 = pHead1.val;
        p2 = pHead2.val;
        if(p1 < p2){
            ans.push(pHead1);
            pHead1 = pHead1.next;
        }else{
            ans.push(pHead2);
            pHead2 = pHead2.next;
        }
    }

    while(pHead1 !== null){
        ans.push(pHead1);
        pHead1 = pHead1.next;
    }

    while(pHead2 !== null){
        ans.push(pHead2);
        pHead2 = pHead2.next;
    }
    let mHead = (ans.length === 0) ? null : new ListNode(ans[0].val);
    let mCurr = mHead;
    for(let i = 0; i < ans.length - 1; ++i){
        mCurr.next = new ListNode(ans[i + 1].val);
        mCurr = mCurr.next;
    }
    return mHead;


}

var l1 = new ListNode(1);
var l2 = new ListNode(2);
var l3 = new ListNode(3);
l1.next = l2;
l2.next = l3;

let a = Merge(l1, l1);

while(a !== null){
    console.log(a.val);
    a = a. next;
}