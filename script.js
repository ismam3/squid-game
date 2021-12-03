var time = 59;
            var look_backward = null;
            var look_forward = null;
            var game_audio = document.getElementById("game_audio");
            game_audio.play();
            setInterval(()=>{
                document.getElementById("timer").setAttribute("value",0+":"+time);
                time = time - 1;
                if(time===0){
                    let bodyy = document.getElementsByTagName
                    ("body")[0]
                    bodyy.removeChild(bodyy.childNodes[1]);
                    let fail_container = document.createElement("div");
                    fail_container.className = "fail_container";
                    let heading = document.createElement("p");
                    let refresh = document.createElement("p");
                    let br = document.createElement("br");
                    heading.className = "heading"
                    let text = document.createTextNode("You are dead");
                    let refresher = document.createTextNode("Refresh to play again");
                    heading.appendChild(text);
                    heading.appendChild(br);
                    heading.appendChild(refresher)
                    
                    fail_container.appendChild(heading);
                    
                    bodyy.appendChild(fail_container);
                    
                    clearInterval(look_backward);
                    clearInterval(look_forward);
                    game_audio.src="audios/pink_soldiers.mp3"
                    game_audio.play();
                }
            },1000)
            var angle = 0;
            look_backward = setInterval(animate_backward,5);
            function animate_backward(){
                
                if(angle==180){
                    clearInterval(look_backward);
                    setTimeout(()=>{
                        look_forward = setInterval(animate_forward,5);
                        game_audio.pause();
                        game_audio.currentTime = 0;
                    },Math.random()*5000);
                }
                document.getElementById("doll").setAttribute("rotation","0 "+angle+" 0");
                angle++;
            }
            function animate_forward(){
                if(angle==0){
                    clearInterval(look_forward);    
                    setTimeout(()=>{
                        look_backward=setInterval(animate_backward,5);
                        game_audio.play();
                    },Math.random()*5000);
                }
                document.getElementById("doll").setAttribute("rotation","0 "+angle+" 0");
                angle--
            }
            function run(){
                let camera_z = document.getElementById("cameraWrapper").getAttribute("position").z;
                camera_z = camera_z - 0.3;
                document.getElementById("cameraWrapper").setAttribute("position",{x:0,y:1.6,z:camera_z})
                if(document.getElementById("doll").getAttribute("rotation").y < 120){
                    let bodyy = document.getElementsByTagName
                    ("body")[0]
                    bodyy.removeChild(bodyy.childNodes[1]);
                    let fail_container = document.createElement("div");
                    fail_container.className = "fail_container";
                    let heading = document.createElement("p");
                    let refresh = document.createElement("p");
                    let br = document.createElement("br");
                    heading.className = "heading"
                    let text = document.createTextNode("You are dead");
                    let refresher = document.createTextNode("Refresh to play again");
                    heading.appendChild(text);
                    heading.appendChild(br);
                    heading.appendChild(refresher)
                    
                    fail_container.appendChild(heading);
                    
                    bodyy.appendChild(fail_container);
                    // game_audio.src = "audios/pink_soldiers.mp3";
                    // game_audio.volume = 0;
                    clearInterval(look_backward);
                    clearInterval(look_forward);
                    game_audio.src="audios/pink_soldiers.mp3"
                }
                if(camera_z<-27){
                    let bodyy = document.getElementsByTagName
                    ("body")[0]
                    bodyy.removeChild(bodyy.childNodes[1]);
                    let fail_container = document.createElement("div");
                    fail_container.className = "success_container";
                    let heading = document.createElement("p");
                    let refresh = document.createElement("p");
                    let br = document.createElement("br");
                    heading.className = "heading"
                    let text = document.createTextNode("চিকেন ডিনারের দিন শেষ কাঁচা বাদামের বাংলাদেশ");
                    let refresher = document.createTextNode("কি ভাবছেন?জিতলে ট্যাক্যা দিমু??");
                    heading.appendChild(text);
                    heading.appendChild(br);
                    heading.appendChild(refresher)
                    
                    fail_container.appendChild(heading);
                    
                    bodyy.appendChild(fail_container);

                    let badam = new Audio("audios/kacha_badam.mp3");
                    game_audio.pause();
                    badam.play()
                    // game_audio.src = "audios/pink_soldiers.mp3";
                    // game_audio.volume = 0;
                    clearInterval(look_backward);
                    clearInterval(look_forward);
                    // game_audio.src="audios/kacha_badam.mp3"
                    // game_audio.play();
                }
            }