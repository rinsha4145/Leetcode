var intersection = function(nums1, nums2) {
    let a=[]
    for(let i of nums1)
        if(nums2.includes(i))
            a.push(i)
    let set=new Set(a)
    return [...set]

};