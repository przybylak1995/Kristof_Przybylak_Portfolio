MenuToggle();
function myFunction(x) {
    x.classList.toggle("change");
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
        setTimeout('window.location = "#contact"',1200)

    })
}







