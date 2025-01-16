var stringMatching = function(words) {
    let z=[]
   for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[j].includes(words[i])) {
                z.push(words[i]);
                break; 
            }
        }
    }
    return z
};
console.log(stringMatching(["mass","as","hero","superhero"]))