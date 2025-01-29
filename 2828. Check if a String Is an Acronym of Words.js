var isAcronym = function (words, s) {
  if (words.length !== s.length) return false;
  for (let i = 0; i < words.length; i++) {
    if (!words[i].startsWith(s[i])) {
      return false;
    }
  }
  return true;
};
console.log(isAcronym(["alice", "bob", "charlie"], "abc"));
