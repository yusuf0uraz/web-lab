# KPSS 10 Gün Kampı

KPSS Ortaöğretim için son 10 gün tekrar sitesi. iPad Safari için tasarlandı.

- **Ana sayfa:** sınava geri sayım, 10 günlük plan, ders bazında ilerleme
- **Kartlar:** dokun-çevir, sağa kaydır "Bildim", sola kaydır "Bilemedim". Bilinemeyen kart birkaç kart sonra tekrar gelir, sonraki turlarda önceliklidir.
- **Test:** ÖSYM tarzı 5 şıklı sorular, anında açıklama
- **Deneme:** gerçek dağılımla süreli deneme, net hesabı, kaldığı yerden devam
- **Yanlışlarım / Bilemediklerim:** sadece hata yapılanlar
- **Mektuplar:** çalıştıkça açılan motivasyon mesajları

İlerleme tarayıcının `localStorage` alanında saklanır (giriş yok).

## Geliştirme

```bash
cd kpss
npm install
npm run dev
```

## İçerik ekleme

- Kartlar ve sorular `src/data/<ders>.ts` dosyalarında.
- Kendi sorularını (ör. çıkmış sorular) `src/data/ekstra.ts` dosyasına ekle; örnek format dosyanın içinde.
- Sınav tarihi ve isim: `src/config.ts`. Plan: `src/data/plan.ts`. Mesajlar: `src/data/motivation.ts`.

## Yayın

`main` dalına push edildiğinde `.github/workflows/kpss-pages.yml` siteyi GitHub Pages'e yayınlar
(Repo › Settings › Pages › Source: **GitHub Actions** seçili olmalı).
Adres: `https://yusuf0uraz.github.io/web-lab/`
