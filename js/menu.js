console.log(123123);

async function loadProducts(category) {
    try {
        const response = await fetch('/json/data.json'); 
        console.log(response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        } 
        const data = await response.json();
        const products = data.products.filter(product => product.category === category);
        
        const productList = document.getElementById('productList');
        productList.innerHTML = '';

        products.forEach(product => {
            const productCard = `
                <div class="col-md-3">
                    <div class="card mb-4">
                        <img src="${product.image_url}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                        </div>
                    </div>
                </div>
            `;
            productList.innerHTML += productCard;
        });
    } catch (error) {
        console.error('Có lỗi khi tải sản phẩm:', error);
    }
}
document.querySelectorAll('[data-category]').forEach(tab => {
    tab.addEventListener('click', function(event) {
        event.preventDefault();
        const category = this.getAttribute('data-category');
        console.log(category);
    
        loadProducts(category);
    });
});

window.onload = function() {
    loadProducts('coffee');
};



// cuộn màn hình 
window.addEventListener('scroll', function(){
    const element = document.getElementsByClassName('container-header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100){
        element.classList.add('scrolled');
    }
    else{
        element.classList.remove('scrolled');
    }
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
 