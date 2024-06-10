function DangNhap(event) {
    
    var form = event.target;
    var ten = form.Ten.value;
    var pass = form.pass.value;
    if (ten !== "ptnhung" || pass !== "123456789") {
        alert("Tên đăng nhập hoặc mật khẩu không đúng");
    } else {
        event.preventDefault();
        alert("Đăng nhập thành công." + " " + "Chào mừng" + " " + ten +" " + "đến với trang web >_<");
    }
}