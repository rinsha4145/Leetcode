let a = "aba", b = "cdc"
var findLUSlength = function(a, b) {
    if(a==b) return -1
    else{
        if(a.length<b.length) return b.length
        return a.length   
    }
};