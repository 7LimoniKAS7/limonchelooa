import type { Locale } from "./config";

export type Messages = {
  metadata: {
    title: string;
    description: string;
    ogLocale: string;
  };
  language: {
    label: string;
    current: string;
    choose: string;
    options: Record<Locale, string>;
  };
  brand: {
    name: string;
    location: string;
  };
  nav: {
    aria: string;
    story: string;
    craft: string;
    ingredients: string;
    customize: string;
    shop: string;
    experience: string;
    order: string;
    contact: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitlePrefix: string;
    subtitleHighlight: string;
    lead: string;
    orderCta: string;
    customizeCta: string;
  };
  premiumCraft: {
    eyebrow: string;
    title: string;
    lead: string;
    highlightsLabel: string;
    highlights: string[];
    productAlt: string;
    productCaption: string;
    notesKicker: string;
    notesTitle: string;
    notesText: string;
    storyBlocks: Array<{
      eyebrow: string;
      title: string;
      text: string;
    }>;
  };
  story: {
    title: string;
    body: string;
  };
  highlights: {
    title: string;
    lead: string;
    items: Array<{
      title: string;
      body: string;
      icon: "lemon" | "drop" | "batch" | "leaf";
    }>;
  };
  ingredients: {
    title: string;
    lead: string;
    list: string[];
  };
  customize: {
    title: string;
    body: string;
    cta: string;
  };
  showcase: {
    title: string;
    lead: string;
    productAlt: string;
    productName: string;
    productDescription: string;
    sizeLegend: string;
    button: string;
    quickOrderMessage: {
      title: string;
      product: string;
      size: string;
      customization: string;
    };
  };
  experience: {
    title: string;
    body: string;
  };
  testimonials: {
    title: string;
    lead: string;
    quotes: Array<{
      text: string;
      author: string;
      role: string;
    }>;
  };
  urgency: {
    title: string;
    body: string;
    cta: string;
  };
  order: {
    title: string;
    lead: string;
    labels: {
      name: string;
      email: string;
      phone: string;
      address: string;
      size: string;
      notes: string;
    };
    placeholders: {
      name: string;
      email: string;
      phone: string;
      address: string;
      notes: string;
    };
    sizePlaceholder: string;
    contactRequirement: string;
    button: string;
    alert: string;
    whatsapp: {
      title: string;
      name: string;
      email: string;
      phone: string;
      address: string;
      size: string;
      customization: string;
    };
  };
  footer: {
    brandDescription: string;
    contactTitle: string;
    followTitle: string;
    location: string;
    rights: string;
  };
};

