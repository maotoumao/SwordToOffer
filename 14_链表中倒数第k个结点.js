function ListNode(x){
    this.val = x;
    this.next = null;
}

function FindKthToTail(head, k) {
    // write code here
    let arr = [];
    while (head !== null) {
        arr.push(head);
        head = head.next;
    }
    console.log(arr);
    return arr.length >= k ? arr[arr.length - k] : null;
}
let l1 = new ListNode(1);
let l2 = new ListNode(2);
let l3 = new ListNode(3);
l1.next = l2;
l2.next = l3;
console.log(FindKthToTail(l1, 3))