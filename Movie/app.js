$(document).ready(function () {
    $("#show-forgot-pass").on("click", function (e) {
        e.preventDefault();
        $("#signInSection").removeClass("d-flex").addClass("d-none");
        $("#forgotSection").removeClass("d-none").addClass("d-flex");
    });

    // Back to Login form
    $(".back-to-login").on("click", function (e) {
        e.preventDefault();
        $("#forgotSection").removeClass("d-flex").addClass("d-none");
        $("#signInSection").removeClass("d-none").addClass("d-flex");
        $("#createaccsection").removeClass("d-flex").addClass("d-none");
    });

    $("#create-acc").on("click", function (e) {
        e.preventDefault();
        $("#signInSection").removeClass("d-flex").addClass("d-none");
        $("#createaccsection").removeClass("d-none").addClass("d-flex");
    });

    $(document).scroll(function () {
        var nav = $("nav");
        if ($(this).scrollTop() > 10) {
            nav.addClass("scrolled");
        } else {
            nav.removeClass("scrolled");
        }
    });

    $("#signInSection .submit").click(function () {
        var email = $("#signInSection .email").val();
        var pass = $("#signInSection .pass").val();
        var emailch = email.match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/);
        var err = $("#signInSection .err");
        if (email == "" || pass == "") {
            err.html("All fields are compulsory!");
            return false;
        } else if (!emailch) {
            err.html("Invalid Email!");
            return false;
        } else if(pass.length != 8){
            err.html("Password length is 8!");
            return false;
        } else {
            err.html("");
            alert("WELCOME ");
            return true;
        }
    })

    
    $("#forgotSection .submit").click(function () {
        var email = $("#forgotSection .email").val();
        var pass = $("#forgotSection .pass").val();
        var emailch = email.match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/);
        var mno = $("#forgotSection .mno").val();
        var mnop = mno.match(/^\d{10}$/);
        var cpass = $("#forgotSection .cpass").val();
        var err = $("#forgotSection .err");
        if (email == "" || pass == "" || mno == "" || cpass == "") {
            err.html("All fields are compulsory!");
            return false;
        } else if (!emailch) {
            err.html("Invalid Email!");
            return false;
        } else if (!mnop) {
            err.html("Invalid Mobile!");
            return false;
        } else if(pass.length != 8){
            err.html("Password length is 8!");
            return false;
        } else if(pass != cpass) {
            err.html("Not match with password!");
            return false;
        } else {
            err.html("");
            alert("WELCOME ");
            return true;
        }
    })

        $("#createaccsection .submit").click(function () {
        var uname = $("#createaccsection .uname").val();
        var email = $("#createaccsection .email").val();
        var pass = $("#createaccsection .pass").val();
        var emailch = email.match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/);
        var mno = $("#createaccsection .mno").val();
        var mnop = mno.match(/^\d{10}$/);
        var cpass = $("#createaccsection .cpass").val();
        var err = $("#createaccsection .err");
        if (uname == "" || email == "" || mno == "" || pass == "" || cpass == "") {
            err.html("All fields are compulsory!");
            return false;
        } else if(!(/^[A-Za-z\s]+$/).test(uname)) {
            err.html("Username has only alphabets!");
            return false;
        } else if (!emailch) {
            err.html("Invalid Email!");
            return false;
        } else if (!mnop) {
            err.html("Invalid Mobile!");
            return false;
        } else if(pass.length != 8){
            err.html("Password length is 8!");
            return false;
        } else if(pass != cpass) {
            err.html("Not match with password!");
            return false;
        } else {
            err.html("");
            alert("WELCOME ");
            return true;
        }
    })
});