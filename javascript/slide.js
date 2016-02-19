    var imagecount = 1;
    var total = 4;

function slide(x){
    var Image = document.getElementById('slidingimg');
    imagecount += x;
    if(imagecount > total)
    {
        imagecount = 1;
    }
    if(imagecount < 1)
    {
        imagecount = total;
    }
    Image.src = "images/rsz_tomita" + imagecount + ".jpg";
}

window.setInterval(function slideA(){
    var Image = document.getElementById('slidingimg');
    imagecount += 1;
    if(imagecount > total)
    {
        imagecount = 1;
    }
    if(imagecount < 1)
    {
        imagecount = total;
    }
    Image.src = "images/rsz_tomita" + imagecount + ".jpg";
},5000);