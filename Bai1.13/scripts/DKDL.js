document.getElementById("submit-dongy").addEventListener("click", function() {
    
    document.getElementById("success-message").style.display = "block";


    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var tourType = document.getElementById("tour-type").value;
    var transportation = document.querySelector('input[name="transportation"]:checked').value;
    var adults = document.getElementById("adults").value;
    var children = document.getElementById("children").value;

    var additionalNotes = document.getElementById("additional-notes");
    additionalNotes.value += `\nHọ và tên: ${name}`;
    additionalNotes.value += `\nĐịa chỉ: ${address}`;
    additionalNotes.value += `\nĐiện thoại: ${phone}`;
    additionalNotes.value += `\nChọn tour: ${tourType}`;
    additionalNotes.value += `\nPhương tiện: ${transportation}`;
    additionalNotes.value += `\nNgười lớn: ${adults}`;
    additionalNotes.value += `\nTrẻ em: ${children}`;
});
