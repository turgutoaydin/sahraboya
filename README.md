# Sahra Boya - Modern Ürün ve Renk Kataloğu v6.0

![Sahra Boya Arayüz](https://placehold.co/1200x600/0052cc/ffffff?text=Sahra+Boya+Katalog+Ekran+G%C3%B6r%C3%BCnt%C3%BCs%C3%BC)

Bu proje, **Sahra Boya** için geliştirilmiş, modern, tek sayfa uygulama (SPA) benzeri bir ürün ve renk kataloğudur. Kullanıcıların ürünleri kolayca keşfetmesini, filtrelemesini, aramasını ve sipariş listesi oluşturmasını sağlamak amacıyla tasarlanmıştır. Proje, tamamen mobil uyumlu olup, dinamik ve renkli arayüzü ile dikkat çekmektedir.

---

## ✨ Temel Özellikler

- **Dinamik Ürün Slider'ı:** Tüm ürünler, kategorilere göre filtrelenebilen, şık ve kullanışlı bir slider üzerinde gösterilir.
- **Ayrılmış Arama Fonksiyonları:** Ürünler ve RAL renkleri için ayrı arama kutuları ile hedefe yönelik arama imkanı.
- **Gelişmiş Kategori Filtreleme:** Ürünleri kategorilerine göre anında filtreleme.
- **Dinamik RAL Renk Kataloğu:** 200'den fazla rengi içeren tam RAL kataloğu, rastgele sıralanan ve aranabilir bir slider'da sunulur.
- **Panoya Renk Kopyalama:** Beğenilen bir RAL rengine tıklandığında, hex kodu anında panoya kopyalanır ve kullanıcıya görsel geri bildirim verilir.
- **Canlı ve Renkli Tasarım:** Ürün kartları, her yenilendiğinde rastgele RAL renkleriyle renklendirilen dinamik kenarlıklara sahiptir.
- **Estetik Arayüz Elemanları:** Modern ve şık slider yön tuşları, FAB (Floating Action Button) menüsü ve bilgilendirme pencereleri.
- **Sipariş Sepeti (Off-canvas):** Kullanıcılar ürünleri sepete ekleyebilir ve iletişim bilgileriyle birlikte bir sipariş e-postası taslağı oluşturabilir.
- **Tamamen Mobil Uyumlu (Responsive):** Masaüstü bilgisayarlardan tablet ve mobil telefonlara kadar tüm cihazlarda kusursuz bir kullanıcı deneyimi sunar.

---

## 🛠️ Kullanılan Teknolojiler

- **Frontend:**
  - HTML5
  - CSS3 (Custom Properties/Variables)
  - JavaScript (ES6+)
- **Frameworkler & Kütüphaneler:**
  - [Bootstrap 5](https://getbootstrap.com/): Arayüz bileşenleri ve responsive grid yapısı için.
  - [jQuery](https://jquery.com/): Slick Carousel bağımlılığı için.
  - [Slick Carousel](https://kenwheeler.github.io/slick/): Ürün ve renk slider'ları için.
  - [Font Awesome](https://fontawesome.com/): İkonlar için.

---

## 🚀 Kurulum ve Çalıştırma

Bu projeyi yerel makinenizde çalıştırmak için herhangi bir derleme veya kuruluma ihtiyacınız yoktur.

1.  **Depoyu klonlayın:**
    ```bash
    git clone [https://github.com/turgutoaydin/sahraboya.git](https://github.com/turgutoaydin/sahraboya.git)
    ```
2.  **Klasöre gidin:**
    ```bash
    cd sahraboya
    ```
3.  **`index.html` dosyasını açın:**
    - `index.html` dosyasına çift tıklayarak veya favori tarayıcınızda açarak projeyi görüntüleyebilirsiniz.

---

## 📂 Dosya Yapısı

Projenin ana dizin yapısı aşağıdaki gibidir:

/├── assets/│   
            ├── css/│   │   
              └── styles.css        # Ana stil dosyası│   
            ├── js/│   │   
              ├── main.js           # Tüm uygulama mantığı│   │   
              ├── products.js       # Ürün veritabanı│   │
              └── ralcolors-db.js   # RAL renkleri veritabanı│   
           └── images/│       
              └── logo.png          # Şirket logosu│
  └── index.html                # Ana HTML dosyası
---

## 🤝 Katkıda Bulunma

Bu projeye katkıda bulunmak isterseniz, lütfen aşağıdaki adımları izleyin:

1.  Projeyi **Fork**'layın.
2.  Yeni bir **Branch** oluşturun (`git checkout -b ozellik/yeni-ozellik`).
3.  Değişikliklerinizi **Commit**'leyin (`git commit -m 'Yeni bir özellik eklendi'`).
4.  Branch'inizi **Push**'layın (`git push origin ozellik/yeni-ozellik`).
5.  Bir **Pull Request** açın.

---

## 👤 Geliştirici

- **Turgut Özal Aydın**
- GitHub: [@turgutoaydin](https://github.com/turgutoaydin)
- E-posta: <turgutoaydin@gmail.com>

---

## 📜 Lisans

Bu proje [MIT Lisansı](https://choosealicense.com/licenses/mit/) ile lisanslanmıştır.
