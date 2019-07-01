function braceValid(str){
    var opens = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] == "("){
            opens++;
        } else if (str[i] == ")"){
            opens--;
        }
        if (opens < 0){
            return false;
        }
        if (str[i] == "{"){
            opens++;
        } else if (str[i] == "}"){
            opens--;
        }
        if (opens < 0){
            return false;
        }
        if (str[i] == "["){
            opens++;
        } else if (str[i] == "]"){
            opens--;
        }
        if (opens < 0){
            return false;
        }
    }
    if (opens != 0){
        return false;
    }
    return true;
}
console.log(braceValid("(i{a}l[t]o)n"))
console.log(braceValid("e(ia}l[to)n"))
console.log(braceValid("D(i{a}l[ t]o)n{e"))