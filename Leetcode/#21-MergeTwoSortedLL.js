var mergeTwoLists = function(l1, l2) {
    //check the head of l1 vs l2
    //you want to set the lower or equal val as the new head
    //have a pointer point towards the other head
    //continue until one of the lists is null
    //add the rest of the other LL to the curr LL

    //Iteratively
    let dHead = new ListNode(8080);
    let curr = dHead;

    //l1 - [ ]
    //l2 - [ 4]
    //dummyhead - [8080, 1,]
    //curr - 8080 -> 1 -> 1 -> 2 -> 3 -> 4

    while (l1 !== null && l2 !== null) {

        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next =l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    // curr.next = l1 === null ? l2 : l1;
    if (l1 === null) curr.next = l2
    if (l2 === null) curr.next = l1

    return dHead.next;

    //RECURSIVE
//     let head;

//     if (l1 === null) {
//         return l2;
//     } else if (l2 === null) {
//         return l1;
//     }
//     //l1   null
//     //l2
//     //[1 -> 1 -> 2 -> 3 -> 4 -> 4]

//     if (l1.val <= l2.val) {
//         head = new ListNode(l1.val);
//         head.next = mergeTwoLists(l1.next, l2)
//     } else {
//         head = new ListNode(l2.val);
//         head.next = mergeTwoLists(l1, l2.next)
//     }

//     return head;
};

// mergeTwoLists()
