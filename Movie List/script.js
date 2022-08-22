var movieName = document.form.movieName;
var rad1 = document.form.ra1;
var rad2 = document.form.ra2;

function submitValidation()
{
    if(movieName.value.length == 0 || movieName.value.match(/^\s*$/))
    {
        alert("Please enter a Movie Name");
    } 
    else
    {
        if(rad1.checked)
        {
        console.log("You have watched "+ movieName.value);
        alert("Move Added to watch list!");
        } 
        else if(rad2.checked)
        {
        console.log("You are yet to watch "+ movieName.value);
        alert("Move Added to watch list!");
        }
        else
        {
            alert("You have to select any one option.");
        }
    }
};