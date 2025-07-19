/*
Project: Sahra Boya - Modern Product Catalog
Version: 1.4001
Author: turgutoaydin@gmail.com
Description: This file contains the product data for the application. 
             It exports an array of product objects, each with details like name, price, description, etc.
             A formatted price string is also added to each product object for display purposes.
*/

// Sahra Boya Product Database
const products = [
    {
        id: 1,
        name: "Su Yalıtım Boyası",
        weight: "16 Kg",
        price: 1800.00,
        description: "Su geçirmez özelliği ile bina yalıtımında kullanılan yüksek performanslı boya. Uzun ömürlü ve dayanıklı formülü sayesinde yıllarca koruma sağlar.",
        usage: "Bina çatıları, teraslar, balkonlar, su depoları gibi suya maruz kalan yüzeylerde kullanılır.",
        features: ["Su geçirmezlik", "UV dayanıklı", "Esnek yapı", "Küf ve mantara karşı dirençli"],
        category: "Yalıtım"
    },
    {
        id: 2,
        name: "Tavan Boyası",
        weight: "17.5 Kg",
        price: 450.00,
        description: "İç mekan tavan uygulamaları için özel olarak formüle edilmiş mat boya. Lekeye ve küfe karşı dirençli, kolay uygulanabilir.",
        usage: "Ev, ofis, okul, hastane gibi iç mekan tavan uygulamalarında kullanılır.",
        features: ["Mat bitiş", "Küf önleyici", "Kokusuz", "Hızlı kuruma"],
        category: "İç Cephe"
    },
    {
        id: 3,
        name: "Slikonlu İç Cephe Boyası",
        weight: "20 Kg",
        price: 850.00,
        description: "Nefes alabilen, küf ve mantar oluşumunu engelleyen iç cephe boyası. Silikon bazlı formülü sayesinde uzun süre temiz kalır.",
        usage: "İç mekan duvar uygulamalarında, özellikle nemli ortamlarda kullanılır.",
        features: ["Silikon bazlı", "Nefes alabilir", "Leke tutmaz", "Kolay temizlenebilir"],
        category: "İç Cephe"
    },
    {
        id: 4,
        name: "Slikonlu Dış Cephe Boyası",
        weight: "20 Kg",
        price: 1100.00,
        description: "Dış mekan koşullarına dayanıklı, uzun ömürlü dış cephe boyası. Yağmur, güneş ve rüzgara karşı yüksek direnç gösterir.",
        usage: "Bina dış cephelerinde, bahçe duvarlarında ve dış mekan yüzeylerinde kullanılır.",
        features: ["Hava koşullarına dayanıklı", "UV dirençli", "Toz tutmaz", "Uzun ömürlü"],
        category: "Dış Cephe"
    },
    {
        id: 5,
        name: "Slikonlu Dış Cephe (Koyu Renk)",
        weight: "20 Kg",
        price: 1200.00,
        description: "Koyu renkler için özel formüle edilmiş dış cephe boyası. UV ışınlarına karşı dayanıklı, renk solmasını engeller.",
        usage: "Koyu renk tercih edilen dış cephe uygulamalarında kullanılır.",
        features: ["Renk solmasını önler", "Isı yansıtıcı", "Özel pigmentler içerir", "Uzun süre renk canlılığı"],
        category: "Dış Cephe"
    },
    {
        id: 6,
        name: "Astar Boya (İç - Dış)",
        weight: "20 Kg",
        price: 550.00,
        description: "Hem iç hem dış mekanlarda kullanılabilen çok amaçlı astar boya. Yüzey hazırlığında mükemmel sonuç verir.",
        usage: "Boya öncesi yüzey hazırlığında, tüm yüzeylerde astar olarak kullanılır.",
        features: ["Çift amaçlı", "Yapışmayı artırır", "Emiciliği dengeler", "Korozyon önleyici"],
        category: "Astar"
    },
    {
        id: 7,
        name: "Antipas Boya",
        weight: "15 Kg",
        price: 600.00,
        description: "Metal yüzeylerde pas önleyici olarak kullanılan özel boya. Endüstriyel uygulamalar için idealdir.",
        usage: "Metal çitler, kapılar, makineler ve diğer metal yüzeylerde kullanılır.",
        features: ["Pas önleyici", "Hızlı kuruma", "Yüksek yapışma", "Kimyasal direnç"],
        category: "Özel"
    },
    {
        id: 8,
        name: "Antipas Boya (Kiremit Kırmızı)",
        weight: "15 Kg",
        price: 700.00,
        description: "Kiremit renginde antipas boya, metal yüzeyler için ideal. Dekoratif ve koruyucu özellikleri bir arada sunar.",
        usage: "Metal çatılar, kapılar, bahçe mobilyaları gibi görsel öneme sahip metal yüzeylerde kullanılır.",
        features: ["Dekoratif görünüm", "Pas önleyici", "UV dayanıklı", "Kolay uygulama"],
        category: "Özel"
    },
    {
        id: 9,
        name: "Selülozik Boya (Parlak Gri)",
        weight: "15 Kg",
        price: 1100.00,
        description: "Parlak gri tonlarında selülozik boya, yüksek dayanıklılık sunar. Metal ve ahşap yüzeyler için idealdir.",
        usage: "Mobilya, kapı, pencere gibi ahşap ve metal yüzeylerde son kat olarak kullanılır.",
        features: ["Parlak bitiş", "Hızlı kuruma", "Aşınma direnci", "Kolay uygulama"],
        category: "Selülozik"
    },
    {
        id: 10,
        name: "Selülozik Boya (Renkli)",
        weight: "15 Kg",
        price: 1450.00,
        description: "Canlı renklerde selülozik boya, özel projeler için idealdir. Yüksek pigment içeriği sayesinde mükemmel örtücülük sağlar.",
        usage: "Dekoratif ahşap ve metal yüzeylerde, özel tasarım projelerinde kullanılır.",
        features: ["Canlı renkler", "Yüksek örtücülük", "Parlak bitiş", "Hızlı kuruma"],
        category: "Selülozik"
    },
    {
        id: 11,
        name: "Siyah Selülozik Boya",
        weight: "15 Kg",
        price: 1200.00,
        description: "Parlak siyah selülozik boya, metal ve ahşap yüzeyler için. Yüksek dayanıklılık ve mükemmel görünüm sunar.",
        usage: "Mobilya, kapı, pencere, metal aksesuarlar gibi yüzeylerde kullanılır.",
        features: ["Derin siyah renk", "Parlak bitiş", "Aşınma direnci", "Kolay uygulama"],
        category: "Selülozik"
    },
    {
        id: 12,
        name: "Beyaz Selülozik Boya",
        weight: "15 Kg",
        price: 1200.00,
        description: "Parlak beyaz selülozik boya, temiz ve modern bir görünüm sağlar. Ahşap ve metal yüzeyler için idealdir.",
        usage: "Mobilya, mutfak dolapları, kapı ve pencereler gibi yüzeylerde kullanılır.",
        features: ["Parlak beyaz", "Leke tutmaz", "Kolay temizlenir", "Dayanıklı"],
        category: "Selülozik"
    },
    {
        id: 13,
        name: "Selülozik Tiner",
        weight: "2.5 Lt",
        price: 245.00,
        description: "Selülozik boyaların inceltilmesi ve temizliği için kullanılan tiner. Yüksek çözücü gücüne sahiptir.",
        usage: "Selülozik boyaların inceltilmesi, fırça ve ekipman temizliğinde kullanılır.",
        features: ["Hızlı buharlaşma", "Yüksek çözücü gücü", "Kaliteli bileşenler", "Etkili temizlik"],
        category: "Aksesuar"
    }
];

// Add a formatted price string to each product for easier display
products.forEach(product => {
    product.formattedPrice = product.price.toLocaleString('tr-TR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + ' ₺';
});