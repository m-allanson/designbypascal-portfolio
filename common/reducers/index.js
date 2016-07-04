// import { combineReducers } from 'redux'

const initialState = {
  projects: {
    1: {
      id: 1,
      title: 'IM Global',
      slug: 'im-global',
      content: 'IM Global are a worldwide distributer and producer of film and TV. Part of rebrand, the brief was to explore the brand themes through an initial detailed sketch and exploration phase of typography and graphic concepts. A reference to a globe had to be included while pushing beyond the obvious circular design of their old brand. The work also involved producing dozens of high fidelity designs that were used to test motion graphic ideas and included the final identity.',
      credits: 'The project included an international team of designers and was led by the Design Studio for Film in LA.',
      url: 'http://imglobalfilm.com',
      images: [
        '/static/images/img-1.jpg',
        '/static/images/img-2.jpg',
        '/static/images/img-3.jpg',
        '/static/images/img-4.jpg',
        '/static/images/img-5.jpg'
      ],
      category: 1
    },
    2: {
      id: 2,
      title: 'Move',
      slug: 'move',
      content: 'As a new agency in a crowded marketplace, Move were keen to find an identity to help them stand out. Through branding workshops we identified their refreshingly personable and honest approach to recruitment. I worked on the branding strategy and concepts, as well as the website design and produced the hand-lettered logo.',
      credits: 'Joe Lovelock, Studio Lovelock, Creative Director. Illustration by Rosie Lovelock. Development by Martin Buckner.',
      url: 'http://wearemove.com',
      images: [
        '/static/images/move-1.jpg',
        '/static/images/move-2.jpg',
        '/static/images/move-3.jpg',
        '/static/images/move-4.jpg',
        '/static/images/move-5.jpg'
      ],
      category: 1
    },
    3: {
      id: 3,
      title: 'Sloe Films',
      slug: 'sloe-films',
      content: 'Brand identity for a new independent TV production company, producing Nigel Slater’s new cooking shows. Working from a brief for simplicity and understated sophistication, we created a new diacritical mark with the O. The mark references the sloe berry in an abstract minimal form and serves as a standalone graphic device.',
      credits: 'In collaboration with Studio Lovelock.',
      url: 'http://studiolovelock.com',
      images: [
        '/static/images/sloe-1.jpg',
        '/static/images/sloe-2.jpg',
        '/static/images/sloe-3.jpg',
        '/static/images/sloe-4.jpg',
        '/static/images/sloe-5.jpg',
        '/static/images/sloe-6.jpg'
      ],
      category: 1
    },
    4: {
      id: 4,
      title: 'Cookie Studio',
      slug: 'cookie-studio',
      content: 'This responsive web design project also involved developing the Cookie Studio brand. A distinctive animation studio based in East London, the brief was centred around showcasing the energy and creativity the studio has to offer. A significant part of the process involved looking the brand tone of voice and defining their offering clearly through a new showreel and selected projects.',
      credits: 'Joe Lovelock, Studio Lovelock, Creative Director. Development by Martin Buckner.',
      url: 'http://cookiestudio.tv',
      images: [
        '/static/images/cookie-1.jpg',
        '/static/images/cookie-2.jpg',
        '/static/images/cookie-3.jpg'
      ],
      category: 2
    },
    5: {
      id: 5,
      title: 'Leapfrog Investments',
      slug: 'leapfrog-investments',
      content: 'LeapFrog are an ethical investor making a huge social impact in emerging markets. As part of a comprehensive rebrand, work included redesigning their site to reflect their new identity, designing brand guidelines and print design of marketing materials.',
      credits: 'Joe Lovelock, Studio Lovelock, Creative Director. Additional design from Richard Simic. Development by Martin Buckner.',
      url: 'http://leapfroginvest.com',
      images: [
        '/static/images/leapfrog-1.jpg',
        '/static/images/leapfrog-2.jpg',
        '/static/images/leapfrog-3.jpg'
      ],
      category: 2
    },
    6: {
      id: 6,
      title: 'Tina Hillier',
      slug: 'tina-hillier',
      content: 'Tina Hillier is a portrait and reportage photographer. Her work has appeared in the National Portrait Gallery and clients include FT Weekend Magazine, Monocle, Random House, Saturday Telegraph Magazine & Sunday Times Magazine. Along with a responsive web design an understated identity was created focusing on stylish and modern typography.',
      credits: 'Development by Stirtingale.',
      url: 'http://tinahillier.com',
      images: [
        '/static/images/tina-1.jpg',
        '/static/images/tina-2.jpg',
        '/static/images/tina-3.jpg'
      ],
      category: 2
    },
    7: {
      id: 7,
      title: 'FIL Guadalajara 2015',
      slug: 'fil-guadalajara-2015',
      content: 'Design and print management of a 120-page festival programme in Spanish and A1 poster for the Feria Internacional del Libro de Guadalajara. The brief was to evolve an existing festival identity to appeal to both Spanish and UK audiences, developing a colourful palette inspired by Mexican art and design while still using a European design aesthetic.',
      credits: 'Part of the year of cultural exchange between UK and Mexico, the British Council led the production of materials for this event. Print by Fara Printers.',
      url: 'https://www.britishcouncil.org',
      images: [
        '/static/images/fil-1.jpg',
        '/static/images/fil-2.jpg',
        '/static/images/fil-3.jpg',
        '/static/images/fil-4.jpg',
        '/static/images/fil-5.jpg'
      ],
      category: 3
    },
    8: {
      id: 8,
      title: 'South Asian Literature Festival',
      slug: 'south-asian-literature-festival',
      content: 'After creating the festival brand, I was responsible for all the design for the 4 years the festival ran. This included programmes, flyers, large-format posters, web design and merchandise. Below is a collection of images from two festival programmes.',
      images: [
        '/static/images/salf-1.jpg',
        '/static/images/salf-2.jpg',
        '/static/images/salf-3.jpg',
        '/static/images/salf-4.jpg',
        '/static/images/salf-5.jpg'
      ],
      category: 3
    },
    9: {
      id: 9,
      title: 'The Synthesis of Movement',
      slug: 'the-synthesis-of-movement',
      content: 'A collaboration with photographer David Newman, the project aimed to capture movement through the static medium of photography. Professional dancers were auditioned and chosed on their ability to improvise to music. Work involved assisting on multiple shoots, and designing the exhibition poster that featured custom type design.',
      images: [
        '/static/images/tsom-1.jpg',
        '/static/images/tsom-2.jpg',
        '/static/images/tsom-3.png',
        '/static/images/tsom-4.jpg',
        '/static/images/tsom-5.png'
      ],
      category: 3
    },
    10: {
      id: 10,
      title: 'Cephalonia',
      slug: 'cephalonia-typeface',
      content: 'Cephalonia is an all caps geometric sans-serif that draws its inspiration from classical greek engravings. Its unique crossbars in the letters O, E, F and D are the most notable examples of this greek influence. Cephalonia combines the simplicity and elegance of the most famous geometric sans-serifs while adding original embellishments that make it something new and exciting. The end result is a typeface that can evoke a classic feeling while simultaneously holding an edgy contemporary feel.',
      credits: 'Cephalonia is available to purchase from youworkforthem in 4 weights. A complete font of uppercase and lowercase is coming soon!',
      url: 'https://youworkforthem.com',
      images: [
        '/static/images/cephalonia-1.jpg',
        '/static/images/cephalonia-2.jpg',
        '/static/images/cephalonia-3.jpg',
        '/static/images/cephalonia-4.jpg',
        '/static/images/cephalonia-5.jpg',
        '/static/images/cephalonia-6.jpg',
        '/static/images/cephalonia-7.jpg',
        '/static/images/cephalonia-8.jpg'
      ],
      category: 4
    },
    11: {
      id: 11,
      title: 'Lu Lu',
      slug: 'lu-lu',
      content: 'A mono-weight, bifurcated serif typeface in all caps. Based off of an old classic French biscuit logo. This distinctive vintage display typeface can also evoke edgier sentiments when set in a moodier context, as well as making for a playful option when set in a soft colour palette.',
      credits: 'Lu Lu is available to buy in two weights from myfonts.',
      url: 'https://myfonts.com',
      images: [
        '/static/images/Lu-Lu-1.jpg',
        '/static/images/Lu-Lu-2.jpg',
        '/static/images/Lu-Lu-3.jpg',
        '/static/images/Lu-Lu-4.jpg',
        '/static/images/Lu-Lu-5.jpg',
        '/static/images/Lu-Lu-6.jpg'
      ],
      category: 4
    },
    12: {
      id: 12,
      title: 'Miscellaneous Lettering',
      slug: 'miscellaneous-lettering',
      content: 'A selection of work including personal projects, pro bono and client work. Techniques range from sketches and traditional calligraphic techniques to digital lettering.',
      images: [
        '/static/images/misc-1.jpg',
        '/static/images/misc-2.jpg',
        '/static/images/misc-3.jpg',
        '/static/images/misc-4.jpg',
        '/static/images/misc-5.jpg',
        '/static/images/misc-6.jpg',
        '/static/images/misc-7.jpg',
        '/static/images/misc-8.jpg',
        '/static/images/misc-9.jpg',
        '/static/images/misc-10.jpg',
        '/static/images/misc-11.jpg',
        '/static/images/misc-12.jpg',
        '/static/images/misc-13.jpg',
        '/static/images/misc-14.jpg',
        '/static/images/misc-15.jpg'
      ],
      category: 4
    }
  },
/* Categories: Digital, Brand, Print etc
========================================================================== */
  categories: {
    1: {
      id: 1,
      name: 'Brand'
    },
    2: {
      id: 2,
      name: 'Digital'
    },
    3: {
      id: 3,
      name: 'Print'
    },
    4: {
      id: 4,
      name: 'Type'
    }
  },
  products: {
    1: {
      id: 1,
      title: 'Cephalonia Typeface',
      price: '$30',
      content: 'Cephalonia is an all caps geometric sans-serif that draws its inspiration from classical greek engravings. Its unique crossbars in the letters O, E, F and D are the most notable examples of this greek influence.',
      heroImage: '/static/images/Cephalonia-1.jpg',
      slug: 'cephalonia-typeface',
      images: [
        '/static/images/Cephalonia-2.jpg',
        '/static/images/Cephalonia-3.jpg',
        '/static/images/Cephalonia-4.jpg',
        '/static/images/Cephalonia-5.jpg',
        '/static/images/Cephalonia-6.jpg',
        '/static/images/Cephalonia-7.jpg',
        '/static/images/Cephalonia-8.jpg'
      ],
      buyText: 'buy cephalonia | ',
      buyUrl: 'https://www.youworkforthem.com/font/T4519/cephalonia'
    },
    2: {
      id: 2,
      title: 'Lu Lu Typeface',
      price: '$45',
      content: 'A mono-weight, bifurcated serif typeface in all caps. Based off of an old classic French biscuit logo. This distinctive vintage display typeface can also evoke edgier sentiments when set in a moodier context, as well as making for a playful option when set in a soft colour palette.',
      heroImage: '/static/images/Lu-Lu-1.jpg',
      slug: 'lulu-typeface',
      images: [
        '/static/images/Lu-Lu-2.jpg',
        '/static/images/Lu-Lu-3.jpg',
        '/static/images/Lu-Lu-4.jpg',
        '/static/images/Lu-Lu-5.jpg',
        '/static/images/Lu-Lu-6.jpg'
      ],
      buyText: 'Buy Lu Lu | ',
      buyUrl: 'https://www.myfonts.com/fonts/design-by-pascal/lu-lu/'
    }
  }
}

export function projects (
  state = initialState.projects,
  action
) {
  return state
}

export function categories (
  state = initialState.categories,
  action
) {
  return state
}

export function products (
  state = initialState.products,
  action
) {
  return state
}
