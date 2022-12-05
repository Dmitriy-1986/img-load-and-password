const imgHeader = document.querySelector('#img-header');
const block = document.querySelector('.block');
const imgLoad = document.querySelector('.img-load');

imgHeader.addEventListener('load', () => {
    imgLoad.innerHTML = 'Картинка загрузилась!'
    imgLoad.innerHTML += '<p>Пароль: 111</p>'
    block.innerHTML =  `<form id="signin">
                            <input id="txt" type="text" placeholder="Чтобы увидеть остальные картинки введите пароль">
                            <button id="submit">Отправить</button>
                            <p id="valid"></p><br><br><br>
                        </form>`;
                        
    const signin = document.querySelector('#signin');
    const submit = document.querySelector('#submit');
    const txt = document.querySelector('#txt');
    const valid = document.querySelector('#valid');

    function check() {
        if(signin.txt.value === '111') {
            valid.textContent = '';
            imgLoad.innerHTML = '';
            block.innerHTML =   `<div class="images-block">
                                    <img id="img-header" src="./img/img2.png" alt="img">
                                    <img id="img-header" src="./img/img3.png" alt="img">   
                                    <img id="img-header" src="./img/img5.png" alt="img">
                                    <img id="img-header" src="./img/img6.png" alt="img">
                                </div>`;
        } else {
            valid.textContent = `Введите правильный пароль!`;
        };
    };
    
    submit.addEventListener('click',(e) => {
        e.preventDefault();
        check();
    });
});
