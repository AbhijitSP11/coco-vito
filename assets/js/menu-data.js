/* Coco Vito — menu data.
   ---------------------------------------------------------------------------
   PRICES ARE PLACEHOLDERS. The menu supplied had no prices, and the order list
   cannot total an order without them, so these are plausible Mumbai specialty
   cafe figures. Replace them with the real ones before going live — this file
   is the only place they appear.

   `icon` picks a vector from assets/js/icons.js. Available:
   cup, iced, fizz, matcha, scoop, cone, croissant, cookie, slice, affogato,
   milk, choc, crosswich
   --------------------------------------------------------------------------- */

window.COCO_MENU = [
  {
    id: 'lattes',
    name: 'Lattes Reimagined',
    note: 'Our espresso, taken somewhere else',
    items: [
      { id: 'hazelnut-latte', name: 'Hazelnut',       price: 280, icon: 'cup', image: 'assets/img/hazelnut-latte.webp', ingredients: ['Double espresso','Roasted hazelnut','Steamed milk','Praline crumb'], signature: true,  note: 'Double shot, roasted hazelnut, steamed to a rosetta.' },
      { id: 'tiramisu-latte', name: 'Tiramisu',       price: 300, icon: 'cup', image: 'assets/img/tiramisu-latte.webp', signature: true,  note: 'Mascarpone cream, cocoa dusted. Dessert in a cup.' },
      { id: 'honey-cinnamon', name: 'Honey Cinnamon', price: 280, icon: 'cup', image: 'assets/img/honey-cinnamon.webp', ingredients: ['Double espresso','Wild honey','Cassia bark','Steamed milk'], signature: false, note: 'Wild honey and cassia bark, warm all the way down.' },
      { id: 'sicilian-latte', name: 'Sicilian',       price: 300, icon: 'cup', image: 'assets/img/sicilian-latte.webp', ingredients: ['Double espresso','Sicilian almond','Orange zest','Pistachio'], signature: false, note: 'Almond and citrus zest, the way they drink it in Noto.' }
    ]
  },
  {
    id: 'fun',
    name: 'Fun With Coffee',
    note: 'Espresso, but not as you know it',
    items: [
      { id: 'fridge-cigarette', name: 'Fridge Cigarette',  price: 260, icon: 'fizz', image: 'assets/img/fridge-cigarette.webp', signature: true,  note: 'Espresso over chilled Diet Coke. Yes, really.' },
      { id: 'raging-bull',      name: 'Raging Bull',       price: 320, icon: 'fizz', image: 'assets/img/raging-bull.webp', signature: false, note: 'Espresso and Red Bull over ice. Handle with care.' },
      { id: 'espresso-martini', name: 'Espresso Martini',  price: 300, icon: 'fizz', image: 'assets/img/espresso-martini.webp', signature: true,  note: 'Espresso lengthened with tonic. Zero proof, full bitter.' },
      { id: 'mont-blanc',       name: 'Mont Blanc Coffee', price: 290, icon: 'iced', image: 'assets/img/mont-blanc.webp', signature: false, note: 'Espresso over fresh orange juice. Bright and sharp.' },
      { id: 'island-coffee',    name: 'Island Coffee',     price: 310, icon: 'iced', image: 'assets/img/island-coffee.webp', signature: false, note: 'Espresso over tender coconut water. Light and clean.' }
    ]
  },
  {
    id: 'matcha',
    name: 'Matcha, Done Well',
    note: 'Ceremonial grade, whisked by hand',
    items: [
      { id: 'matcha-latte',      name: 'Matcha Latte',                 price: 320, icon: 'matcha', signature: true,  note: 'Whisked to a fine foam, poured over cold milk.' },
      { id: 'iced-matcha',       name: 'Iced Matcha',                  price: 330, icon: 'iced',   signature: false, note: 'Straight matcha over ice. Nothing to hide behind.' },
      { id: 'island-matcha',     name: 'Island Matcha',                price: 360, icon: 'iced',   signature: false, note: 'Matcha over tender coconut water.' },
      { id: 'blueberry-matcha',  name: 'Blueberry Matcha',             price: 360, icon: 'iced',   signature: false, note: 'House blueberry compote under the pour.' },
      { id: 'strawberry-matcha', name: 'Strawberry Cheesecake Matcha', price: 380, icon: 'matcha', signature: true,  note: 'Strawberry, cheesecake cream and matcha, layered.' }
    ]
  },
  {
    id: 'chocolate',
    name: 'Hot Chocolate',
    note: 'One, made properly',
    items: [
      { id: 'pascati-hot-choc', name: 'Pascati Hot Chocolate', price: 290, icon: 'cup', signature: true, note: 'Single origin Pascati couverture, melted slow.' }
    ]
  },
  {
    id: 'extras',
    name: 'A Little Extra',
    note: 'Add to any drink',
    items: [
      { id: 'oat-milk',     name: 'Oat Milk',          price: 60, icon: 'milk', signature: false, note: 'Barista oat, steams like dairy.' },
      { id: 'almond-milk',  name: 'Almond Milk',       price: 60, icon: 'milk', signature: false, note: 'House almond, lightly sweet.' },
      { id: 'pascati-shot', name: 'Pascati Chocolate', price: 80, icon: 'choc', signature: false, note: 'A shot of melted couverture through anything.' }
    ]
  },
  {
    id: 'gelato',
    name: 'Our Gelato Flavours',
    note: 'Churned in house every morning',
    items: [
      { id: 'madagascar-vanilla', name: 'Madagascar Vanilla', price: 220, icon: 'scoop', signature: false, note: 'Real pods, flecked through. The one to judge us on.' },
      { id: 'lotus-biscoff',      name: 'Lotus Biscoff',      price: 240, icon: 'scoop', signature: true,  note: 'Caramelised biscuit folded through.' },
      { id: 'belgian-cheesecake', name: 'Belgian Cheesecake', price: 240, icon: 'scoop', signature: true,  note: 'Cheesecake base, Belgian chocolate shards.' },
      { id: 'banoffee-pie',       name: 'Banoffee Pie',       price: 240, icon: 'scoop', signature: false, note: 'Banana, toffee and crushed biscuit.' }
    ]
  },
  {
    id: 'base',
    name: 'Choose Your Base',
    note: 'Every scoop needs somewhere to sit',
    items: [
      { id: 'waffle-cone',  name: 'Waffle Cone',  price: 60, icon: 'cone', signature: false, note: 'Pressed fresh through the day.' },
      { id: 'pascati-cone', name: 'Pascati Cone', price: 90, icon: 'cone', signature: false, note: 'Waffle cone lined with Pascati chocolate.' }
    ]
  },
  {
    id: 'creations',
    name: 'Gelato Creations',
    note: 'Where the gelato bar shows off',
    items: [
      { id: 'gelato-croissant', name: 'Gelato × Croissant', price: 340, icon: 'croissant', signature: true,  note: 'Warm croissant split and filled with a scoop.' },
      { id: 'affogato',         name: 'Affogato',                price: 300, icon: 'affogato',  signature: true,  note: 'Madagascar vanilla, drowned in a double shot.' },
      { id: 'gelato-cookie',    name: 'Gelato × Cookie',    price: 320, icon: 'cookie',    signature: false, note: 'A scoop pressed between two warm cookies.' }
    ]
  },
  {
    id: 'sweet',
    name: 'Sweet Treats',
    note: 'Made fresh, finished to order',
    items: [
      { id: 'tiramisu',          name: 'Tiramisu',            price: 320, icon: 'slice',  signature: true,  note: 'Mascarpone, espresso soaked sponge, bitter cocoa.' },
      { id: 'ny-cheesecake',     name: 'NY Baked Cheesecake', price: 340, icon: 'slice',  signature: true,  note: 'Dense, baked low and slow, barely sweet.' },
      { id: 'chocochip-brookie', name: 'Chocochip Brookie',   price: 280, icon: 'cookie', signature: false, note: 'Half brownie, half cookie, served warm.' }
    ]
  },
  {
    id: 'savoury',
    name: 'The Savoury Side',
    note: 'All day, from the counter',
    items: [
      { id: 'butter-croissant',  name: 'Butter Croissant',           price: 180, icon: 'croissant', signature: false, note: 'Laminated over three days. Nothing else needed.' },
      { id: 'paneer-crosswich',  name: 'Paneer Tikka Crosswich',     price: 320, icon: 'crosswich', signature: true,  note: 'Charred tikka paneer, mint chutney, red onion.' },
      { id: 'truffle-crosswich', name: 'Truffle Mushroom Crosswich', price: 340, icon: 'crosswich', signature: true,  note: 'Wild mushroom, truffle cream, melted cheese.' }
    ]
  }
];

