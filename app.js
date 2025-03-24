// app.js
let typed = new Typed(".input", {
    strings: ["Back Developer","Networking Engineer"],
    typeSpeed: 70,   
    backSpeed: 55,   
    loop: true,      
    showCursor: true
});
document.getElementById("download-cv").addEventListener("click", function (event) {
  event.preventDefault();

  const files = ["cv/履歴書.pdf", "cv/職歴.pdf"];

  files.forEach((file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file; 
    link.target = "_blank"; 
    link.style.display = "none"; 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
  });
});