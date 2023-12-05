d = new Date();

for (let index = 1; index <= 24; index++) {
    if (d.getDate() >= index) {
        document.getElementById("content").innerHTML += '	<article class="present"><div class="present__pane"><h2 class="present__date">'+ index + '</h2></div><div class="present__content"><div class="present_text">szenvedes</div></div> </article>'
    } else {
        document.getElementById("content").innerHTML += '	<article class="present_nohover"><div class="present__pane"><h2 class="present__date">'+ index + '</h2></div><div class="present__content"><div class="present_text">fajdalom</div></div> </article>'
    }
}
/* 

*/