export const messages: Record<Locale, Messages> = {
  tr: {
    metadata: {
      title: "Kaş Limoncello - Antalya'da El Yapımı Premium Limoncello",
      description:
        "Kaş, Antalya'dan küçük parti premium limoncello. Yerel limonlar, rafine üretim ve Akdeniz zarafeti.",
      ogLocale: "tr_TR",
    },
    language: {
      label: "Dil seçimi",
      current: "Geçerli dil",
      choose: "Dil seç",
      options: {
        tr: "Türkçe",
        en: "English",
        ru: "Русский",
      },
    },
    brand: {
      name: "Kaş Limoncello",
      location: "Kaş · Antalya · Türkiye",
    },
    nav: {
      aria: "Ana navigasyon",
      story: "Hikaye",
      craft: "Zanaat",
      ingredients: "İçerik",
      customize: "Kişiselleştir",
      shop: "Ürün",
      experience: "Deneyim",
      order: "Sipariş",
      contact: "İletişim",
    },
    hero: {
      kicker: "Kaş · Antalya · Türkiye",
      title: "El Yapımı Limoncello",
      subtitlePrefix: "Kaş'ın kalbinden",
      subtitleHighlight: "KAŞ",
      lead: "Yerel limonlar. Premium vodka. Küçük parti üretim.",
      orderCta: "Sipariş Ver",
      customizeCta: "Şişeni Kişiselleştir",
    },
    premiumCraft: {
      eyebrow: "Kaş / Antalya / El Yapımı Limoncello",
      title: "Güneşle şişelenen bir Akdeniz ritüeli.",
      lead:
        "Kaş limonları, serin cam ve yavaş zanaat; uzun yaz sofraları için rafine bir limoncello'da buluşur.",
      highlightsLabel: "Ürün öne çıkanları",
      highlights: ["El yapımı", "Premium içerik", "Kaş limonu"],
      productAlt: "Kaş kıyısında terasta duran limoncello şişesi",
      productCaption: "Antalya'da elde tamamlanan imza limoncello.",
      notesKicker: "Zanaat Notları",
      notesTitle: "Yavaşça açılmak için tasarlandı.",
      notesText:
        "Bu bölüm ölçülü bir hikaye ritmiyle devam eder: gösterişli numaralar değil, sıcak ışık, derin deniz tonları ve şişenin karakterini zarifçe açan rafine hareket.",
      storyBlocks: [
        {
          eyebrow: "01 / Limon",
          title: "Aroması için seçilen Kaş narenciyesi",
          text: "Kabuklar; yağ, renk ve koku yoğunluğuna göre seçilir, ardından yavaş infüzyon başlar.",
        },
        {
          eyebrow: "02 / Zanaat",
          title: "Küçük partiler, elde tamamlanan şişeler",
          text: "Her parti ölçülü şekilde dengelenir; temiz gövde ve net bitiş için dikkatle hazırlanır.",
        },
        {
          eyebrow: "03 / Servis",
          title: "Buz gibi, kıyı esintili, rafine",
          text: "Yemek sonrası ya da tek buzla servis edin; akşam altın tona döndüğünde en iyi halini alır.",
        },
      ],
    },
    story: {
      title: "Akdeniz Mirası, Kaş Yorumu",
      body:
        "Limoncello Sorrento kayalıklarında doğdu: güneş, kabuk aroması ve ağır ağır akan öğleden sonraların ritüeli. Bu İtalyan mirasını onurlandırırken her şişeyi Kaş'a bağlıyoruz. Aynı parlak narenciye ruhu, Antalya'nın turkuaz kıyısında yerel limon ve titiz zanaatla yeniden yorumlanıyor.",
    },
    highlights: {
      title: "Ürün öne çıkanları",
      lead: "Her şişeyi tanımlayan dört temel değer.",
      items: [
        {
          title: "Elde seçilen yerel limonlar",
          body: "Kaş güneşinde olgunlaşan meyveler, en yoğun aromasındayken seçilir.",
          icon: "lemon",
        },
        {
          title: "Premium vodka bazı",
          body: "Rafine, nötr bir baz; düşük kalite alkolle seyreltilmez.",
          icon: "drop",
        },
        {
          title: "El yapımı küçük parti",
          body: "Sınırlı üretim, yavaş maserasyon ve elde özenli şişeleme.",
          icon: "batch",
        },
        {
          title: "Katkısız reçete",
          body: "Yapay aroma ve koruyucu yok; yalnızca temiz ve gerçek içerikler.",
          icon: "leaf",
        },
      ],
    },
    ingredients: {
      title: "Sadece Saf İçerikler",
      lead: "Tavizsiz şeffaflık: şişeye giren her bileşen yerini hak eder.",
      list: [
        "Kaş, Antalya'dan elde seçilmiş limonlar",
        "Premium vodka - düşük kalite alkolle seyreltilmez",
        "Doğal şeker",
        "Koruyucu içermez",
      ],
    },
    customize: {
      title: "Sana Özel Olsun",
      body:
        "Tatlılığı damak zevkine göre ayarlayabilir, narenciye yoğunluğunu öne çıkarabilir ya da davet ve hediyeler için özel parti hazırlatabilirsin. Hacim uygun olduğunda siparişe göre harmanlıyoruz; böylece limoncello seri üretim değil, kişisel bir lezzet gibi hissettiriyor.",
      cta: "Şişeni Kişiselleştir",
    },
    showcase: {
      title: "Ürün",
      lead: "Buzlu cam hissi, elde etiketlenen şişe. Sofrana ya da akşam ritüeline uygun boyu seç.",
      productAlt: "Taze limonların yanında premium limoncello şişesi",
      productName: "Kaş Signature Limoncello",
      productDescription:
        "Parlak narenciye yağları, ipeksi gövde ve temiz bir bitiş; kıyı sofrasından sonra buz gibi servis için ideal.",
      sizeLegend: "Şişe boyunu seç",
      button: "Seçili Boyu Sipariş Et",
      quickOrderMessage: {
        title: "Yeni direkt limoncello sipariş isteği",
        product: "Ürün",
        size: "Şişe boyu",
        customization: "Kişiselleştirme: Yok, direkt almak istiyorum.",
      },
    },
    experience: {
      title: "Deneyim",
      body:
        "İyice soğutulmuş servis edin: dondurucudan çıkmış ya da tek buz üzerinde. Limon kabuğu yağları yavaşça açılır. Geleneksel olarak yemek sonrası içilir; aynı zamanda ferah, zarif ve fazla tatlı olmayan Akdeniz narenciyesiyle parlak bir aperitif gibi de çalışır.",
    },
    testimonials: {
      title: "Sofrada Sevilen",
      lead: "Şişemizi paylaşan misafirlerden ilk notlar.",
      quotes: [
        {
          text: "Amalfi dışında tattığım en temiz limoncello. Bardakta Kaş gibi.",
          author: "Elif K.",
          role: "İstanbul",
        },
        {
          text: "Düğün hediyelerimiz için özel tatlılık seviyesi istedik; kusursuz ve akılda kalıcıydı.",
          author: "Marco & Ayşe",
          role: "Antalya",
        },
        {
          text: "Küçük parti olduğu belli. Sadece şeker değil, gerçek kabuk aromasını alıyorsunuz.",
          author: "James R.",
          role: "London",
        },
      ],
    },
    urgency: {
      title: "Sınırlı Üretim",
      body:
        "Her parti bilinçli olarak küçük tutulur. Bir seri tükendiğinde yenisi hasada ve maserasyon süresine bağlıdır; bu üretim bitmeden şişeni ayır.",
      cta: "Tükenmeden Sipariş Ver",
    },
    order: {
      title: "Sipariş Ver",
      lead:
        "Bilgilerini ve tercihlerini paylaş; uygunluk ve teslimat detaylarını e-posta ya da telefonla teyit edelim.",
      labels: {
        name: "Ad Soyad",
        email: "E-posta",
        phone: "Telefon",
        address: "Adres",
        size: "Şişe boyu",
        notes: "Kişiselleştirme notu",
      },
      placeholders: {
        name: "Adın ve soyadın",
        email: "sen@example.com",
        phone: "+90 ...",
        address: "Sokak, ilçe, şehir, posta kodu",
        notes: "Tatlılık, yoğunluk, parti isteği, hediye notu...",
      },
      sizePlaceholder: "Boy seç",
      contactRequirement: "Sana ulaşabilmemiz için e-posta veya telefondan en az birini yaz.",
      button: "Sipariş Ver",
      alert: "Siparişini teyit edebilmemiz için lütfen e-posta veya telefon gir.",
      whatsapp: {
        title: "Yeni limoncello sipariş isteği",
        name: "Ad Soyad",
        email: "E-posta",
        phone: "Telefon",
        address: "Adres",
        size: "Şişe boyu",
        customization: "Kişiselleştirme",
      },
    },
    footer: {
      brandDescription:
        "Kaş, Antalya'dan el yapımı limoncello. Küçük partiler, gerçek içerikler ve her yudumda Akdeniz sakinliği.",
      contactTitle: "İletişim",
      followTitle: "Takip",
      location: "Kaş, Antalya, Türkiye",
      rights: "Kaş Limoncello. Özenle üretildi.",
    },
  },
  en: {
    metadata: {
      title: "Kaş Limoncello - Premium Handmade Limoncello from Antalya",
      description:
        "Premium small-batch limoncello from Kaş, Antalya. Local lemons, refined craft, and Mediterranean elegance.",
      ogLocale: "en_US",
    },
    language: {
      label: "Language selector",
      current: "Current language",
      choose: "Choose language",
      options: {
        tr: "Türkçe",
        en: "English",
        ru: "Русский",
      },
    },
    brand: {
      name: "Kaş Limoncello",
      location: "Kaş · Antalya · Türkiye",
    },
    nav: {
      aria: "Primary navigation",
      story: "Story",
      craft: "Craft",
      ingredients: "Ingredients",
      customize: "Customize",
      shop: "Shop",
      experience: "Experience",
      order: "Order",
      contact: "Contact",
    },
    hero: {
      kicker: "Kaş · Antalya · Türkiye",
      title: "Handcrafted Limoncello",
      subtitlePrefix: "from the heart of",
      subtitleHighlight: "KAŞ",
      lead: "Local lemons. Premium vodka. Small batch production.",
      orderCta: "Order Now",
      customizeCta: "Customize Your Bottle",
    },
    premiumCraft: {
      eyebrow: "Kaş / Antalya / Handmade Limoncello",
      title: "A coastal ritual, bottled in sunlight.",
      lead:
        "Mediterranean lemons, cool glass, and slow craft come together in a limoncello made for long summer tables.",
      highlightsLabel: "Product highlights",
      highlights: ["Handmade", "Premium ingredients", "Kaş citrus"],
      productAlt: "Limoncello bottle on a coastal terrace in Kaş",
      productCaption: "Signature limoncello, hand-finished in Antalya.",
      notesKicker: "Craft Notes",
      notesTitle: "Designed to unfold slowly.",
      notesText:
        "The section continues with a measured story rhythm: no loud tricks, just warm light, deep sea tones, and refined motion that reveals the bottle's character piece by piece.",
      storyBlocks: [
        {
          eyebrow: "01 / Lemons",
          title: "Kaş citrus, selected for aroma",
          text: "Bright peels are chosen for oil, color, and fragrance before a slow infusion begins.",
        },
        {
          eyebrow: "02 / Craft",
          title: "Small batches, finished by hand",
          text: "Each bottle is balanced in measured runs, giving the liqueur a clean body and a precise finish.",
        },
        {
          eyebrow: "03 / Serve",
          title: "Ice-cold, coastal, refined",
          text: "Serve after dinner or over a single cube when the evening turns warm and gold.",
        },
      ],
    },
    story: {
      title: "A Mediterranean Legacy Reimagined",
      body:
        "Limoncello was born on the cliffs of Sorrento: a ritual of sun, zest, and slow afternoons. We honor that Italian lineage while rooting every bottle in Kaş. The same luminous citrus spirit is reinterpreted on Antalya's turquoise coast with local lemons and meticulous craft.",
    },
    highlights: {
      title: "Product highlights",
      lead: "Four pillars define every bottle we release.",
      items: [
        {
          title: "Locally handpicked lemons",
          body: "Sun-ripened fruit from Kaş, selected by hand at peak aroma.",
          icon: "lemon",
        },
        {
          title: "Premium vodka base",
          body: "A refined neutral spirit, never cut with low-grade alcohol.",
          icon: "drop",
        },
        {
          title: "Handmade small batch",
          body: "Limited runs, slow maceration, and careful bottling by hand.",
          icon: "batch",
        },
        {
          title: "No additives",
          body: "No artificial flavors or preservatives, just pure ingredients.",
          icon: "leaf",
        },
      ],
    },
    ingredients: {
      title: "Pure Ingredients Only",
      lead: "Transparency without compromise: every element in the bottle earns its place.",
      list: [
        "Handpicked lemons from Kaş, Antalya",
        "Premium vodka, never diluted with low-quality alcohol",
        "Natural sugar",
        "No preservatives",
      ],
    },
    customize: {
      title: "Make It Yours",
      body:
        "Adjust sweetness to your palate, dial zest forward or soft, or commission a custom batch for gatherings and gifts. We blend to order when volumes allow, so your limoncello feels personal, not mass-produced.",
      cta: "Customize Your Bottle",
    },
    showcase: {
      title: "Product showcase",
      lead: "Frosted glass, hand-labeled. Choose the size that fits your table or your evening.",
      productAlt: "Premium limoncello bottle beside fresh lemons",
      productName: "Kaş Signature Limoncello",
      productDescription:
        "Bright citrus oils, silken body, and a clean finish; best enjoyed ice-cold after a coastal meal.",
      sizeLegend: "Choose bottle size",
      button: "Order Selected Size",
      quickOrderMessage: {
        title: "New direct limoncello order request",
        product: "Product",
        size: "Bottle size",
        customization: "Customization: None, I would like to order directly.",
      },
    },
    experience: {
      title: "The Experience",
      body:
        "Pour well chilled, from the freezer or over a single ice cube, and let the oils bloom. Traditionally sipped as a digestif, it also shines as a luminous aperitif: Mediterranean citrus, refreshing and refined, without cloying sweetness.",
    },
    testimonials: {
      title: "Loved at the table",
      lead: "Early notes from guests who have shared a bottle at our table.",
      quotes: [
        {
          text: "The cleanest limoncello I have tasted outside the Amalfi coast. Kaş in a glass.",
          author: "Elif K.",
          role: "Istanbul",
        },
        {
          text: "We ordered a custom sweetness level for our wedding favors; flawless and memorable.",
          author: "Marco & Ayşe",
          role: "Antalya",
        },
        {
          text: "Small batch shows. You can actually taste the peel, not just sugar.",
          author: "James R.",
          role: "London",
        },
      ],
    },
    urgency: {
      title: "Limited Production",
      body:
        "Each run is intentionally small. When a batch sells through, the next maceration waits on the harvest; secure your bottles while this release is available.",
      cta: "Order Before It's Gone",
    },
    order: {
      title: "Place your order",
      lead:
        "Share your details and preferences; we will confirm availability and delivery by email or phone.",
      labels: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        address: "Address",
        size: "Bottle size",
        notes: "Customization note",
      },
      placeholders: {
        name: "Your full name",
        email: "you@example.com",
        phone: "+90 ...",
        address: "Street, district, city, postal code",
        notes: "Sweetness, intensity, batch requests, gift message...",
      },
      sizePlaceholder: "Select size",
      contactRequirement: "Provide at least one: email or phone, so we can reach you.",
      button: "Place Order",
      alert: "Please enter an email or phone number so we can confirm your order.",
      whatsapp: {
        title: "New limoncello order request",
        name: "Name",
        email: "Email",
        phone: "Phone",
        address: "Address",
        size: "Bottle size",
        customization: "Customization",
      },
    },
    footer: {
      brandDescription:
        "Artisan limoncello from Kaş, Antalya. Small batches, honest ingredients, Mediterranean calm in every pour.",
      contactTitle: "Contact",
      followTitle: "Follow",
      location: "Kaş, Antalya, Türkiye",
      rights: "Kaş Limoncello. Crafted with care.",
    },
  },
  ru: {
    metadata: {
      title: "Kaş Limoncello - премиальный лимончелло ручной работы из Антальи",
      description:
        "Премиальный лимончелло малыми партиями из Каша, Анталья. Местные лимоны, тонкое ремесло и средиземноморская элегантность.",
      ogLocale: "ru_RU",
    },
    language: {
      label: "Выбор языка",
      current: "Текущий язык",
      choose: "Выбрать язык",
      options: {
        tr: "Türkçe",
        en: "English",
        ru: "Русский",
      },
    },
    brand: {
      name: "Kaş Limoncello",
      location: "Каш · Анталья · Турция",
    },
    nav: {
      aria: "Основная навигация",
      story: "История",
      craft: "Ремесло",
      ingredients: "Состав",
      customize: "Под заказ",
      shop: "Продукт",
      experience: "Подача",
      order: "Заказ",
      contact: "Контакты",
    },
    hero: {
      kicker: "Каш · Анталья · Турция",
      title: "Лимончелло ручной работы",
      subtitlePrefix: "из сердца",
      subtitleHighlight: "КАША",
      lead: "Местные лимоны. Премиальная водка. Производство малыми партиями.",
      orderCta: "Заказать",
      customizeCta: "Персонализировать бутылку",
    },
    premiumCraft: {
      eyebrow: "Каш / Анталья / Лимончелло ручной работы",
      title: "Прибрежный ритуал, запечатанный в солнечном свете.",
      lead:
        "Средиземноморские лимоны, прохладное стекло и неспешное ремесло соединяются в лимончелло для долгих летних ужинов.",
      highlightsLabel: "Особенности продукта",
      highlights: ["Ручная работа", "Премиальные ингредиенты", "Лимоны из Каша"],
      productAlt: "Бутылка лимончелло на прибрежной террасе в Каше",
      productCaption: "Фирменный лимончелло, вручную доведенный в Анталье.",
      notesKicker: "Заметки о ремесле",
      notesTitle: "Создано, чтобы раскрываться постепенно.",
      notesText:
        "История продолжается в спокойном ритме: без лишнего шума, только теплый свет, глубокие морские оттенки и тонкое движение, раскрывающее характер бутылки.",
      storyBlocks: [
        {
          eyebrow: "01 / Лимоны",
          title: "Цитрус из Каша, выбранный за аромат",
          text: "Яркую цедру отбирают по маслянистости, цвету и аромату, прежде чем начнется медленная инфузия.",
        },
        {
          eyebrow: "02 / Ремесло",
          title: "Малые партии, ручная доводка",
          text: "Каждая бутылка балансируется в небольших партиях, чтобы получить чистое тело и точное послевкусие.",
        },
        {
          eyebrow: "03 / Подача",
          title: "Ледяной, прибрежный, утонченный",
          text: "Подавайте после ужина или с одним кубиком льда, когда вечер становится теплым и золотым.",
        },
      ],
    },
    story: {
      title: "Средиземноморское наследие в духе Каша",
      body:
        "Лимончелло родился на скалах Сорренто: как ритуал солнца, цедры и медленных послеобеденных часов. Мы бережно сохраняем итальянскую традицию, но укореняем каждую бутылку в Каше. Тот же светлый цитрусовый характер получает новое прочтение на бирюзовом побережье Антальи.",
    },
    highlights: {
      title: "Особенности продукта",
      lead: "Четыре принципа, на которых держится каждая бутылка.",
      items: [
        {
          title: "Местные лимоны ручного отбора",
          body: "Плоды, созревшие под солнцем Каша, выбираются вручную на пике аромата.",
          icon: "lemon",
        },
        {
          title: "Премиальная водочная основа",
          body: "Чистая нейтральная база, без разбавления алкоголем низкого качества.",
          icon: "drop",
        },
        {
          title: "Ручная работа малыми партиями",
          body: "Ограниченные выпуски, медленная мацерация и аккуратный ручной розлив.",
          icon: "batch",
        },
        {
          title: "Без добавок",
          body: "Без искусственных ароматизаторов и консервантов, только честные ингредиенты.",
          icon: "leaf",
        },
      ],
    },
    ingredients: {
      title: "Только чистые ингредиенты",
      lead: "Прозрачность без компромиссов: каждый компонент в бутылке имеет смысл.",
      list: [
        "Лимоны ручного отбора из Каша, Анталья",
        "Премиальная водка, без разбавления низкокачественным алкоголем",
        "Натуральный сахар",
        "Без консервантов",
      ],
    },
    customize: {
      title: "Сделайте вкус своим",
      body:
        "Можно настроить сладость, усилить или смягчить цитрусовый акцент, а также заказать партию для встреч и подарков. При подходящем объеме мы смешиваем под заказ, чтобы лимончелло ощущался личным, а не массовым.",
      cta: "Персонализировать бутылку",
    },
    showcase: {
      title: "Продукт",
      lead: "Матовая прохлада стекла и ручная этикетка. Выберите объем для своего стола или вечера.",
      productAlt: "Премиальная бутылка лимончелло рядом со свежими лимонами",
      productName: "Kaş Signature Limoncello",
      productDescription:
        "Яркие масла цитруса, шелковистое тело и чистое послевкусие; лучше всего подавать ледяным после ужина у моря.",
      sizeLegend: "Выберите объем бутылки",
      button: "Заказать выбранный объем",
      quickOrderMessage: {
        title: "Новый прямой заказ лимончелло",
        product: "Продукт",
        size: "Объем бутылки",
        customization: "Персонализация: нет, хочу заказать напрямую.",
      },
    },
    experience: {
      title: "Подача",
      body:
        "Подавайте хорошо охлажденным: из морозильника или с одним кубиком льда, чтобы масла цедры раскрылись постепенно. Его традиционно пьют как дижестив, но он также прекрасно работает как светлый аперитив: свежий, утонченный и без приторной сладости.",
    },
    testimonials: {
      title: "Любят за столом",
      lead: "Первые впечатления гостей, которые делили с нами бутылку.",
      quotes: [
        {
          text: "Самый чистый лимончелло, который я пробовала за пределами Амальфи. Каш в бокале.",
          author: "Elif K.",
          role: "Стамбул",
        },
        {
          text: "Мы заказали особую сладость для свадебных подарков; получилось безупречно и очень запоминающеся.",
          author: "Marco & Ayşe",
          role: "Анталья",
        },
        {
          text: "Сразу чувствуется малая партия. Во вкусе настоящая цедра, а не только сахар.",
          author: "James R.",
          role: "Лондон",
        },
      ],
    },
    urgency: {
      title: "Ограниченное производство",
      body:
        "Каждый выпуск намеренно небольшой. Когда партия заканчивается, следующая зависит от урожая и времени мацерации; успейте забронировать бутылки из текущего релиза.",
      cta: "Заказать до окончания партии",
    },
    order: {
      title: "Оформить заказ",
      lead:
        "Оставьте данные и предпочтения; мы подтвердим наличие и доставку по email или телефону.",
      labels: {
        name: "Имя",
        email: "Email",
        phone: "Телефон",
        address: "Адрес",
        size: "Объем бутылки",
        notes: "Комментарий к заказу",
      },
      placeholders: {
        name: "Ваше имя",
        email: "you@example.com",
        phone: "+90 ...",
        address: "Улица, район, город, индекс",
        notes: "Сладость, интенсивность, партия, подарочная надпись...",
      },
      sizePlaceholder: "Выберите объем",
      contactRequirement: "Укажите email или телефон, чтобы мы могли связаться с вами.",
      button: "Отправить заказ",
      alert: "Пожалуйста, укажите email или телефон, чтобы мы могли подтвердить заказ.",
      whatsapp: {
        title: "Новый заказ лимончелло",
        name: "Имя",
        email: "Email",
        phone: "Телефон",
        address: "Адрес",
        size: "Объем бутылки",
        customization: "Персонализация",
      },
    },
    footer: {
      brandDescription:
        "Лимончелло ручной работы из Каша, Анталья. Малые партии, честные ингредиенты и средиземноморское спокойствие в каждом глотке.",
      contactTitle: "Контакты",
      followTitle: "Соцсети",
      location: "Каш, Анталья, Турция",
      rights: "Kaş Limoncello. Создано с вниманием.",
    },
  },
};
