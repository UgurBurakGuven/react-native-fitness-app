export default function calculateBodyIndex(weight: number, height: number) {
  const calculated: number = weight / ((height / 100) * (height / 100));
  const BKI: number = Number(calculated.toFixed(2));

  if (BKI < 18.4) {
    return `BKI ınız = ${BKI}    Zayıf Kilolu Sınıfındasınız.`;
  } else if (18.4 <= BKI && BKI < 24.9) {
    return `BKI ınız = ${BKI}    Normal Kilolu Sınıfındasınız.`;
  } else if (24.9 <= BKI && BKI < 29.9) {
    return `BKI ınız = ${BKI}    Kilolu Sınıfındasınız.`;
  } else if (29.9 <= BKI && BKI < 34.9) {
    return `BKI ınız = ${BKI}    1.Derece Obez Sınıfındasınız.`;
  } else if (34.9 <= BKI && BKI < 44.9) {
    return `BKI ınız = ${BKI}    2.Derece Obez Sınıfındasınız.`;
  } else if (45 <= BKI) {
    return `BKI ınız = ${BKI}    3.Derece Obez Sınıfındasınız.`;
  } else {
    return `Lütfen Geçerli Bir Değer Giriniz!`;
  }
}
