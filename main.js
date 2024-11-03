
    document.querySelectorAll('.anhh').forEach(item => {
        item.addEventListener('click', function() {
            // Xóa lớp 'active' khỏi tất cả các phần tử
            document.querySelectorAll('.anhh').forEach(el => el.classList.remove('active'));
            
            // Thêm lớp 'active' vào phần tử được bấm
            this.classList.add('active');
        });
    });
    fetch('path-to-file/baitap2.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('content').innerHTML = data;
    })
    .catch(error => console.error('Lỗi khi tải nội dung:', error));
