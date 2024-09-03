var navLinks = document.getElementById('navLinks');
function showmenu()
{
    navLinks.style.right="0";
    navLinks.style.display="block";
    navLinks.style.transition="0.5s";
}
function hidemenu()
{
    navLinks.style.display="none";
    navLinks.style.right="-200px";
    navLinks.style.transition="0.5s";

}