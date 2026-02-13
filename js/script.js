// Floating hearts
setInterval(()=>{
    let heart=document.createElement("div");
    heart.className="heart";
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=Math.random()*20+15+"px";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
},500);

// Background music (shared across all pages)
let bgMusicInstance = null;
let bgMusicListenerAttached = false;

function getBgMusic(){
    if(bgMusicInstance){
        return bgMusicInstance;
    }

    // Try existing audio element first (index page)
    let existing = document.getElementById("bgMusic");
    if(existing){
        bgMusicInstance = existing;
    }else{
        // Fallback: create a hidden audio element (for other pages)
        const audio = document.createElement("audio");
        audio.id = "bgMusic";
        audio.src = "music/love.mp3";
        audio.loop = true;
        audio.style.display = "none";
        document.body.appendChild(audio);
        bgMusicInstance = audio;
    }

    // Attach time tracking once so we can resume from the same spot
    if(bgMusicInstance && !bgMusicListenerAttached && window.sessionStorage){
        bgMusicInstance.addEventListener("timeupdate",()=>{
            try{
                sessionStorage.setItem("bgMusicTime",String(bgMusicInstance.currentTime || 0));
            }catch(e){}
        });
        bgMusicListenerAttached = true;
    }

    return bgMusicInstance;
}

// Music toggle (also saves state so it persists across pages)
function toggleMusic(){
    const music = getBgMusic();
    if(!music) return;

    if(music.paused){
        music.play();
        if(window.sessionStorage){
            sessionStorage.setItem("bgMusicPlaying","true");
        }
    }else{
        music.pause();
        if(window.sessionStorage){
            sessionStorage.setItem("bgMusicPlaying","false");
        }
    }
}

// Image popup
function showImage(src){
    document.getElementById("popupImg").src=src;
    document.getElementById("popup").style.display="flex";
}

function closePopup(){
    document.getElementById("popup").style.display="none";
}

// Typewriter effect
function typeWriter(){
    let text="Hey sweetheart You're Mine & I'm not ever letting you go, because you're my special and favourite person, dont ever tell me that \"You're bad for me\" or \"I deserve someone better\" because no one can make me happy as you do, I wont lie to you, I wont ever make you sad I promise, I know I fight with you, I may have acted worse but I can never stop caring or loving you because you matter to me alot, from the day we met to the present day you're the one I always look forward to when I need someone, you may think I have alot of people in my life, yes that's true but none are important like you, none have wiped my tears, none have made me smile, you have, you have heard my stories to you have made me laugh, I dont want anyone else I just want you, I dont care about others, I know I can never have someone like you in my life, if I ever made you sad 'I'm sorry', I will never make you angry, I will irritate you that's my birthright but I will never make you cry, because you're that important to me. I love you so much nana is always yours";
    let i=0;
    let speed=50;
    function typing(){
        if(i<text.length){
            document.getElementById("letterText").innerHTML+=text.charAt(i);
            i++;
            setTimeout(typing,speed);
        }
    }
    typing();
}

window.onload=()=>{
    // Start typewriter on letter page
    if(document.getElementById("letterText")){
        typeWriter();
    }

    // Restore music state across pages (position + playing state)
    if(window.sessionStorage){
        const music = getBgMusic();
        if(music){
            const lastTime = parseFloat(sessionStorage.getItem("bgMusicTime") || "0");
            if(!isNaN(lastTime) && lastTime > 0){
                music.currentTime = lastTime;
            }

            if(sessionStorage.getItem("bgMusicPlaying")==="true" && music.paused){
                const playPromise = music.play();
                if(playPromise && playPromise.catch){
                    playPromise.catch(()=>{});
                }
            }
        }
    }
}
