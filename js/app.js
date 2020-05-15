var prevScrollpos = window.pageYOffset;

mybutton = document.getElementById("topBtn");

window.onscroll = function() {
    // bottom navbar togggle
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.bottom = "0";
    } else {
        document.getElementById("navbar").style.bottom = "-50px";
    }
    prevScrollpos = currentScrollPos;

    // back to top button
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.right = "30px";
    } else {
        mybutton.style.right = "-50px";
    }
}

// back to top function
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onload = function() {
    document.getElementById("contact-form").reset();
}