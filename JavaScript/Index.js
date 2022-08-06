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
            btnToggel.src = "Images/light.png";
            document.body.classList.remove("darkMode");
        }
        else
        {
            btnToggel.src = "Images/dark.png";
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



 /*
function Writer()
{
    let span = document.getElementById("typewriter");
    let text = ["Hallo ik ben kristof", "Hallo ik ben mirre"];
    let tekst = 0;
    let i = 0;
    write();
   function write ()
   {


       if (i < text[tekst].length)
       {
           span.innerHTML+= text[0].charAt(i);
           i++;
           setTimeout(write, 50);
       }
   }
}
*/




