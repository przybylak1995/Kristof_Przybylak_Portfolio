
MenuToggle();
function myFunction(x) {
    x.classList.toggle("change");
}







/*
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
}*/
 function MenuToggle()
 {
     let hamburgerIcon = document.getElementById("hamburger_icon");
     let menuToggle = document.getElementById("menu_toggle");
     menuToggle.style.display = "none";
     hamburgerIcon.addEventListener("click",() =>
     {

         if (menuToggle.style.display === "none")
         {
             menuToggle.style.display = "flex";
         }
         else if (menuToggle.style.display === "flex")
         {
             menuToggle.style.display = "none";
         }
     })
 }