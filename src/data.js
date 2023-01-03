let data = 0;

function add() {
    data = Math.max(data, Math.floor(Math.random() * 1000));
}
function sub() {
    data = Math.min(data, Math.floor(Math.random() * 1000));
}

export function getCurrentValue() {
return data;
}

export default {add, sub, getCurrentValue}