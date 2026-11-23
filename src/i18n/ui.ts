export const LANGS = ['en', 'vi'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

export const LANG_LABEL: Record<Lang, string> = { en: 'English', vi: 'Tiếng Việt' };

/** Pages in the main navigation, in order. `''` is the home page. */
export const NAV = ['', 'how-to-play', 'commands', 'help', 'about'] as const;
export type Route = (typeof NAV)[number] | 'privacy' | 'terms';

const en = {
  'nav.': 'Home',
  'nav.how-to-play': 'How to play',
  'nav.commands': 'Commands',
  'nav.help': 'Help',
  'nav.about': 'About',
  'nav.privacy': 'Privacy',
  'nav.terms': 'Terms',
  'cta.add': 'Add to Discord',
  'cta.learn': 'How to play',
  'footer.note': 'Not affiliated with Discord Inc.',
  'footer.contact': 'Contact',
  'lang.switch': 'Language',
  'skip': 'Skip to content',
  'legal.effective': 'Effective date',
};

export type UiKey = keyof typeof en;

const vi: Record<UiKey, string> = {
  'nav.': 'Trang chủ',
  'nav.how-to-play': 'Cách chơi',
  'nav.commands': 'Lệnh',
  'nav.help': 'Trợ giúp',
  'nav.about': 'Giới thiệu',
  'nav.privacy': 'Quyền riêng tư',
  'nav.terms': 'Điều khoản',
  'cta.add': 'Thêm vào Discord',
  'cta.learn': 'Cách chơi',
  'footer.note': 'Không liên kết với Discord Inc.',
  'footer.contact': 'Liên hệ',
  'lang.switch': 'Ngôn ngữ',
  'skip': 'Bỏ qua tới nội dung',
  'legal.effective': 'Ngày hiệu lực',
};

const DICT: Record<Lang, Record<UiKey, string>> = { en, vi };

export function t(lang: Lang, key: UiKey): string {
  return DICT[lang][key] ?? DICT[DEFAULT_LANG][key];
}

export function href(lang: Lang, route: Route): string {
  return route === '' ? `/${lang}/` : `/${lang}/${route}/`;
}

export function langStaticPaths() {
  return LANGS.map((lang) => ({ params: { lang } }));
}

export function formatDate(lang: Lang, iso: string): string {
  return new Intl.DateTimeFormat(lang === 'vi' ? 'vi-VN' : 'en-GB', { dateStyle: 'long' }).format(
    new Date(`${iso}T00:00:00Z`),
  );
}
