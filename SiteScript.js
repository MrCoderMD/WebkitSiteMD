// accessing DOM of the iframe which will show the contents in the course
const iframe=document.getElementById('iframe');
// Accessing All images in the web page.
const img=document.getElementsByTagName('img')

// Accessing main content of the web page
const section=document.getElementsByTagName('section')[0]

// Adjusting image according to their orientation
for(var i=0;i<img.length;i++){
    if(img[i]!=null){
        if(img[i].width<img[i].height){//For portraits
            img[i].style.width="auto"
            img[i].style.height="50vh"
        }

        else if(img[i].width>img[i].height){//For landscapes
            img[i].style.width="50vw"
            img[i].style.height="auto"
        }

        else{//For squares
            if(window.innerWidth<window.innerHeight){//For portrait devices
                img[i].style.width="50vh"
                img[i].style.height="50vh"
            }
            else{
                img[i].style.width="50vw"//For landscape devices
                img[i].style.height="50vw"
            }
        }
    }
}

// toggling b/w showing and hiding the iframe 
function iframeshow(){
    if(iframe.className=="iframenoshow"){
        iframe.className="iframeshow"
    }
    
    else{
        iframe.className="iframenoshow"
    }
}
// Hiding the iframe if the user scrolls on the document
document.onscroll=function(){
    if(iframe!=null){
        iframe.className="iframenoshow"
    }
}