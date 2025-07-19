/*
Project: Sahra Boya - Yenilikçi Katalog v6.0
Author: turgutoaydin@gmail.com
Description: Dinamik renkli kart kenarlıkları, ayrılmış arama fonksiyonları,
             rastgele slider sıralaması ve tam mobil uyumluluk.
*/

document.addEventListener('DOMContentLoaded', () => {
    // Uygulamanın ana nesnesi
    const sahraBoyaApp = {
        // --- UYGULAMA DURUMU (STATE) ---
        cart: [],
        currentFilter: 'Tümü',

        // --- DOM ELEMENTLERİ ---
        elements: {
            productSearch: document.getElementById('productSearch'),
            ralSearch: document.getElementById('ralSearch'), // Yeni RAL arama kutusu
            categoryDropdownMenu: document.getElementById('categoryDropdownMenu'),
            categoryDropdownButton: document.getElementById('categoryDropdown'),
            mobileCategoryFilters: document.getElementById('mobileCategoryFilters'),
            cartBadge: document.getElementById('cart-badge'),
            orderContentWrapper: document.getElementById('order-content-wrapper'),
            productDetailContent: document.getElementById('productDetailContent'),
            mainFab: document.getElementById('mainFab'),
            
            // Slider'lar ve Kontrolleri
            productSlider: document.getElementById('productSlider'),
            productPrev: document.querySelector('.product-prev'),
            productNext: document.querySelector('.product-next'),
            ralColorSlider: document.querySelector('.ral-color-slider'),
            ralPrev: document.querySelector('.ral-prev'),
            ralNext: document.querySelector('.ral-next'),
        },

        // --- BOOTSTRAP NESNELERİ ---
        modals: {
            productDetail: null,
            orderCart: null,
            notificationToast: null,
            mobileFilter: null,
        },

        // --- BAŞLATMA ---
        init() {
            this.initBootstrap();
            this.loadCart();
            this.setupEventListeners();
            this.renderCategories();
            this.renderContent();
            this.renderCart();
        },

        // --- KURULUM FONKSİYONLARI ---
        initBootstrap() {
            this.modals.productDetail = new bootstrap.Offcanvas(document.getElementById('productDetailOffcanvas'));
            this.modals.orderCart = new bootstrap.Offcanvas(document.getElementById('orderOffcanvas'));
            this.modals.notificationToast = new bootstrap.Toast(document.getElementById('notificationToast'));
            this.modals.mobileFilter = new bootstrap.Offcanvas(document.getElementById('mobileFilterOffcanvas'));
        },

        setupEventListeners() {
            // Arama kutuları için olay dinleyicileri
            this.elements.productSearch.addEventListener('input', () => this.renderProductSlider());
            this.elements.ralSearch.addEventListener('input', () => this.renderRalColorSlider());

            // Kategori filtreleme
            const categoryFilterHandler = (category) => {
                this.currentFilter = category;
                this.elements.categoryDropdownButton.textContent = this.currentFilter;
                this.renderCategories(); // Aktif durumu güncelle
                this.renderProductSlider(); // Sadece ürün slider'ını güncelle
            };

            this.elements.categoryDropdownMenu.addEventListener('click', (e) => {
                if (e.target.matches('.dropdown-item')) {
                    categoryFilterHandler(e.target.dataset.category);
                }
            });

            this.elements.mobileCategoryFilters.addEventListener('click', (e) => {
                if (e.target.matches('.filter-btn')) {
                    categoryFilterHandler(e.target.dataset.category);
                    this.modals.mobileFilter.hide();
                }
            });

            // Dinamik elementler için olay delegasyonu (Mobil off-canvas sorununu çözer)
            document.querySelector('main').addEventListener('click', (e) => {
                const productCard = e.target.closest('.product-card');
                const colorCard = e.target.closest('.ral-color-card');

                if (productCard) {
                    e.preventDefault();
                    this.showProductDetail(Number(productCard.dataset.productId));
                }
                if (colorCard) {
                    this.copyColorToClipboard(colorCard.dataset.hex, colorCard.dataset.ral, colorCard);
                }
            });
            
            // Diğer dinamik butonlar
            document.body.addEventListener('click', (e) => {
                if (e.target.matches('.quantity-change')) this.handleQuantityChange(e.target);
                if (e.target.matches('.add-to-cart-btn')) this.addToCart(Number(e.target.dataset.productId));
                if (e.target.matches('.remove-from-cart-btn')) this.removeFromCart(Number(e.target.dataset.productId));
            });
            
            this.elements.mainFab.addEventListener('click', () => document.querySelector('.fab-container').classList.toggle('active'));
            
            document.getElementById('orderOffcanvas').addEventListener('submit', (e) => {
                if (e.target.id === 'orderForm') { e.preventDefault(); this.handleOrderSubmit(e.target); }
            });

            // Slider kontrol butonları
            this.elements.productPrev.addEventListener('click', () => $(this.elements.productSlider).slick('slickPrev'));
            this.elements.productNext.addEventListener('click', () => $(this.elements.productSlider).slick('slickNext'));
            this.elements.ralPrev.addEventListener('click', () => $(this.elements.ralColorSlider).slick('slickPrev'));
            this.elements.ralNext.addEventListener('click', () => $(this.elements.ralColorSlider).slick('slickNext'));
        },

        // --- SLIDER BAŞLATMA ---
        initSlickSlider(element, options) {
            if ($(element).hasClass('slick-initialized')) $(element).slick('unslick');
            $(element).slick(options);
        },

        // --- İÇERİK GÖRSELLEŞTİRME (RENDERING) ---
        renderContent() {
            this.renderProductSlider();
            this.renderRalColorSlider();
        },

        renderProductSlider() {
            const searchTerm = this.elements.productSearch.value.toLowerCase().trim();
            let productSource = [...products];

            // "Tümü" seçiliyse ve arama kutusu boşsa ürünleri karıştır
            if (this.currentFilter === 'Tümü' && searchTerm === '') {
                productSource.sort(() => 0.5 - Math.random());
            }

            const filteredProducts = productSource.filter(product => {
                const matchesCategory = this.currentFilter === 'Tümü' || product.category === this.currentFilter;
                const matchesSearch = searchTerm === '' || product.name.toLowerCase().includes(searchTerm) || product.category.toLowerCase().includes(searchTerm);
                return matchesCategory && matchesSearch;
            });

            this.elements.productSlider.innerHTML = filteredProducts.map(product => this.createProductCardHTML(product)).join('');
            
            if (filteredProducts.length > 0) {
                this.initSlickSlider(this.elements.productSlider, {
                    slidesToShow: 4, slidesToScroll: 4, infinite: false, arrows: false,
                    responsive: [{ breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 3 } }, { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } }]
                });
            } else {
                this.elements.productSlider.innerHTML = `<div class="text-center py-4 text-muted">Aramanızla eşleşen ürün bulunamadı.</div>`;
            }
        },

        renderRalColorSlider() {
            const searchTerm = this.elements.ralSearch.value.toLowerCase().trim();
            let colorSource = [...ralColors].sort(() => 0.5 - Math.random()); // Her zaman karıştır

            const filteredColors = colorSource.filter(color => {
                return searchTerm === '' || color.ral.toLowerCase().includes(searchTerm) || color.hex.includes(searchTerm);
            });

            this.elements.ralColorSlider.innerHTML = filteredColors.map(color => this.createRalCardHTML(color)).join('');
            
            if (filteredColors.length > 0) {
                this.initSlickSlider(this.elements.ralColorSlider, {
                    slidesToShow: 8, slidesToScroll: 8, infinite: false, arrows: false,
                    responsive: [{ breakpoint: 1200, settings: { slidesToShow: 6, slidesToScroll: 6 } }, { breakpoint: 768, settings: { slidesToShow: 4, slidesToScroll: 4 } }, { breakpoint: 576, settings: { slidesToShow: 3, slidesToScroll: 3 } }]
                });
            } else {
                this.elements.ralColorSlider.innerHTML = `<div class="text-center py-4 text-muted">Aramanızla eşleşen RAL kodu bulunamadı.</div>`;
            }
        },

        renderCategories() {
            const categories = ['Tümü', ...new Set(products.map(p => p.category))];
            const createItem = (cat) => `<li><a class="dropdown-item ${this.currentFilter === cat ? 'active' : ''}" href="#" data-category="${cat}">${cat}</a></li>`;
            this.elements.categoryDropdownMenu.innerHTML = categories.map(createItem).join('');
            
            const createMobileBtn = (cat) => `<button type="button" class="btn btn-outline-secondary w-100 text-start filter-btn ${this.currentFilter === cat ? 'active' : ''}" data-category="${cat}">${cat}</button>`;
            this.elements.mobileCategoryFilters.innerHTML = categories.map(createMobileBtn).join('');
        },

        // --- HTML OLUŞTURMA YARDIMCILARI ---
        getRandomRalColor() {
            return ralColors[Math.floor(Math.random() * ralColors.length)].hex;
        },
        createProductCardHTML(product) {
            const borderColor = this.getRandomRalColor();
            return `<div><div class="card h-100 product-card" data-product-id="${product.id}" style="border-color: ${borderColor};"><div class="card-body"><h5 class="card-title">${product.name}</h5><p class="card-text small text-muted">${product.weight}</p></div><div class="card-footer d-flex justify-content-between align-items-center"><span class="product-price">${product.formattedPrice}</span><span class="text-primary fw-bold small">Detaylar <i class="fas fa-arrow-right"></i></span></div></div></div>`;
        },
        createRalCardHTML(color) {
            return `<div><div class="ral-color-card" data-hex="${color.hex}" data-ral="${color.ral}"><div class="color-preview" style="background-color: ${color.hex};"></div><div class="color-info"><p class="ral-code">${color.ral}</p><p class="hex-code">${color.hex}</p></div></div></div>`;
        },

        // --- AKSİYONLAR VE MANTIK ---
        copyColorToClipboard(hex, ral, cardElement) {
            navigator.clipboard.writeText(hex).then(() => {
                this.showToast(`${ral} - ${hex} panoya kopyalandı!`);
                const infoElement = cardElement.querySelector('.color-info');
                const originalHTML = infoElement.innerHTML;
                infoElement.innerHTML = `<p class="ral-code text-success fw-bold">Kopyalandı!</p>`;
                setTimeout(() => { infoElement.innerHTML = originalHTML; }, 1500);
            }).catch(err => { this.showToast('Renk kopyalanamadı!', 'danger'); });
        },
        
        // Bu fonksiyonlar değişmediği için içeriğini tekrar yazmaya gerek yok.
        handleQuantityChange(target) { /* ... */ },
        showProductDetail(productId) { /* ... */ },
        addToCart(productId) { /* ... */ },
        removeFromCart(productId) { /* ... */ },
        handleOrderSubmit(form) { /* ... */ },
        renderCart() { /* ... */ },
        saveCart() { /* ... */ },
        loadCart() { /* ... */ },
        showToast(message, type = "success") { /* ... */ }
    };

    // Değişmeyen fonksiyonları (DRY prensibi) ana nesneye ekleyelim
    Object.assign(sahraBoyaApp, {
        handleQuantityChange(target) { const inputId = target.dataset.inputId; const amount = Number(target.dataset.amount); const quantityInput = document.getElementById(inputId); let currentValue = parseInt(quantityInput.value) + amount; if (currentValue < 1) currentValue = 1; quantityInput.value = currentValue; },
        showProductDetail(productId) { const product = products.find(p => p.id === productId); this.elements.productDetailContent.innerHTML = `<h3 class="mb-2">${product.name}</h3><div class="d-flex align-items-center mb-3"><span class="badge bg-primary me-2">${product.category}</span><span class="text-muted"><i class="fas fa-weight-hanging me-1"></i>${product.weight}</span></div><h2 class="text-primary mb-4">${product.formattedPrice}</h2><div class="mb-4"><h5 class="fw-bold mb-2">Açıklama</h5><p>${product.description}</p></div><div class="mb-4"><h5 class="fw-bold mb-2">Kullanım Alanları</h5><p>${product.usage}</p></div><div class="mb-4"><h5 class="fw-bold mb-2">Özellikler</h5><ul class="list-group list-group-flush">${product.features.map(f => `<li class="list-group-item px-0"><i class="fas fa-check text-success me-2"></i>${f}</li>`).join('')}</ul></div><div class="d-flex align-items-center justify-content-between mt-auto p-3 bg-light rounded sticky-bottom"><div class="quantity-selector"><button class="btn btn-outline-secondary quantity-change" type="button" data-input-id="quantity-${product.id}" data-amount="-1">-</button><input type="number" id="quantity-${product.id}" class="form-control text-center" value="1" min="1" readonly><button class="btn btn-outline-secondary quantity-change" type="button" data-input-id="quantity-${product.id}" data-amount="1">+</button></div><button class="btn btn-primary fw-bold add-to-cart-btn" data-product-id="${product.id}"><i class="fas fa-cart-plus me-2"></i>Siparişe Ekle</button></div>`; this.modals.productDetail.show(); },
        addToCart(productId) { const quantity = parseInt(document.getElementById(`quantity-${productId}`).value); const existingItem = this.cart.find(item => item.id === productId); if (existingItem) { existingItem.quantity += quantity; } else { this.cart.push({ id: productId, quantity: quantity }); } this.saveCart(); this.renderCart(); this.showToast(`${products.find(p=>p.id===productId).name} sepete eklendi.`); },
        removeFromCart(productId) { this.cart = this.cart.filter(item => item.id !== productId); this.saveCart(); this.renderCart(); this.showToast("Ürün sepetten kaldırıldı.", "warning"); },
        handleOrderSubmit(form) { if (!form.checkValidity()) { form.classList.add('was-validated'); return; } const orderDetails = this.prepareOrder(form); const mailtoLink = `mailto:turgutoaydin@gmail.com,sahraboyakimya@gmail.com?subject=${encodeURIComponent(orderDetails.subject)}&body=${encodeURIComponent(orderDetails.body)}`; window.location.href = mailtoLink; this.cart = []; this.saveCart(); this.renderCart(); form.reset(); form.classList.remove('was-validated'); this.modals.orderCart.hide(); this.showToast("Sipariş e-postanız oluşturuldu!", "success"); },
        prepareOrder(form) { const name = form.elements.name.value; let orderText = `SAHRA BOYA SİPARİŞ FORMU\n\nMüşteri Bilgileri:\n-------------------\nAd Soyad: ${name}\nŞirket: ${form.elements.company.value || 'Belirtilmemiş'}\nE-posta: ${form.elements.email.value}\nTelefon: ${form.elements.phone.value}\n\nSipariş Detayları:\n-------------------\n`; let total = 0; this.cart.forEach(item => { const product = products.find(p => p.id === item.id); const itemTotal = product.price * item.quantity; total += itemTotal; orderText += `${product.name} (${product.weight}) - ${item.quantity} adet x ${product.price.toFixed(2)} ₺ = ${itemTotal.toFixed(2)} ₺\n`; }); orderText += `-------------------\nTOPLAM: ${total.toFixed(2)} ₺\n\nNotlar: ${form.elements.notes.value || 'Yok'}\n\nSipariş Tarihi: ${new Date().toLocaleString('tr-TR')}`; return { subject: `Yeni Sipariş - ${name}`, body: orderText }; },
        renderCart() { /* ... */ },
        saveCart() { localStorage.setItem('sahraBoyaCart', JSON.stringify(this.cart)); },
        loadCart() { this.cart = JSON.parse(localStorage.getItem('sahraBoyaCart')) || []; },
        showToast(message, type = "success") { const toastEl = document.getElementById('notificationToast'); const header = toastEl.querySelector('.toast-header'); const icon = toastEl.querySelector('#toast-icon'); const title = toastEl.querySelector('#toast-title'); header.className = 'toast-header text-white'; icon.className = 'me-2'; switch(type) { case 'warning': header.classList.add('bg-warning'); icon.classList.add('fas', 'fa-exclamation-triangle'); title.textContent = 'Uyarı'; break; case 'danger': header.classList.add('bg-danger'); icon.classList.add('fas', 'fa-times-circle'); title.textContent = 'Hata'; break; default: header.classList.add('bg-success'); icon.classList.add('fas', 'fa-check-circle'); title.textContent = 'Başarılı'; break; } toastEl.querySelector('#toast-body-content').textContent = message; this.modals.notificationToast.show(); }
    });
    
    // Uygulamayı başlat!
    sahraBoyaApp.init();
});
