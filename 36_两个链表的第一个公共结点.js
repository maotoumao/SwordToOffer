function ListNode(x){
    this.val = x;
    this.next = null;
}
function FindFirstCommonNode(pHead1, pHead2)
{
    let p1 = pHead1;
    while(p1){
        p1.visited = true;
        p1 = p1.next;
    }
    let p2 = pHead2;
    while(p2){
        if(p2.visited){
            return p2;
        }
        p2 = p2.next;
    }
    return null;
}