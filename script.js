skillsButton = document.getElementsByClassName("skill-btn");
textBoxes = document.getElementsByClassName("pop-text");
closeBtns = document.getElementsByClassName("close-btn");
popUpTextOpened = false;

for (let i = 0; i < skillsButton.length; i++)
{
    skillsButton[i].addEventListener("click", function(){
        if (popUpTextOpened == false)
        {
            textBoxes[i].style.visibility = "visible";
            textBoxes[i].style.height = "200px";
            popUpTextOpened = true;
        }
    });
    closeBtns[i].addEventListener("click", function(){
        textBoxes[i].style.visibility = "hidden";
        textBoxes[i].style.height = "0px";
        popUpTextOpened = false;
    });
}