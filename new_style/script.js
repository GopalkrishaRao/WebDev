
    var i = 0;
    var txt = 'Digital entrepreneurs, Youtubers and content creators provide affordable courses across technologies....!';
    var speed = 70;
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("typingEffect").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();