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
        document.getElementById('loading').style.display = 'none'; // Ẩn thông báo loading
        return; // Dừng việc gửi email nếu địa chỉ email không hợp lệ
    }

    else {

        const serviceID = 'default_service';
        const templateID = 'template_h3o3b72';

        emailjs.sendForm(serviceID, templateID, this)
            .then(function (response) {
                setTimeout(function () {
                    location.reload(); // Reload lại trang sau khi gửi email thành công
                }, 1000); // Thời gian trễ trước khi reload (1000ms = 1 giây)
                document.getElementById('loading').style.display = 'none'; // Ẩn thông báo loading

                console.log('SUCCESS!', response.status, response.text);
                alert('Email đã được gửi thành công!');


            }, function (error) {
                console.log('THẤT BẠI...', error);
                alert('Không thể gửi email. Vui lòng thử lại sau.');
                document.getElementById('loading').style.display = 'none'; // Ẩn thông báo loading
            });
    }

});