(function(){
    var oP = document.querySelectorAll(".left p"),
        arr = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg'],
        oImg = document.getElementsByTagName("img"),
        oChange = document.querySelectorAll(".right > div")
    length = oP.length;

    var index = 0;
    for(var i = 0; i < length; i++) {
        oP[i].index = i;
        oP[i].onclick = function () {
            oChange[index].className = "";
            index = this.index;
            oChange[index].className = "on"
            oImg[0].src = arr[this.index];
        }
    }
})();
















