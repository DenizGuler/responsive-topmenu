function openMenu(n, button) {
    let menu = document.getElementsByClassName("responsive-menu");
    menu[n].style.width = "330px"; 
}

function closeMenu(n, button) {
    let menu = document.getElementsByClassName("responsive-menu");
    menu[n].style.width = "0";
}

function expandLevel(n, button) {
    let level = document.getElementsByClassName("next-level")[n],
        levelChildren = level.children,
        numChildren = 0; 

    for (let e of levelChildren) {
        if (e.childElementCount === 0) 
            numChildren += 1; 
        else
            numChildren += e.childElementCount;
    }
    
    level.style.maxHeight = numChildren * 46 + "px";
    button.style.height = "0";
    // button.className = "collapse-menu";

}

function collapseLevel(n, button) {
    let level = document.getElementsByClassName("next-level")[n],
        otherButton = document.getElementsByClassName("next-menu")[n];
    level.style.maxHeight = "0";
    otherButton.style.height = "44px";
    // button.onclick = function () { expandLevel(n, button); };
    // button.className = "next-menu";
}