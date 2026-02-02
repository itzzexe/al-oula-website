import { create } from 'zustand';

interface LanguageState {
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
  toggleLang: () => void;
}

export const useLanguage = create<LanguageState>((set) => ({
  lang: 'ar',
  setLang: (lang) => set({ lang }),
  toggleLang: () => set((state) => ({ lang: state.lang === 'ar' ? 'en' : 'ar' })),
}));

export const translations = {
  ar: {
    heroTitle: "شركة الأولى.. جودة تُخبز، وابتكار يُغلف",
    heroDesc: "المخبوزات الورقية - حيث يلتقي التميز بالاستدامة تحت سقف واحد.",
    aboutTitle: "عالم الأولى للمخبوزات",
    aboutDesc: "نحن في شركة الأولى نؤمن أن المخبوزات ليست مجرد طعام، بل هي دفء ينبعث من الأفران وجودة تُصاغ بكل عناية. نسعى دائمًا لتقديم مزيج مثالي بين الجودة التقليدية والابتكار الحديث في التغليف.",
    excellenceTitle: "جودة لا تضاهى",
    excellenceDesc: "نحن لا نقدم مجرد منتج، بل تجربة متكاملة تتسم بسهولة الاستخدام والجودة التي لا تضاهى في عالم المخبوزات والتغليف.",
    paperBakeryTitle: "المخبوزات الورقية (The Paper Bakery)",
    paperBakeryDesc: "حلول صديقة للبيئة تضمن بقاء مخبوزاتك طازجة وشهية. ابتكار يحافظ على كوكبنا ونكهة منتجاتنا.",
    innovationTitle: "ابتكاراتنا لجعل حياتك أسهل",
    innovationDesc: "من خلال تقنيات التغليف الذكي والتصاميم المريحة، نضمن لك وصول المنتج بأفضل حالة وأسهل طريقة استخدام ممكنة.",
    contactTitle: "جسر التواصل مع الجودة",
    contactDesc: "يسعدنا دائماً سماع ملاحظاتكم واستفساراتكم. تواصلوا معنا لنبدأ رحلة التميز سوياً.",
    products: "منتجاتنا",
    innovations: "ابتكاراتنا",
    contact: "تواصل معنا",
    home: "الرئيسية",
    easyToUse: "سهولة الاستخدام",
    explore: "استكشف المزيد",
    send: "إرسال الرسالة",
    namePlace: "الاسم الكامل",
    emailPlace: "البريد الإلكتروني",
    msgPlace: "رسالتك هنا...",
    discoverWorld: "اكتشف عالمنا",
    ourProductsTitle: "حلول المخبوزات والتغليف",
  },
  en: {
    heroTitle: "Al-Oula Company: Baked Quality, Packaged Innovation",
    heroDesc: "The Paper Bakery - Where excellence meets sustainability under one roof.",
    aboutTitle: "Al-Oula's World of Bakery",
    aboutDesc: "At Al-Oula, we believe bakery isn't just food; it's warmth from the oven and quality crafted with care. We strive to provide a perfect blend of traditional quality and modern packaging innovation.",
    excellenceTitle: "Unmatched Quality",
    excellenceDesc: "We provide a seamless experience characterized by being Easy to Use and offering unmatched quality in Bakery & Packaging.",
    paperBakeryTitle: "The Paper Bakery",
    paperBakeryDesc: "Eco-friendly solutions that ensure your baked goods stay fresh and delicious. Innovation that saves our planet and flavors.",
    innovationTitle: "Innovations to Make Life Easier",
    innovationDesc: "Through smart packaging technologies and ergonomic designs, we ensure your product arrives in best condition and with greatest ease of use.",
    contactTitle: "Your Bridge to Quality",
    contactDesc: "We are always happy to hear your feedback and inquiries. Contact us to start the journey of excellence together.",
    products: "Our Products",
    innovations: "Innovations",
    contact: "Contact Us",
    home: "Home",
    easyToUse: "Easy to Use",
    explore: "Explore More",
    send: "Send Message",
    namePlace: "Full Name",
    emailPlace: "Email Address",
    msgPlace: "Your Message Hero...",
    discoverWorld: "Discover Our World",
    ourProductsTitle: "Bakery & Packaging Solutions",
  }
};
