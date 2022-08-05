ModeSwitch();
MenuToggle();
function myFunction(x) {
    x.classList.toggle("change");
}








function ModeSwitch ()
{
    let btnToggel = document.getElementById("dark_light");
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
 function MenuToggle()
 {
     let mobileListItems = document.querySelector(".mobile_list_items");
     mobileListItems.style.width = "0";
     let hamburgerIcon = document.getElementById("hamburger_icon");
     hamburgerIcon.addEventListener("click",() =>
     {


         if (mobileListItems.style.width === "0px")
         {
             mobileListItems.style.width = "60%"
         }
         else if (mobileListItems.style.width === "60%")
         {
             mobileListItems.style.width = "0px";
         }

     })
 }








