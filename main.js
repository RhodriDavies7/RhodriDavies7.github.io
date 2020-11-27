var i = 0;
var quotes = ['Burning through NCIS firewall',
              'Launching Cyber Nuke',
              'Nmapping the script to view the cipher text',
              'Bettering the grasp on python 6 malware encryption',
              'Connecting the virtual TCP to the open source sensor']; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
var j = Math.floor(Math.random() * quotes.length);

function typeWriter() {
  if (i < quotes[j].length) {
    document.getElementById("quotes").innerHTML += quotes[j].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