/* Instagram reviews.
   ---------------------------------------------------------------------------
   THESE ARE PLACEHOLDER POSTS. The handles and the words are written, not
   collected — they exist so the section has something to lay out. Replace them
   with real posts before this goes live, and get the author's permission to
   reuse each one. Published testimonials that nobody actually wrote are a
   problem under India's consumer protection rules on misleading advertising,
   quite apart from the trust cost if a customer looks a handle up.

   `icon` picks the avatar mark from icons.js. `video` is the post media.
   --------------------------------------------------------------------------- */

window.COCO_REVIEWS = [
  {
    handle: 'placeholder.one',
    place: 'Coco Vito · Bandra West',
    icon: 'matcha',
    video: 'assets/video/matcha.mp4',
    likes: 1284,
    when: '2 days ago',
    text: 'Came for the matcha, stayed for the Fridge Cigarette. Espresso over chilled Diet Coke should not work. It absolutely works.'
  },
  {
    handle: 'placeholder.two',
    place: 'Coco Vito · Bandra West',
    icon: 'croissant',
    video: 'assets/video/living-menu-2.mp4',
    likes: 2107,
    when: '5 days ago',
    text: 'The Gelato x Croissant is the best thing I have eaten this month. Warm pastry, cold scoop, pistachio crumb. Go before the queue finds out.'
  },
  {
    handle: 'placeholder.three',
    place: 'Coco Vito · Bandra West',
    icon: 'crosswich',
    video: 'assets/video/food.mp4',
    likes: 863,
    when: '1 week ago',
    text: 'Paneer Tikka Crosswich. Proper char, real mint chutney, laminated croissant. Somebody in that kitchen genuinely cares.'
  },
  {
    handle: 'placeholder.four',
    place: 'Coco Vito · Bandra West',
    icon: 'affogato',
    video: 'assets/video/dessert.mp4',
    likes: 1516,
    when: '1 week ago',
    text: 'Affogato at four in the afternoon, kitchen still open, nobody rushing you out. This is the one.'
  }
];

