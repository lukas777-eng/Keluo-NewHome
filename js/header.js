function insta() {
     document.getElementById("rrss").innerHTML = 'FOLLOW US ON INSTAGRAM @KELUO.TECH';
     const instagramLink = document.getElementById("instaLink");
     document.getElementById("rrss").setAttribute("href", `${instagramLink}`); 
}

function tik() {
    document.getElementById("rrss").innerHTML = 'FOLLOW US ON LINKEDIN Keluo Tech Consulting';
    const tiktokLink = document.getElementById("linkedinLink");
    document.getElementById("rrss").setAttribute("href", `${tiktokLink}`); 
}

function linked() {
  document.getElementById("rrss").innerHTML = 'FOLLOW US ON TIKTOK @KELUOTECH';
  const linkedinLink = document.getElementById("tiktokLink");
  document.getElementById("rrss").setAttribute("href", `${linkedinLink}`); 

}

setInterval(insta, 2000)
setInterval(tik, 3000)
setInterval(linked, 4000)


