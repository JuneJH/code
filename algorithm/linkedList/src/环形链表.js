function hasCycle(head) {
    if(!head || !head.next)return false;
    let f = head;
    let s = head;
    while(f && f.next){
        f= f.next.next;
        s = s.next;
        if(f === s)return true;
    }
    return false;
 }

 module.exports = {
    hasCycle
 }