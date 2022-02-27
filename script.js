const form = document.getElementById("silentform");
const money = document.getElementById("money");
const to = document.getElementById("to");
document.getElementsByClassName("senttext")[0].innerHTML = 'Please type the money amount and the recipient.';

function buildText(money, to) {
    if (!money.includes('.')) {
        money += '.00';
    }
    const template = `You've sent $${money} to ${to}`;
    return template;
}


form.onsubmit = function(e) {
    e.preventDefault();
};

function update() {
    const text = buildText(money.value, to.value);
    document.getElementsByClassName("senttext")[0].innerHTML = text;
}
to.oninput = function() {
    update();
}
money.oninput = function() {
    update();
}