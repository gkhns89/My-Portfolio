// Kodları environment variables'dan al
// .env dosyasında tanımlanmalı: REACT_APP_FIRMA_CODE=kod-buraya
const CODES = {
  "ifcc-2025": {
    code: process.env.REACT_APP_IFCC_CODE,
    expiresAt: "2025-11-12", // YYYY-MM-DD formatında (28 Ekim + 15 gün)
  },
  "mobi-2025": {
    code: process.env.REACT_APP_MOBI_CODE,
    expiresAt: "2025-11-27", // YYYY-MM-DD formatında (28 Ekim + 15 gün)
  },

};

export const quotesData = {
  "ifcc-2025": {
    companyName: "IFCC Endüstri",  // Firma adı - sorun değil
    quotes: [
      {
        id: 1,
        title: "Web Sitesi Bakım Teklifi",  // Genel başlık - detay YOK
        date: "28 Ekim 2025",
        path: "/quotes/ifcc/",  // HTML'e yönlendir
        status: "active",
        validUntil: "12 Kasım 2025",
      }
    ]
  },
  "mobi-2025": {
    companyName: "Mobikur Mobilya",  // Firma adı - sorun değil
    quotes: [
      {
        id: 1,
        title: "Web Sitesi Bakım Teklifi",  // Genel başlık - detay YOK
        date: "12 Kasım 2025",
        path: "/quotes/mobikur/",  // HTML'e yönlendir
        status: "active",
        validUntil: "27 Kasım 2025",
      }
    ]
  },
};


const isExpired = (expiryDate) => {
  if (!expiryDate) return false;
  const today = new Date();
  const expiry = new Date(expiryDate);
  today.setHours(0, 0, 0, 0); // Saat bilgisini sıfırla
  expiry.setHours(0, 0, 0, 0);
  return today > expiry;
};

// Kod doğrulama fonksiyonu (expire kontrolü ile)
export const validateCode = (inputCode) => {
  // Girilen kodu tüm kodlarla karşılaştır
  for (const [companyKey, codeData] of Object.entries(CODES)) {
    const validCode = codeData.code;
    const expiresAt = codeData.expiresAt;
    
    if (validCode && inputCode.trim().toUpperCase() === validCode.toUpperCase()) {
      // Kod doğru, şimdi tarihi kontrol et
      if (isExpired(expiresAt)) {
        return {
          isValid: false,
          companyKey: null,
          company: null,
          reason: "expired",
          expiryDate: expiresAt,
        };
      }
      
      // Her şey tamam
      return {
        isValid: true,
        companyKey: companyKey,
        company: quotesData[companyKey],
        expiresAt: expiresAt,
      };
    }
  }
  
  // Kod bulunamadı
  return {
    isValid: false,
    companyKey: null,
    company: null,
    reason: "invalid",
  };
};

// Development modunda kontrol için
if (process.env.NODE_ENV === 'development') {
  console.log('🔐 Environment Variables Check:');
  Object.entries(CODES).forEach(([key, data]) => {
    const hasCode = data.code ? '✅' : '❌';
    const expired = isExpired(data.expiresAt) ? '⏰ SÜRESİ DOLDU' : '✅ Geçerli';
    console.log(`${key}: ${hasCode} Tanımlı | ${expired} (${data.expiresAt})`);
  });
}