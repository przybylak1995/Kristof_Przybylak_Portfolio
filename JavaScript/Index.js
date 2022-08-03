ModeSwitch();
function myFunction(x) {
    x.classList.toggle("change");
}








function ModeSwitch ()
{
    let btnToggel = document.getElementById("press");
    btnToggel.addEventListener("click", () =>
    {
        if(document.body.classList.contains("darkMode"))
        {
            document.body.classList.remove("darkMode");
        }
        else
        {
            document.body.classList.add("darkMode");
        }

    })
}
