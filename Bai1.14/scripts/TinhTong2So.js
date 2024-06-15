function tinh() {
    var numA = parseFloat(document.getElementById('numA').value);
    var numB = parseFloat(document.getElementById('numB').value);
    var operation = document.getElementById('operation').value;
    var result;

    switch (operation) {
        case 'add':
            result = numA + numB;
            break;
        case 'subtract':
            result = numA - numB;
            break;
        case 'multiply':
            result = numA * numB;
            break;
        case 'chia':
            if (numB != 0) {
                result = numA / numB;
            } else {
                alert("Không thể chia cho 0");
            }
            break;
        default:
            alert("Vui lòng chọn phép toán");
    }
    document.getElementById('result').value = result;
}

function reset() {
    document.getElementById('numA').value = '';
    document.getElementById('numB').value = '';
    document.getElementById('operation').value = 'chon';
    document.getElementById('result').value = '';
}

