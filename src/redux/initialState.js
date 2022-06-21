const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      priceOld: 45,
      stars: 2,
      ownStars: 4,
      promo: 'sale',
      image: './images/beds/fornitures-bed-1.jpg',
      newFurniture: true,
      isFavorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: './images/beds/fornitures-bed-2.jpg',
      newFurniture: true,
      isFavorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: './images/beds/fornitures-bed-3.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: './images/beds/fornitures-bed-4.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: './images/beds/fornitures-bed-5.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: './images/beds/fornitures-bed-6.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: './images/beds/fornitures-bed-7.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: './images/beds/fornitures-bed-8.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: './images/beds/fornitures-bed-9.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: './images/beds/fornitures-bed-10.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: './images/beds/fornitures-bed-4.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: './images/beds/fornitures-bed-5.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: './images/beds/fornitures-bed-6.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: './images/beds/fornitures-bed-7.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: './images/beds/fornitures-bed-8.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: './images/beds/fornitures-bed-9.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: './images/beds/fornitures-bed-10.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'comfortable-chair-1',
      name: 'Comfortable Chair no.1',
      category: 'chair',
      price: 30,
      priceOld: 45,
      stars: 2,

      promo: 'sale',
      image: './images/chairs/chair-1.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'comfortable-chair-2',
      name: 'Comfortable Chair no.2',
      category: 'chair',
      price: 35,
      stars: 2,
      promo: 'sale',
      image: './images/chairs/chair-2.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'comfortable-chair-3',
      name: 'Comfortable Chair no.3',
      category: 'chair',
      price: 20,
      stars: 2,
      promo: 'sale',
      image: './images/chairs/chair-3.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'comfortable-chair-4',
      name: 'Comfortable Chair no.4',
      category: 'chair',
      price: 30,
      priceOld: 45,
      stars: 3,
      promo: 'sale',
      image: './images/chairs/chair-4.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'comfortable-chair-5',
      name: 'Comfortable Chair no.5',
      category: 'chair',
      price: 50,
      stars: 2,
      promo: 'sale',
      image: './images/chairs/chair-5.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'comfortable-chair-6',
      name: 'Comfortable Chair no.6',
      category: 'chair',
      price: 30,
      stars: 5,
      promo: 'sale',
      image: './images/chairs/chair-6.jpeg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'comfortable-chair-7',
      name: 'Comfortable Chair no.7',
      category: 'chair',
      price: 30,
      priceOld: 45,
      stars: 2,
      promo: 'sale',
      image: './images/chairs/chair-7.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'comfortable-chair-8',
      name: 'Comfortable Chair no.8',
      category: 'chair',
      price: 30,
      priceOld: 45,
      stars: 2,
      promo: 'sale',
      image: './images/chairs/chair-8.png',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'comfortable-sofa-1',
      name: 'Comfortable Sofa no.1',
      category: 'sofa',
      price: 30,
      priceOld: 45,
      stars: 2,
      promo: 'sale',
      image: './images/sofas/sofa-1.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'comfortable-sofa-2',
      name: 'Comfortable Sofa no.2',
      category: 'sofa',
      price: 35,
      stars: 4,
      promo: 'sale',
      image: './images/sofas/sofa-2.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'comfortable-sofa-3',
      name: 'Comfortable Sofa no.3',
      category: 'sofa',
      price: 20,
      priceOld: 35,
      stars: 5,
      promo: 'sale',
      image: './images/sofas/sofa-3.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'comfortable-sofa-4',
      name: 'Comfortable Sofa no.4',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: './images/sofas/sofa-4.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'comfortable-sofa-5',
      name: 'Comfortable Sofa no.5',
      category: 'sofa',
      price: 30,
      stars: 3,
      promo: 'sale',
      image: './images/sofas/sofa-5.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'comfortable-sofa-6',
      name: 'Comfortable Sofa no.6',
      category: 'sofa',
      price: 30,
      stars: 5,
      promo: 'sale',
      image: './images/sofas/sofa-6.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'comfortable-sofa-7',
      name: 'Comfortable Sofa no.7',
      category: 'sofa',
      price: 30,
      stars: 3,
      promo: 'sale',
      image: './images/sofas/sofa-7.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'comfortable-sofa-8',
      name: 'Comfortable Sofa no.8',
      category: 'sofa',
      price: 30,
      priceOld: 45,
      stars: 2,
      promo: 'sale',
      image: './images/sofas/sofa-8.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'table-collection-1',
      name: 'Table Rivia #1',
      category: 'table',
      price: 30,
      stars: 4,
      promo: 'sale',
      image: './images/tables/table-1.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'table-collection-2',
      name: 'Table Rivia #2',
      category: 'table',
      price: 40,
      stars: 3,
      promo: 'sale',
      image: './images/tables/table-2.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'table-collection-3',
      name: 'Table Rivia #3',
      category: 'table',
      price: 30,
      stars: 5,
      promo: 'sale',
      image: './images/tables/table-3.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'table-collection-4',
      name: 'Table Rivia #4',
      category: 'table',
      price: 50,
      stars: 5,
      promo: 'sale',
      image: './images/tables/table-4.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'table-collection-5',
      name: 'Table Rivia #5',
      category: 'table',
      price: 30,
      stars: 3,
      promo: 'sale',
      image: './images/tables/table-5.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'table-collection-6',
      name: 'Table Rivia #6',
      category: 'table',
      price: 45,
      stars: 4,
      promo: 'sale',
      image: './images/tables/table-6.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'table-collection-7',
      name: 'Table Rivia #7',
      category: 'table',
      price: 30,
      stars: 3,
      promo: 'sale',
      image: './images/tables/table-7.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'table-collection-8',
      name: 'Table Rivia #8',
      category: 'table',
      price: 30,
      stars: 4,
      promo: 'sale',
      image: './images/tables/table-8.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'dining-collection-1',
      name: 'Dining Collection 1',
      category: 'dining',
      price: 530,
      stars: 4,
      promo: 'sale',
      image: './images/dining/dining-1.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'dining-collection-2',
      name: 'Dining Collection 2',
      category: 'dining',
      price: 619,
      stars: 5,
      promo: 'sale',
      image: './images/dining/dining-2.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'dining-collection-3',
      name: 'Dining Collection 3',
      category: 'dining',
      price: 730,
      stars: 5,
      promo: 'sale',
      image: './images/dining/dining-3.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'dining-collection-4',
      name: 'Dining Collection 4',
      category: 'dining',
      price: 419,
      stars: 3,
      promo: 'sale',
      image: './images/dining/dining-4.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'dining-collection-5',
      name: 'Dining Collection 5',
      category: 'dining',
      price: 530,
      stars: 4,
      promo: 'sale',
      image: './images/dining/dining-5.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'dining-collection-6',
      name: 'Dining Collection 6',
      category: 'dining',
      price: 330,
      stars: 3,
      promo: 'sale',
      image: './images/dining/dining-6.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'dining-collection-7',
      name: 'Dining Collection 7',
      category: 'dining',
      price: 1337,
      stars: 5,
      promo: 'sale',
      image: './images/dining/dining-7.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'dining-collection-8',
      name: 'Dining Collection 8',
      category: 'dining',
      price: 610,
      stars: 4,
      promo: 'sale',
      image: './images/dining/dining-8.jpg',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
  ],
  cart: {
    products: [],
  },
  feedback: [
    {
      id: 1,
      author: 'Amanda Smith',
      authorTitle: 'Furniture Client',
      content:
        'Lorem ipsum dolor sit amet, etiam luptatum id vel, diam ornatus moderatius cu usu. Ad eos suas eripuit, vis ea.',
      photo: '/images/feedback/portrait1.png',
    },
    {
      id: 2,
      author: 'John Smith',
      authorTitle: 'Designer',
      content:
        'Lorem ipsum dolor sit amet, eam id aliquip eleifend. Nec no dico illud augue, ex nam fugit mandamus, no ullum laboramus vel? Et erroribus instructior.',
      photo: '/images/feedback/portrait2.png',
    },
    {
      id: 3,
      author: 'Tora Leaves',
      authorTitle: 'Immortal Actress',
      content:
        'Lorem ipsum dolor sit amet, pri ne prima theophrastus, iudico percipitur ne eam! Wisi putant in ius, etiam.',
      photo: '/images/feedback/portrait3.png',
    },
    {
      id: 4,
      author: 'Kari Karnes',
      authorTitle: 'Salesman',
      content:
        'Lorem ipsum dolor sit amet, eos tantas propriae at, erant delectus perpetua duo eu, enim idque voluptatum mea ea. Sit ei.',
      photo: '/images/feedback/portrait4.png',
    },
    {
      id: 5,
      author: 'Jean Claude',
      authorTitle: 'Partner',
      content:
        'Lorem ipsum dolor sit amet, habeo decore id vix. Te nam tollit nominati concludaturque. Usu principes reformidans eu. In pro inermis aliquando. Aperiri laoreet oporteat an mei, mel.',
      photo: '/images/feedback/portrait5.png',
    },
  ],
  settings: {
    mediaQuery: 'desktop',
  },
};

export default initialState;
