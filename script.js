const pressed = [];
const secretCode = 'unicorn';

window.addEventListener('keyup', function (e) {
    pressed.push(e.key)
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)

    if (pressed.join('').includes(secretCode)) {
        console.log('ding ding!')
        cornify_add()
    }
});