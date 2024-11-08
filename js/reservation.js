document.getElementById('summit-reservation').addEventListener('click', function(){
        alert("Cảm ơn bạn đã đặt bàn! Vui lòng kiểm tra email để xác nhận.")
})


// Đóng mở menu điều hướng
function closeMenu() {
    const menu = document.getElementById('overlay-menu1');
    menu.classList.remove('show'); 
    document.body.style.overflow = 'auto'; 
}

document.getElementById('navbar-toggler1').addEventListener('click', function() {
    const menu = document.getElementById('overlay-menu1');
    menu.classList.toggle('show'); 

    document.body.style.overflow = menu.classList.contains('show') ? 'hidden' : 'auto';
});

document.getElementById('btn-close').addEventListener('click', closeMenu);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMenu();
    }
});



 // Hiệu ứng xuất hiện div khi cuộn trang
 const fadeIns = document.querySelectorAll('.fade-in');
 const options = {
     threshold: 0.2 
 };
 
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('visible');
             // Không gọi unobserve để cho phép tiếp tục theo dõi
         } else {
             // Nếu phần tử không còn trong tầm nhìn, xóa lớp 'visible'
             entry.target.classList.remove('visible');
         }
     });
 }, options);
 
 fadeIns.forEach(element => {
     observer.observe(element); // Theo dõi mỗi phần tử
 });
 