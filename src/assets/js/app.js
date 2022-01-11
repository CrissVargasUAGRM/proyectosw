(function(){
    const listElements = document.querySelectorAll('.menu__item__show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = () => {
        listElements.forEach(element => {
            console.log("hola");
        })
    }

    addClick();
})();