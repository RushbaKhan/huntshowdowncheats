import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface Language {
  code: string;
  label: string;
  flag: string;
}

export const LANGUAGES: Language[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Francais', flag: '🇫🇷' },
  { code: 'es', label: 'Espanol', flag: '🇪🇸' },
  { code: 'pt', label: 'Portugues', flag: '🇧🇷' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'tr', label: 'Turkce', flag: '🇹🇷' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'th', label: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', label: 'Tieng Viet', flag: '🇻🇳' },
];

const translations: Record<string, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.buy': 'Get Cheats',
    'hero.status': 'Undetected · Updated for latest Hunt Showdown patch',
    'hero.subtitle': 'Aimbot, ESP & Triggerbot',
    'hero.description': 'Dominate Hunt Showdown effortlessly with undetected aimbot, full ESP, triggerbot, radar, and wallhack. Stream-proof mode. Updated after every patch.',
    'hero.cta': 'Get Hunt Showdown Cheats',
    'hero.features': 'See Features',
    'hero.trust': 'Windows 10 & 11 · Easy Anti-Cheat · Stream-Proof Mode · Cloud-DMA',
    'meta.title': 'Hunt Showdown Cheats – Undetected Aimbot, ESP & Triggerbot | huntshowdowncheats.com',
    'meta.description': 'Hunt Showdown cheats with undetected aimbot, ESP, triggerbot, radar and wallhack. Stream-proof, updated every patch.',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.blog': 'Blog',
    'nav.buy': 'Cheats Kaufen',
    'hero.status': 'Unerkannt · Aktualisiert fur Crytek Patch',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': 'Dominiere jeden Raid in Cryteks Hunt Showdown. Hunt Showdown Cheats mit unerkanntem Aimbot, vollem ESP, Wallhack und Loot-Highlights.',
    'hero.cta': 'Hunt Showdown Cheats Kaufen',
    'hero.features': 'Features Ansehen',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Extern & Unerkannt',
    'meta.title': 'Hunt Showdown Cheats – Unerkannter Aimbot & ESP fur Crytek Hunt Showdown',
    'meta.description': 'Hunt Showdown Cheats mit unerkanntem Aimbot und ESP fur Crytek Hunt Showdown.',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.blog': 'Blog',
    'nav.buy': 'Acheter',
    'hero.status': 'Indetecte · Mis a jour pour Crytek patch',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': "Dominez chaque chasse dans Hunt Showdown de Crytek. Hunt Showdown cheats avec aimbot indetecte, ESP complet, wallhack.",
    'hero.cta': 'Obtenir Hunt Showdown Cheats',
    'hero.features': 'Voir Les Fonctionnalites',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Externe & Indetecte',
    'meta.title': 'Hunt Showdown Cheats – Aimbot & ESP Indetecte pour Crytek Hunt Showdown',
    'meta.description': "Hunt Showdown cheats avec aimbot et ESP indetectes pour Hunt Showdown de Crytek.",
  },
  es: {
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'nav.buy': 'Comprar',
    'hero.status': 'Indetectable · Actualizado para parche Crytek',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': 'Domina cada incursion en Hunt Showdown de Crytek. Hunt Showdown cheats con aimbot indetectable, ESP completo, wallhack.',
    'hero.cta': 'Obtener Hunt Showdown Cheats',
    'hero.features': 'Ver Funciones',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Externo e Indetectable',
    'meta.title': 'Hunt Showdown Cheats – Aimbot & ESP Indetectable para Crytek Hunt Showdown',
    'meta.description': 'Hunt Showdown cheats con aimbot y ESP indetectables para Hunt Showdown de Crytek.',
  },
  pt: {
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'nav.buy': 'Comprar',
    'hero.status': 'Indetectavel · Atualizado para patch Crytek',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': 'Domine cada caca no Hunt Showdown da Crytek. Hunt Showdown cheats com aimbot indetectavel, ESP completo, wallhack.',
    'hero.cta': 'Obter Hunt Showdown Cheats',
    'hero.features': 'Ver Recursos',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Externo & Indetectavel',
    'meta.title': 'Hunt Showdown Cheats – Aimbot & ESP Indetectavel para Crytek Hunt Showdown',
    'meta.description': 'Hunt Showdown cheats com aimbot e ESP indetectaveis para Hunt Showdown da Crytek.',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.blog': 'Блог',
    'nav.buy': 'Купить',
    'hero.status': 'Необнаруживаемый · Обновлен для патча Crytek',
    'hero.subtitle': 'Аимбот, ESP и Wallhack',
    'hero.description': 'Доминируйте в каждом рейде в Hunt Showdown от Crytek. Hunt Showdown читы с необнаруживаемым аимботом, полным ESP, валхаком.',
    'hero.cta': 'Получить Hunt Showdown Читы',
    'hero.features': 'Смотреть Функции',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Внешний & Необнаруживаемый',
    'meta.title': 'Hunt Showdown Читы – Необнаруживаемый Аимбот & ESP для Crytek Hunt Showdown',
    'meta.description': 'Hunt Showdown читы с необнаруживаемым аимботом и ESP для Hunt Showdown от Crytek.',
  },
  zh: {
    'nav.home': '首页',
    'nav.blog': '博客',
    'nav.buy': '购买',
    'hero.status': '未检测 · 已更新至Crytek补丁',
    'hero.subtitle': '自瞄, 透视 & 穿墙',
    'hero.description': '在Crytek的Hunt Showdown中称霸每场突袭。Hunt Showdown作弊器提供未检测自瞄、完整ESP和穿墙。',
    'hero.cta': '获取Hunt Showdown作弊器',
    'hero.features': '查看功能',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · 外部 & 未检测',
    'meta.title': 'Hunt Showdown作弊器 – 未检测自瞄和ESP用于Crytek Hunt Showdown',
    'meta.description': 'Hunt Showdown作弊器，为Crytek Hunt Showdown提供未检测的自瞄和ESP。',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.blog': 'ブログ',
    'nav.buy': '購入',
    'hero.status': '未検出 · Crytekパッチ対応済み',
    'hero.subtitle': 'エイムボット、ESP & ウォールハック',
    'hero.description': 'CrytekのHunt Showdownで全レイドを制覇。Hunt Showdownチートで未検出エイムボット、完全なESP、ウォールハック。',
    'hero.cta': 'Hunt Showdownチートを入手',
    'hero.features': '機能を見る',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · 外部 & 未検出',
    'meta.title': 'Hunt Showdownチート – 未検出エイムボットとESP for Crytek Hunt Showdown',
    'meta.description': 'Crytek Hunt Showdown用の未検出エイムボットとESPを備えたHunt Showdownチート。',
  },
  ko: {
    'nav.home': '홈',
    'nav.blog': '블로그',
    'nav.buy': '구매',
    'hero.status': '미탐지 · Crytek 패치 업데이트됨',
    'hero.subtitle': '에임봇, ESP & 월핵',
    'hero.description': 'Crytek의 Hunt Showdown에서 모든 레이드를 지배하세요. Hunt Showdown 치트로 미탐지 에임봇, 완전한 ESP, 월핵.',
    'hero.cta': 'Hunt Showdown 치트 받기',
    'hero.features': '기능 보기',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · 외부 & 미탐지',
    'meta.title': 'Hunt Showdown 치트 – 미탐지 에임봇 & ESP for Crytek Hunt Showdown',
    'meta.description': 'Crytek Hunt Showdown용 미탐지 에임봇과 ESP가 포함된 Hunt Showdown 치트.',
  },
  tr: {
    'nav.home': 'Anasayfa',
    'nav.blog': 'Blog',
    'nav.buy': 'Satin Al',
    'hero.status': 'Tespit Edilemez · Crytek yaması guncellendi',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': "Crytek'nin Hunt Showdown'inda her baskinda domine edin. Hunt Showdown hileleri ile tespit edilemez aimbot, tam ESP, wallhack.",
    'hero.cta': 'Hunt Showdown Hilesini Al',
    'hero.features': 'Ozellikleri Gor',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Harici & Tespit Edilemez',
    'meta.title': 'Hunt Showdown Hileler – Tespit Edilemez Aimbot & ESP for Crytek Hunt Showdown',
    'meta.description': "Crytek Hunt Showdown için tespit edilemez aimbot ve ESP içeren Hunt Showdown hilesi.",
  },
  pl: {
    'nav.home': 'Strona Glowna',
    'nav.blog': 'Blog',
    'nav.buy': 'Kup',
    'hero.status': 'Niewykrywalny · Zaktualizowany dla latki Crytek',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': 'Zdominuj kazdy rajd w Hunt Showdown od Crytek. Hunt Showdown cheati z niewykrywalnym aimbotem, pelnym ESP, wallhackiem.',
    'hero.cta': 'Zdobadz Hunt Showdown Cheat',
    'hero.features': 'Zobacz Funkcje',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Zewnetrzny & Niewykrywalny',
    'meta.title': 'Hunt Showdown Cheaty – Niewykrywalny Aimbot & ESP dla Crytek Hunt Showdown',
    'meta.description': 'Hunt Showdown cheaty z niewykrywalnym aimbotem i ESP dla Hunt Showdown od Crytek.',
  },
  nl: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.buy': 'Koop',
    'hero.status': 'Ondetecteerbaar · Bijgewerkt voor Crytek patch',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': "Domineer elke jacht in Crytek's Hunt Showdown. Hunt Showdown cheats met ondetecteerbare aimbot, volledige ESP, wallhack.",
    'hero.cta': 'Hunt Showdown Cheats Verkrijgen',
    'hero.features': 'Functies Bekijken',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Extern & Ondetecteerbaar',
    'meta.title': 'Hunt Showdown Cheats – Ondetecteerbare Aimbot & ESP voor Crytek Hunt Showdown',
    'meta.description': "Hunt Showdown cheats met ondetecteerbare aimbot en ESP voor Crytek's Hunt Showdown.",
  },
  it: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.buy': 'Acquista',
    'hero.status': 'Non rilevabile · Aggiornato per patch Crytek',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': "Domina ogni caccia nello Hunt Showdown di Crytek. Hunt Showdown cheats con aimbot non rilevabile, ESP completo, wallhack.",
    'hero.cta': 'Ottieni Hunt Showdown Cheats',
    'hero.features': 'Vedi Funzionalita',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Esterno & Non Rilevabile',
    'meta.title': 'Hunt Showdown Cheats – Aimbot & ESP Non Rilevabile per Crytek Hunt Showdown',
    'meta.description': 'Hunt Showdown cheats con aimbot e ESP non rilevabili per Hunt Showdown di Crytek.',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.blog': 'المدونة',
    'nav.buy': 'شراء',
    'hero.status': 'غير قابل للكشف · محدث لـ Crytek تحديث',
    'hero.subtitle': 'ايمبوت، ESP وولهاك',
    'hero.description': 'سيطر على كل غارة في Hunt Showdown من Crytek. Hunt Showdown cheats مع aimbot غير قابل للكشف، ESP كامل، wallhack.',
    'hero.cta': 'احصل على Hunt Showdown Cheats',
    'hero.features': 'عرض المميزات',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · خارجي وغير قابل للكشف',
    'meta.title': 'Hunt Showdown Cheats – ايمبوت وESP غير قابل للكشف لـ Crytek Hunt Showdown',
    'meta.description': 'Hunt Showdown cheats مع aimbot وESP غير قابلين للكشف للعبة Hunt Showdown من Crytek.',
  },
  th: {
    'nav.home': 'หน้าหลัก',
    'nav.blog': 'บล็อก',
    'nav.buy': 'ซื้อ',
    'hero.status': 'ตรวจไม่พบ · อัปเดตสำหรับ Crytek แพทช์',
    'hero.subtitle': 'เอมบอท, ESP & วอลแฮค',
    'hero.description': 'ครองทุกเรดใน Hunt Showdown ของ Crytek. Hunt Showdown cheats พร้อม aimbot ตรวจไม่พบ, ESP เต็มรูปแบบ, wallhack.',
    'hero.cta': 'รับ Hunt Showdown Cheats',
    'hero.features': 'ดูฟีเจอร์',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · ภายนอก & ตรวจไม่พบ',
    'meta.title': 'Hunt Showdown Cheats – เอมบอทและ ESP ตรวจไม่พบสำหรับ Crytek Hunt Showdown',
    'meta.description': 'Hunt Showdown cheats พร้อม aimbot และ ESP ตรวจไม่พบสำหรับ Hunt Showdown ของ Crytek.',
  },
  vi: {
    'nav.home': 'Trang Chu',
    'nav.blog': 'Blog',
    'nav.buy': 'Mua',
    'hero.status': 'Khong bi phat hien · Cap nhat cho ban va Crytek',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': 'Thong tri moi cuoc dot kich trong Hunt Showdown cua Crytek. Hunt Showdown cheats voi aimbot khong bi phat hien, ESP day du, wallhack.',
    'hero.cta': 'Nhan Hunt Showdown Cheats',
    'hero.features': 'Xem Tinh Nang',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Ben Ngoai & Khong Bi Phat Hien',
    'meta.title': 'Hunt Showdown Cheats – Aimbot & ESP Khong Bi Phat Hien cho Crytek Hunt Showdown',
    'meta.description': 'Hunt Showdown cheats voi aimbot va ESP khong bi phat hien cho Hunt Showdown cua Crytek.',
  },
};

interface I18nContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState(() => {
    const stored = localStorage.getItem('lang');
    if (stored && translations[stored]) return stored;
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) return browserLang;
    return 'en';
  });

  const setLang = (newLang: string) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    updateMetaTags(newLang);
    updateHreflangLinks();
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    updateHreflangLinks();
  }, []);

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

function updateMetaTags(lang: string) {
  const t = translations[lang] || translations.en;
  const title = t['meta.title'] || translations.en['meta.title'];
  const description = t['meta.description'] || translations.en['meta.description'];
  document.title = title;
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.setAttribute('content', description);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', lang === 'en' ? 'en_US' : `${lang}_${lang.toUpperCase()}`);
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', title);
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', description);
}

function updateHreflangLinks() {
  document.querySelectorAll('link[hreflang]').forEach(el => el.remove());
  const base = 'https://huntshowdowncheats.com';
  const head = document.head;
  LANGUAGES.forEach(({ code }) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.setAttribute('hreflang', code);
    link.href = `${base}/?lang=${code}`;
    head.appendChild(link);
  });
  const xDefault = document.createElement('link');
  xDefault.rel = 'alternate';
  xDefault.setAttribute('hreflang', 'x-default');
  xDefault.href = base + '/';
  head.appendChild(xDefault);
}
