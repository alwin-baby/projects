var firstName = document.form.firstName;
var lastName = document.form.lastName;
var email = document.form.email;
var pw = document.form.pw;
var pwCheck = document.form.pwCheck;

function submitValidation()
{
    if(firstName.value.length == 0 || firstName.value.match(/^\s*$/))
    {
        alert("Please enter your First Name.");
    } 

    else if(lastName.value.length == 0 || lastName.value.match(/^\s*$/))
    {
        alert("Please enter your Last Name.");
    } 

    else if(email.value.length == 0 || email.value.match(/^\s*$/))
    {
        alert("Please enter a valid E-mail ID.");
    } 

    else if(pw.value.length == 0 || pw.value.match(/^\s*$/))
    {
        alert("Please enter a password.");
    } 

    else if(pwCheck.value != pw.value)
    {
        alert("Password does not match!!! Please re-enter your password.");
    } 

    // else
    // {
    //     alert("Good to go... You have registered successfully.");
    // }
};