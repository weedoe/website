var textTitle = document.title;
function titleMarquee(){
    textTitle = textTitle.substring(1, textTitle.length) + textTitle.substring(1, 0);
    document.title = textTitle;
    setTimeout("titleMarquee()", 350);
}