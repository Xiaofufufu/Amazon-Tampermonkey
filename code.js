// ==UserScript==
// @name         亚马逊脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.chinanice.vip/index.php*
// @match        http://publish-private.mabangerp.com/index.php*
// @grant        none

// ==/UserScript==

(function() {
function jiSuan() {
        var ma = "6903222";
        var maFuYi = ma + sixMa();
        var maArr = maFuYi.split("");
        var jiSum = parseInt(maArr[0]) + parseInt(maArr[2]) + parseInt(maArr[4]) + parseInt(maArr[6]) + parseInt(maArr[8]) + parseInt(maArr[10]);
        var ouSum = parseInt( maArr[1]) + parseInt( maArr[3]) + parseInt( maArr[5]) + parseInt( maArr[7]) + parseInt( maArr[9]) + parseInt( maArr[11]);
        var yiSum = jiSum + (ouSum*3);
        var geWei = yiSum % 10;
        var jiaoyan = 10 - geWei;
        ma = maFuYi + jiaoyan;
        return ma;
    }
    var url = $(window.parent.document).find("#iframeContent").attr("src");
    if (url) {
        window.location.href= url;
    }
    setTimeout(function () {
        var mamama = jiSuan();
        document.execCommand(mamama);
        $("input[name='productId']").val(mamama);
        $("input[name='brandName']").val("HFSC");
        $("input[name='manufacturer']").val("HFSC");
        $("input[name='mfrPartNumber']").val(mamama);
        $("input[name='defaultQuantity']").val(randomNum(30,60));
    },500)

function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
        break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
        break;
            default:
                return 0;
            break;
    }
}

if (!valval) {
    $("input[name='productId']").val(mamama);
}


    function sixMa() {
        var str = "";
        var len = str.length;
        len = 5;
        var arr = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

        for (var i = 0; i < len; i++) {
            var index = Math.floor(Math.random() * 10);
            str += arr[index];
        }
        return str;
    }

    // Your code here...
})();
