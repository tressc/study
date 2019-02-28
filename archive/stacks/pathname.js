// simplify path names
// Input: "/a/./b/../../c/"
// Output: "/c"

function simplifyPath(path) {
    var stack = [];
    var toArr = path.split('/');
    for (var i = 0; i < toArr.length; i++) {
        var currentDir = toArr[i];
        if (currentDir === '' || currentDir === ".") {
            continue;
        } else if (currentDir === '..') {
            stack.pop();
        } else {
            stack.push(currentDir);
        }
    }
    return "/" + stack.join("/");
}
