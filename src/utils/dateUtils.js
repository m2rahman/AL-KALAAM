const formatEnglishDate = (date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatArabicDate = (date) => {
  return date.toLocaleDateString("ar-SA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatHijriDate = (hijriDate) => {
  if (!hijriDate || !hijriDate.day || !hijriDate.month || !hijriDate.year) {
    return "Invalid Hijri Date";
  }

  const arabicMonths = [
    "محرم",
    "صفر",
    "ربيع الأول",
    "ربيع الثاني",
    "جمادى الأولى",
    "جمادى الآخرة",
    "رجب",
    "شعبان",
    "رمضان",
    "شوال",
    "ذو القعدة",
    "ذو الحجة",
  ];
  const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

  const day = hijriDate.day
    .toString()
    .split("")
    .map((d) => arabicNumerals[parseInt(d)])
    .join("");
  const month = arabicMonths[hijriDate.month - 1];
  const year = hijriDate.year
    .toString()
    .split("")
    .map((y) => arabicNumerals[parseInt(y)])
    .join("");

  return `${day} ${month} ${year} هـ`;
};

export { formatEnglishDate, formatArabicDate, formatHijriDate };
