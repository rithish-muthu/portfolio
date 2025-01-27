function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}
 
function emailNav() {
    const button = document.getElementById("emailMe")

    button.addEventListener('click', () => {
        alert("button clicked")
        console.log("button clicked")
        window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&to=rithish.muthu@fssa.freshworks.com&su=Subject%20Here&body=Your%20message%20here", "_blank");

    });

}
function navToAnimeshon(){
    const logoNav = document.getElementById('nav_to _animeshon')
    logoNav.addEventListener('click',() =>{
        window.open("https://animeshonhub.netlify.app/","_blank");
    })
}

