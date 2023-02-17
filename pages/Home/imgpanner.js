var imgPannerImg =document.getElementById("imgpannerimg");
var imgpannertxt=document.getElementById("imgpannertxt")
window.onload=imgPannerImg.src="../../images/BW-logo.png"   
window.onload=imgpannertxt.innerText=""
var images=["../../images/editable/images.jpeg","../../images/editable/images1.jpeg","../../images/editable/images2.jpeg","../../images/editable/images3.jpeg"]
var txts=["VIVO y21","VIVO !","VIVO y53s","VIVO $"]


setInterval(imgChanger,4000)
var imgcounter =0

async function imgChanger(){
    imgPannerImg.src=images[imgcounter]
    imgpannertxt.innerText=txts[imgcounter]
    imgcounter++
    if(imgcounter>=(images.length)-1 || imgcounter<0){
        imgcounter=0
    }
}
var imgpannerbtnleft=document.getElementById("imgptnleft")
var imgpannerbtnright=document.getElementById("imgptnright")

imgpannerbtnleft.addEventListener("click",async function(){
    if(imgcounter==(images.length) || imgcounter<0){
        imgcounter=1;
    }
    console.log(imgcounter);
    imgcounter-=2;
    imgPannerImg.src=images[imgcounter];
    imgpannertxt.innerText=txts[imgcounter];
})
imgpannerbtnright.addEventListener("click",async function(){
    if(imgcounter==(images.length) || imgcounter<0){
        imgcounter=1;
    }
    console.log(imgcounter);
    imgcounter++;
    imgPannerImg.src=images[imgcounter];
    imgpannertxt.innerText=txts[imgcounter];
})




