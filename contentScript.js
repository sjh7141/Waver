var is_open = true;
var control_opacity = true;

whale.extension.onMessage.addListener(function(msg, sender, sendResponse) {
    if(is_open)
    {
        if (msg.action == "foo") {
            //alert("Message recieved!");
            var div=document.createElement("div"); 
              //document.body.appendChild(HI);
              div.setAttribute("id", "Div1");
              document.body.insertBefore(div, document.body.firstChild);
              //div.innerText="test123";
      
              var div2=document.createElement("button"); 
              //document.body.appendChild(HI);
              div2.setAttribute("id", "Div2");
              //div2.setAttribute("href", "https://google.com");
              div2.setAttribute("onclick","location.href='https://www.google.com' ");
              document.body.insertBefore(div2, document.body.firstChild);
              //div.innerText="test123";

              var div3=document.createElement("button"); 
              div3.setAttribute("id", "Div3");
              div3.setAttribute("onclick","location.href='https://www.naver.com' ");
              document.body.insertBefore(div3, document.body.firstChild);
              
              var div4=document.createElement("button"); 
              div4.setAttribute("id", "Div4");
              div4.setAttribute("onclick","location.href='https://www.daum.net' ");
              document.body.insertBefore(div4, document.body.firstChild);
              
              var div5=document.createElement("button"); 
              div5.setAttribute("id", "Div5");
              div5.setAttribute("onclick","location.href='https://translate.google.co.kr/' ");
              document.body.insertBefore(div5, document.body.firstChild);
              
              var div6=document.createElement("button"); 
              div6.setAttribute("id", "Div6");
              div6.setAttribute("draggable", true);
              //div6.setAttribute("ondragstart","onDragStart(event);");
              document.body.insertBefore(div6, document.body.firstChild)


              is_open = false;    
          }
    }
    else
    {
        if(msg.action == "foo" && control_opacity){
            Div1.style.opacity = 0;
            Div2.style.opacity = 0;
            Div3.style.opacity = 0;
            Div4.style.opacity = 0;
            Div5.style.opacity = 0;
            Div6.style.opacity = 0;
            Div1.style.zIndex = -1;
            Div2.style.zIndex = -1;
            Div3.style.zIndex = -1;
            Div4.style.zIndex = -1;
            Div5.style.zIndex = -1;
            Div6.style.zIndex = -1;
            control_opacity = false;
        }
        else{
            var div=document.createElement("div"); 
            Div1.style.opacity = 1;
            Div2.style.opacity = 1;
            Div3.style.opacity = 1;
            Div4.style.opacity = 1;
            Div5.style.opacity = 1;
            Div6.style.opacity = 1;
            Div1.style.zIndex = 20000;
            Div2.style.zIndex = 20001;
            Div3.style.zIndex = 20001;
            Div4.style.zIndex = 20001;
            Div5.style.zIndex = 20001;
            Div6.style.zIndex = 20001;
            Div2.style.backgroundColor = 'red';
            Div3.style.backgroundColor = 'red';
            Div4.style.backgroundColor = 'red';
            Div5.style.backgroundColor = 'red';
            Div6.style.backgroundColor = 'red';
            Div2.style.borderRadius  = '0px';
            Div3.style.borderRadius  = '0px';
            Div4.style.borderRadius  = '0px';
            Div5.style.borderRadius  = '0px';
            Div6.style.borderRadius  = '0px';
            control_opacity = true;
        }
    }
    
    

  });