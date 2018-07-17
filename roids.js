// for the mongo shell to emojify an ObjectID

function oid2emoji(oid) {
    var emojiString = ""; //init!
    var hexString = oid.valueOf();
    var strIdx;
    for (strIdx = 0; strIdx <= hexString.length-1; strIdx += 2) {
        var currByte = hexString.substring(strIdx,strIdx+2);
        emojiString = emojiString + String.fromCodePoint("0x1f4"+currByte);
    }
    return emojiString;
}

function emoji2oid(emojiString) {
    var hexString = ""; //init!
    var strIdx;
    for (strIdx = 0; strIdx <= emojiString.length-1; strIdx += 2) {
        var currCP = emojiString.codePointAt(strIdx);
        var cpStr = currCP.toString(16); //need hex version of the code point to pull out the LSB
        var currByte = cpStr.substring(cpStr.length-2)
        hexString = hexString + currByte;
    }
    return ObjectId(hexString);
}