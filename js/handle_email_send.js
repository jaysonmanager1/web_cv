(function () {
    emailjs.init("Y97n60iQtoJL5MCrc");
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('colorlib-aside').style.zIndex = -1;
    // Hiển thị thông báo loading
    document.getElementById('loading').style.display = 'block';

    // Lấy giá trị email từ input
    var email = document.getElementById('email').value;
    console.log(email);

    // Kiểm tra định dạng email bằng biểu thức chính quy
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Vui lòng nhập địa chỉ email hợp lệ.');
        return; // Dừng việc gửi email nếu địa chỉ email không hợp lệ
    }
    else {

        // Nếu địa chỉ email hợp lệ, tiếp tục gửi email
        var params = {
            name: document.getElementById('name').value,
            email: email,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        emailjs.send('service_rhuo8bo', 'template_h3o3b72', params)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email đã được gửi thành công!');

                document.getElementById('loading').style.display = 'none'; // Ẩn thông báo loading
                setTimeout(function () {
                    location.reload(); // Reload lại trang sau khi gửi email thành công
                }, 1000); // Thời gian trễ trước khi reload (1000ms = 1 giây)

            }, function (error) {
                console.log('THẤT BẠI...', error);
                alert('Không thể gửi email. Vui lòng thử lại sau.');
                document.getElementById('loading').style.display = 'none'; // Ẩn thông báo loading
            });
    }

});