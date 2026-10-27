// Demo catalogue. Images live in /public (file names kept from the original project).
export const img = (name) => encodeURI(`/${name}`);

export const artists = {
  lea: { name: { en: 'Léa Jacquot', fa: 'لئا ژاکو' }, avatar: 'Rectangle10.png' },
  julien: { name: { en: 'Julien', fa: 'ژولین' }, avatar: 'Rectangle12.png' },
  maria: { name: { en: 'Maria', fa: 'ماریا' }, avatar: 'Rectangle11.png' },
};

export const collections = [
  {
    id: 'night-sky', cover: 'image8.png', artist: 'lea', range: [0.12, 0.18],
    title: { en: 'Night Sky', fa: 'آسمان شب' },
    blurb: {
      en: 'Quiet skies, long exposures and the hour after the city goes dark.',
      fa: 'آسمان‌های آرام، نوردهی طولانی و ساعتی بعد از خاموش‌شدن شهر.',
    },
  },
  {
    id: 'horizon', cover: 'image9.png', artist: 'julien', range: [0.1, 0.16],
    title: { en: 'Horizon', fa: 'افق' },
    blurb: {
      en: 'Wide frames and soft colour — places you would like to be standing.',
      fa: 'قاب‌های باز و رنگ‌های نرم — جاهایی که دوست دارید آن‌جا بایستید.',
    },
  },
  {
    id: 'mother-nature', cover: 'image10.png', artist: 'maria', range: [0.12, 0.2],
    title: { en: 'Mother Nature', fa: 'مادر طبیعت' },
    blurb: {
      en: 'Leaves, rain and seasons, painted slowly.',
      fa: 'برگ، باران و فصل‌ها، با حوصله نقاشی‌شده.',
    },
  },
];

export const nfts = [
  { id: 1, image: 'image 8.png', price: 0.14, collection: 'night-sky', title: { en: 'Night Is Coming', fa: 'شب در راه است' } },
  { id: 2, image: 'img 9.png', price: 0.16, collection: 'night-sky', title: { en: 'With the Stars', fa: 'با ستاره‌ها' } },
  { id: 3, image: 'imag10.png', price: 0.12, collection: 'horizon', title: { en: 'Summer', fa: 'تابستان' } },
  { id: 4, image: 'image 11.png', price: 0.15, collection: 'mother-nature', title: { en: 'Quiet', fa: 'سکوت' } },
  { id: 5, image: 'image 12.png', price: 0.11, collection: 'horizon', title: { en: 'Travel', fa: 'سفر' } },
  { id: 6, image: 'image 13.png', price: 0.18, collection: 'mother-nature', title: { en: 'The Rain', fa: 'باران' } },
];

export const featured = { image: 'Rectangle3.png', collection: 'night-sky' };