/* The signature carousel on the home page.
   `video` is a file in assets/video/ — swap in new clips as you generate them. */
window.COCO_SHOWCASE = [
  {
    itemId: 'matcha-latte',
    kicker: 'Matcha, Done Well',
    name: 'Matcha Latte',
    note: 'Ceremonial grade, whisked by hand.',
    video: 'assets/video/matcha.mp4',
    tint: ['#28371d', '#9cba6a', '#121809']
  },
  {
    itemId: 'tiramisu',
    kicker: 'Sweet Treats',
    name: 'Tiramisu',
    note: 'Mascarpone, espresso sponge, bitter cocoa.',
    video: 'assets/video/dessert.mp4',
    tint: ['#333d22', '#7f9a4e', '#141b0d']
  },
  {
    itemId: 'gelato-croissant',
    kicker: 'Gelato Creations',
    name: 'Gelato × Croissant',
    note: 'Warm croissant, split and filled with a scoop.',
    video: 'assets/video/living-menu-2.mp4',
    tint: ['#3b4a26', '#b4cd88', '#171f0f']
  },
  {
    itemId: 'paneer-crosswich',
    kicker: 'The Savoury Side',
    name: 'Paneer Tikka Crosswich',
    note: 'Charred tikka paneer, mint chutney.',
    video: 'assets/video/food.mp4',
    tint: ['#36441f', '#93ad60', '#151c0d']
  },
  {
    itemId: 'fridge-cigarette',
    kicker: 'Fun With Coffee',
    name: 'Fridge Cigarette',
    note: 'Espresso over chilled Diet Coke.',
    video: 'assets/video/menu-film.mp4',
    tint: ['#2c3a1e', '#8aa455', '#131a0c']
  }
];
