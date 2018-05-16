window.addEventListener( 'load', function()
{
    'use strict';
    clickMenu();
});

function clickMenu() {
    'use strict';
    for ( var i = 0; i < document.getElementsByTagName('nav').getElementsByClassName('fa-bars')[0]                  .length; i++ )
    {
        document.getElementsByTagName('nav').getElementsByClassName('fas fa-bars')[i].onclick = showMenu;
    }
}
function showMenu()
{
    if( this.getElementsByTagName('nav')[0].getElementsByTagName('ul')[0].style.display != "flex" )
    {
        this.getElementsByTagName('nav')[0].getElementsByTagName('ul')[0].style.display = "flex";
    }
    else
    {
        this.getElementsByTagName('nav')[0].getElementsByTagName('ul')[0].style.display = "flex";
    }
}