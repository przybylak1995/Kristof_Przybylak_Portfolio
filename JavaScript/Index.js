ModeSwitch();
MenuToggle();
function myFunction(x) {
    x.classList.toggle("change");
}










function ModeSwitch ()
{
    let btnToggels = document.querySelectorAll(".dark_light");
    //let btnToggel = document.getElementById("dark_light");

    for (let i = 0; i < btnToggels.length; i++) {
        btnToggels[i].addEventListener("click", () =>
        {

            if(document.body.classList.contains("darkMode"))
            {
                btnToggels[i].src = "Images/light.png";
                document.body.classList.remove("darkMode");
            }
            else
            {
                btnToggels[i].src = "Images/dark.png";
                document.body.classList.add("darkMode");
            }

        })
    }

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
             mobileListItems.style.width = "100%"
         }
         else if (mobileListItems.style.width === "100%")
         {
             mobileListItems.style.width = "0px";
         }

     })
 }
 SlideCoffeeMug();
function SlideCoffeeMug()
{
    let conn = document.getElementById("btn_connect");
    let coffee = document.querySelector(".coffee");

    conn.addEventListener("click", ()=>
    {
        coffee.style.width = "7%";
        coffee.style.right = "10%";
    })
}







