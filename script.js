let page = document.querySelector('body');
function mode(){
    if(page.style.backgroundColor != 'black'){
        page.style.backgroundColor = 'black';
        page.style.color = 'white';
        page.style.transition = '2s';
    }
    else{
        page.style.backgroundColor = 'white';
        page.style.color = 'black'; 
    }
}
