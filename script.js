document.querySelector('.img-btn').addEventListener('click', function()
    {
	document.querySelector('.wrapper').classList.toggle('s-signup')
	});

function myFunction() {
    document.getElementById("Email").placeholder = "Required";
    document.getElementById("name").placeholder = "Required";
    document.getElementById("password").placeholder = "Required";
    document.getElementById("newMail").placeholder = "Required";
    document.getElementById("newPassword").placeholder = "Required";
};