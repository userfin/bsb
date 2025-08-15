const venues = [
  {
    id: 1,
    city: 'Москва',
    name: 'Ресторан "Уют"',
    shortDescription: 'Уютное место с домашней кухней',
    description: 'Ресторан "Уют" предлагает блюда традиционной русской кухни в современной интерпретации. Интерьер выполнен в стиле лофт с теплыми акцентами дерева и кирпичной кладки. Идеальное место для семейного ужина или деловой встречи.',
    image: '/images/restaurant1/restaurant1.jpg',
    location: 'ул. Тверская, 15',
    hours: 'пн-пт 10:00 - 23:00 сб-вс 11:00 - 22:00',
    phone: '+7 (495) 123-45-67',
    features: ['Wi-Fi', 'Веранда', 'Живая музыка', 'Детское меню', 'Парковка'],
    gallery: [
      '/images/restaurant1/gallery1.jpg',
      '/images/restaurant1/gallery2.jpg',
      '/images/restaurant1/gallery3.jpg',
      '/images/restaurant1/gallery4.jpg',
      '/images/restaurant1/gallery5.jpg',
      '/images/restaurant1/gallery6.jpg'
    ],
    menuImage: '/menus/restaurant1-menu.jpg',
    menuPdf: '/menus/restaurant1-menu.pdf'
  },
  {
    id: 2,
    city: 'Москва',
    name: 'Бар "Графит"',
    shortDescription: 'Коктейльный бар с авторскими напитками',
    description: 'Бар "Графит" - это место, где вы можете попробовать уникальные коктейли от наших барменов-чемпионов. Специально разработанная карта напитков сочетает классику и современные тренды mixology. По вечерам играет диджей, а по выходным проходят тематические вечеринки.',
    image: '/images/bar1/bar1.jpg',
    location: 'ул. Арбат, 32',
    hours: '18:00 - 05:00',
    phone: '+7 (495) 765-43-21',
    features: ['Терраса', 'Кальян', 'Караоке', 'Настольные игры', 'Спортивные трансляции'],
    gallery: [
      '/images/bar1/gallery1.jpg',
      '/images/bar1/gallery2.jpg',
      '/images/bar1/gallery3.jpg',
      '/images/bar1/gallery4.jpg',
      '/images/bar1/gallery5.jpg',
      '/images/bar1/gallery6.jpg'
    ],
    menuImage: '/menus/restaurant1-menu.jpg',
    menuPdf: '/menus/bar1-menu.pdf'
  },
  {
    id: 3,
    city: 'Санкт-Петербург',
    name: 'Кафе "У камина"',
    shortDescription: 'Теплая атмосфера и ароматный кофе',
    description: 'Кафе "У камина" - идеальное место для встреч, работы и отдыха. У нас большой выбор кофе из различных регионов мира, авторские чайные смеси и домашняя выпечка. Зимой можно расположиться у настоящего камина с книгой или ноутбуком.',
    image: '/images/cafe1/cafe1.jpg',
    location: 'Невский проспект, 45',
    hours: '08:00 - 22:00',
    phone: '+7 (812) 111-22-33',
    features: ['Камин', 'Рабочая зона', 'Книжный клуб', 'Вегетарианское меню', 'Бесплатный Wi-Fi'],
    gallery: [
      '/images/cafe1/gallery1.jpg',
      '/images/cafe1/gallery2.jpg',
      '/images/cafe1/gallery3.jpg',
      '/images/cafe1/gallery4.jpg',
      '/images/cafe1/gallery5.jpg',
      '/images/cafe1/gallery6.jpg'
    ],
    menuImage: '/menus/restaurant1-menu.jpg',
    menuPdf: '/menus/cafe1-menu.pdf'
  },
  {
    id: 4,
    city: 'Казань',
    name: 'Татарская кухня "Тюбетей"',
    shortDescription: 'Аутентичная татарская кухня',
    description: 'Ресторан "Тюбетей" предлагает погрузиться в атмосферу татарской культуры через национальную кухню. Все блюда готовятся по старинным рецептам с использованием дровяной печи. Интерьер оформлен в этническом стиле с элементами современного дизайна.',
    image: '/images/tatar/tatar.jpg',
    location: 'ул. Баумана, 24',
    hours: '11:00 - 23:00',
    phone: '+7 (843) 222-33-44',
    features: ['Национальная кухня', 'Мастер-классы', 'Сувенирная лавка', 'Живая музыка', 'Детская зона'],
    gallery: [
      '/images/tatar/gallery1.jpg',
      '/images/tatar/gallery2.jpg',
      '/images/tatar/gallery3.jpg',
      '/images/tatar/gallery4.jpg',
      '/images/tatar/gallery5.jpg',
      '/images/tatar/gallery6.jpg'
    ],
    menuImage: '/menus/restaurant1-menu.jpg',
    menuPdf: '/menus/tatar-menu.pdf'
  },
  {
    id: 5,
    city: 'Сочи',
    name: 'Пляжный клуб "Волна"',
    shortDescription: 'Отдых у моря с комфортом',
    description: 'Пляжный клуб "Волна" расположен прямо на берегу Черного моря. У нас вы можете арендовать шезлонги, заказать напитки и еду, не отходя от воды. Вечером место превращается в клуб с живой музыкой и танцами под открытым небом.',
    image: '/images/beach/beach.jpg',
    location: 'Приморская наб., 10',
    hours: '09:00 - 02:00',
    phone: '+7 (862) 333-44-55',
    features: ['Пляж', 'Бассейн', 'Танцпол', 'SPA-зона', 'Коктейльная карта'],
    gallery: [
      '/images/beach/gallery1.jpg',
      '/images/beach/gallery2.jpg',
      '/images/beach/gallery3.jpg',
      '/images/beach/gallery4.jpg',
      '/images/beach/gallery5.jpg',
      '/images/beach/gallery6.jpg'
    ],
    menuImage: '/menus/restaurant1-menu.jpg',
    menuPdf: '/menus/beach-menu.pdf'
  },
  {
    id: 6,
    city: 'Санкт-Петербург',
    name: 'Булочная "Пушкин"',
    shortDescription: 'Традиционная выпечка и хлеб',
    description: 'Булочная "Пушкин" возрождает традиции петербургских пекарен начала XX века. Мы используем только натуральные ингредиенты и готовим на закваске по старинным рецептам. Особой популярностью пользуются наши круассаны и пироги с сезонными начинками.',
    image: '/images/bakery/bakery.jpg',
    location: 'ул. Малая Морская, 8',
    hours: '07:00 - 21:00',
    phone: '+7 (812) 555-66-77',
    features: ['Свежая выпечка', 'Кофе навынос', 'Вегетарианские опции', 'Подарочные наборы', 'Мастер-классы'],
    gallery: [
      '/images/bakery/gallery1.jpg',
      '/images/bakery/gallery2.jpg',
      '/images/bakery/gallery3.jpg',
      '/images/bakery/gallery4.jpg',
      '/images/bakery/gallery5.jpg',
      '/images/bakery/gallery6.jpg'
    ],
    menuImage: '/menus/restaurant1-menu.jpg',
    menuPdf: '/menus/bakery-menu.pdf'
  },
  {
    id: 7,
    city: 'Москва',
    name: 'Стейк-хаус "Мясник"',
    shortDescription: 'Премиальные стейки и мясные деликатесы',
    description: 'Стейк-хаус "Мясник" специализируется на премиальных мраморных стейках из австралийской и американской говядины. У нас есть собственная сухая камера для вызревания мяса. Шеф-повар лично контролирует приготовление каждого блюда.',
    image: '/images/steakhouse/steakhouse.jpg',
    location: 'Кутузовский пр-т, 48',
    hours: '12:00 - 00:00',
    phone: '+7 (495) 444-55-66',
    features: ['Терраса', 'Винная карта', 'Кальян', 'Открытая кухня', 'Сомелье'],
    gallery: [
      '/images/steakhouse/gallery1.jpg',
      '/images/steakhouse/gallery2.jpg',
      '/images/steakhouse/gallery3.jpg',
      '/images/steakhouse/gallery4.jpg',
      '/images/steakhouse/gallery5.jpg',
      '/images/steakhouse/gallery6.jpg'
    ],
    menuImage: '/menus/restaurant1-menu.jpg',
    menuPdf: '/menus/steakhouse-menu.pdf'
  },
  {
    id: 8,
    city: 'Казань',
    name: 'Кофейня "Утро"',
    shortDescription: 'Лучший кофе в городе',
    description: 'Кофейня "Утро" - это место, где начинается ваш день. Мы обжариваем кофе сами и готовим его на профессиональном оборудовании. У нас уютная атмосфера, идеальная для работы, встреч или спокойного отдыха.',
    image: '/images/coffee/coffee.jpg',
    location: 'ул. Пушкина, 18',
    hours: '07:30 - 22:00',
    phone: '+7 (843) 777-88-99',
    features: ['Свежая выпечка', 'Бесплатный Wi-Fi', 'Вегетарианское меню', 'Рабочие зоны', 'Книги для чтения'],
    gallery: [
      '/images/coffee/gallery1.jpg',
      '/images/coffee/gallery2.jpg',
      '/images/coffee/gallery3.jpg',
      '/images/coffee/gallery4.jpg',
      '/images/coffee/gallery5.jpg',
      '/images/coffee/gallery6.jpg'
    ],
    menuImage: '/menus/restaurant1-menu.jpg',
    menuPdf: '/menus/coffee-menu.pdf'
  },
  {
    id: 9,
    city: 'Сочи',
    name: 'Рыбный ресторан "Волна"',
    shortDescription: 'Свежайшие морепродукты',
    description: 'Ресторан "Волна" предлагает блюда из свежайших морепродуктов, выловленных в Черном море. Особенность нашего меню - ежедневно обновляемый выбор рыбы. Интерьер выполнен в морском стиле с панорамными видами на море.',
    image: '/images/fish/fish.jpg',
    location: 'ул. Навагинская, 9',
    hours: '11:00 - 23:30',
    phone: '+7 (862) 222-33-44',
    features: ['Панорамный вид', 'Летняя терраса', 'Детское меню', 'Шеф-повар', 'Фермерские продукты'],
    gallery: [
      '/images/fish/gallery1.jpg',
      '/images/fish/gallery2.jpg',
      '/images/fish/gallery3.jpg',
      '/images/fish/gallery4.jpg',
      '/images/fish/gallery5.jpg',
      '/images/fish/gallery6.jpg'
    ],
    menuImage: '/menus/restaurant1-menu.jpg',
    menuPdf: '/menus/fish-menu.pdf'
  },
  {
    id: 10,
    city: 'Санкт-Петербург',
    name: 'Пивной ресторан "Бочка"',
    shortDescription: 'Крафтовое пиво и закуски',
    description: 'Пивной ресторан "Бочка" предлагает более 30 сортов крафтового пива на разлив. У нас есть собственные сорта пива, которые варятся по старинным рецептам. К пиву подаются традиционные европейские и русские закуски.',
    image: '/images/beer/beer.jpg',
    location: 'Лиговский пр-т, 74',
    hours: '14:00 - 02:00',
    phone: '+7 (812) 888-99-00',
    features: ['Собственная пивоварня', 'Бильярд', 'Караоке', 'Спортивные трансляции', 'Дегустации'],
    gallery: [
      '/images/beer/gallery1.jpg',
      '/images/beer/gallery2.jpg',
      '/images/beer/gallery3.jpg',
      '/images/beer/gallery4.jpg',
      '/images/beer/gallery5.jpg',
      '/images/beer/gallery6.jpg'
    ],
    menuImage: '/menus/restaurant1-menu.jpg',
    menuPdf: '/menus/beer-menu.pdf'
  },
  {
    id: 11,
    city: 'Москва',
    name: 'Вегетарианское кафе "Зелень"',
    shortDescription: 'Здоровое питание',
    description: 'Кафе "Зелень" предлагает вкусные и полезные вегетарианские и веганские блюда. Мы используем только органические продукты местных фермеров. В меню представлены блюда различных кухонь мира, адаптированные под принципы здорового питания.',
    image: '/images/vegan/vegan.jpg',
    location: 'ул. Покровка, 25',
    hours: '09:00 - 21:00',
    phone: '+7 (495) 999-00-11',
    features: ['Веганские опции', 'Безглютеновое меню', 'Детокс-программы', 'Свежие соки', 'Мастер-классы'],
    gallery: [
      '/images/vegan/gallery1.jpg',
      '/images/vegan/gallery2.jpg',
      '/images/vegan/gallery3.jpg',
      '/images/vegan/gallery4.jpg',
      '/images/vegan/gallery5.jpg',
      '/images/vegan/gallery6.jpg'
    ],
    menuImage: '/menus/restaurant1-menu.jpg',
    menuPdf: '/menus/vegan-menu.pdf'
  },
  {
    id: 12,
    city: 'Казань',
    name: 'Суши-бар "Сакура"',
    shortDescription: 'Японская кухня высшего качества',
    description: 'Суши-бар "Сакура" предлагает блюда японской кухни, приготовленные по традиционным рецептам. У нас работают повара, прошедшие обучение в Японии. Особое внимание уделяется свежести продуктов и эстетике подачи блюд.',
    image: '/images/sushi/sushi.jpg',
    location: 'ул. Баумана, 67',
    hours: '12:00 - 23:00',
    phone: '+7 (843) 444-55-66',
    features: ['Доставка', 'Теппаньяки', 'Веранда', 'Онлайн-заказ', 'Японский чай'],
    gallery: [
      '/images/sushi/gallery1.jpg',
      '/images/sushi/gallery2.jpg',
      '/images/sushi/gallery3.jpg',
      '/images/sushi/gallery4.jpg',
      '/images/sushi/gallery5.jpg',
      '/images/sushi/gallery6.jpg'
    ],
    menuImage: '/menus/restaurant1-menu.jpg',
    menuPdf: '/menus/sushi-menu.pdf'
  }
];

export default venues;