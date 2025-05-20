# Egzersiz Rehberi Uygulaması

Bu proje, kullanıcıların kas gruplarına göre egzersizleri görüntüleyebileceği, her egzersize ait temel bilgilerin ve görsellerin sunulduğu bir rehber uygulamasıdır.

## ✨ Temel Özellikler

- **Parametrelere Göre Filtreleme:** Kullanıcılar, çalıştırmak istedikleri kas grupları, vücut böölgeleri ve egzersizlerin gerektirdiği ekipmanlardan seçerek ilgili egzersizleri listeleyebilirler.
- **Egzersiz Kart Bilgisi:** Her egzersiz için adı, hedeflediği kas grubu, kullanılan ekipman ve egzersizin nasıl yapıldığını gösteren bir GIF sunulur.
- **Arama Fonksiyonu:** Kullanıcılar, istedikleri egzersiz adı ile de arama yapabilirler.
- **Veri Yönetimi:** Egzersiz verileri **React Query** kullanılarak çekilir. Bu sayede veri cache yönetimi, yükleniyor ve hata durumları ele alınır.
- **Favorilere Ekleme:** Kullanıcılar beğendikleri egzersizleri favorilerine ekleyebilir ve bu favori listesi tarayıcının **localStorage**'ında saklanır. Ayrıca favoriler sayfasında da bu egzersizleri görüntüleyebilirler.

## 🛠️ Kullanılan Teknolojiler

- **React JS**
- **TypeScript**
- **Vite**
- **Axios**
- **React Query**
- **TailwindCSS**
- **Formik & Yup**
- **Toastify**

## 🔌 Kullanılan API

- **ExerciseDB API:** (https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/)

## 🚀 Kurulum ve Başlatma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1.  **Repoyu Klonlayın:**
    ```bash
    git clone [https://github.com/SebileGrgl/exercise-app.git](https://github.com/SebileGrgl/exercise-app.git)
    ```
2.  **Proje Dizinine Gidin:**
    ```bash
    cd exercise-app
    ```
3.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    # veya
    yarn install
    ```
4.  **Geliştirme Sunucusunu Başlatın:**
    ```bash
    npm run dev
    # veya
    yarn dev
    ```

## 📝 Proje Geliştirme Notları ve Mevcut Durum

- _Egzersiz listeleme yapıldı ve filtreleme özellikleri çalışır durumda._
- _TailwindCSS entegrasyonu yapıldı_
- _Favorilere ekleme ve çıkarma fonksiyonu çalışıyor_
- _Form validasyonları Formik ve Yup kütüphaneleri kullanılarak sağlandı._
- _Şu anda Context API, Redux gibi ek yapı/kütüphanelere ihtiyaç duyulmadı. Ancak gerçek bir veritabanı ile çalışıldığında, özellikle kimlik doğrulama işlemleri için bu tür yapılar gerekebilir._
- _Responsive uyumlu bir tasarım yapıldı_
- _Bazı Loading ve error durumları için bildirimler yapım aşamasında. Özellikle Loading kısımları büyük ölçüde eksik ama kısa zamanda ekleniyor olacak._
