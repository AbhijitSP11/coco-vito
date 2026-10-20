# Coco Vito — 3D Menu Miniatures

The menu rows currently use drawn SVG miniatures. This is how to replace them
with real 3D renders, and the prompts to generate them.

---

## 1. Wiring a render in

1. Generate a square render with a **transparent background**, 512×512.
2. Save it to `assets/img/` as the item's id — `hazelnut-latte.png`, `affogato.png`.
3. Add one field to that item in [menu-data.js](assets/js/menu-data.js):

```js
{ id: 'hazelnut-latte', name: 'Hazelnut', price: 280, icon: 'cup',
  image: 'assets/img/hazelnut-latte.png', signature: true, note: '…' }
```

That row switches to the render. Anything without `image` keeps its vector, so
you can do them a few at a time. Keep `icon` as the fallback.

**Do not skip the transparent background.** A white square will show as a hard
tile against the menu's off-white, and it is the one thing that will make the
whole page look cheap.

---

## 2. The house prompt

Same block for every dish, so all 33 renders match. Swap only the first line.

```
A single [DISH], rendered as a tiny 3D miniature model.

STYLE: soft-body 3D product render, matte clay-like materials with a slight
satin sheen, gently rounded edges, no hard specular hotspots. Three-quarter
view from slightly above, as if the object sits on a table just below eye
level. Centred in frame with even margin on all sides. Lit by one large soft
key from the upper left and a soft fill from the right, casting one soft
contact shadow directly beneath the object.

PALETTE: warm cream, olive green, soft tan and deep cocoa brown. Muted and
restrained, low saturation, nothing neon or candy coloured.

OUTPUT: transparent background, square 1:1, 512x512, the object filling about
80 percent of the frame, no ground plane, no backdrop, no text, no logos,
no props, no hands, no garnish beyond what is named.
```

Generate four per dish and keep the one whose scale and angle match the others.

**Consistency trick:** render the hazelnut latte first and get it right. Then
feed that image back as a style reference for every other dish, so the camera
angle, light direction and shadow softness stay locked across the set.

---

## 3. The dish line

Drop each of these in as `[DISH]`. Thirteen shapes cover all 33 rows — you only
need one render per shape unless you want every item distinct.

### Minimum set (13 renders, one per `icon` value)

| File | `[DISH]` line |
|---|---|
| `cup.png` | a small cream ceramic cup of latte on a matching saucer, with a thin rosetta on the surface |
| `iced.png` | a tall clear glass of iced matcha latte with two ice cubes and a straw |
| `fizz.png` | a tall clear glass of dark iced coffee with fine bubbles rising |
| `matcha.png` | a wide cream ceramic matcha bowl of whisked green matcha with a bamboo whisk resting beside it |
| `scoop.png` | one round scoop of pale gelato in a small shallow cream dish |
| `cone.png` | a waffle cone holding one round scoop of cream gelato |
| `croissant.png` | one golden croissant, plump and curved, with visible layered ridges |
| `cookie.png` | one thick round chocolate chip cookie seen at a slight tilt |
| `slice.png` | a single square slice of tiramisu with visible cream and sponge layers, dusted with cocoa |
| `affogato.png` | a short glass of espresso with one scoop of vanilla gelato sitting on top |
| `milk.png` | a small carton of oat milk with a plain olive green label |
| `choc.png` | a bar of dark chocolate with segment grooves, one corner broken off |
| `crosswich.png` | a croissant sliced open as a sandwich with a green filling visible |

### Per-dish, if you want all 33 distinct

Same house prompt, swapping the dish line:

- **Hazelnut** — a cream cup of latte with two whole hazelnuts beside the saucer
- **Tiramisu latte** — a cream cup of latte dusted with cocoa powder
- **Honey Cinnamon** — a cream cup of latte with a cinnamon stick across the saucer
- **Sicilian** — a cream cup of latte with a curl of orange zest
- **Fridge Cigarette** — a tall glass of dark cola with an espresso layer floating on top
- **Raging Bull** — a tall slim glass of pale iced energy drink with espresso swirling in
- **Espresso Martini** — a coupe glass of dark espresso and tonic with a fine foam head
- **Mont Blanc Coffee** — a tall glass of orange juice with a dark espresso layer on top
- **Island Coffee** — a tall glass of clear coconut water with espresso settling through it
- **Matcha Latte** — a tall glass of green matcha over white milk, clearly layered
- **Iced Matcha** — a tall glass of straight green matcha over ice
- **Island Matcha** — a tall glass of green matcha over coconut water with ice
- **Blueberry Matcha** — a tall glass of green matcha over milk with a purple blueberry layer at the base
- **Strawberry Cheesecake Matcha** — a tall glass layered pink, cream and green
- **Pascati Hot Chocolate** — a cream mug of thick hot chocolate with two small marshmallows
- **Oat Milk / Almond Milk** — a small carton with a plain olive label
- **Pascati Chocolate** — a small jug pouring a thread of dark melted chocolate
- **Madagascar Vanilla** — one scoop of cream gelato flecked with vanilla seeds
- **Lotus Biscoff** — one caramel scoop with a biscuit shard standing in it
- **Belgian Cheesecake** — one pale scoop with dark chocolate shards
- **Banoffee Pie** — one caramel scoop with a banana slice on top
- **Waffle Cone** — an empty waffle cone standing upright
- **Pascati Cone** — a waffle cone with a dark chocolate lining visible at the rim
- **Gelato × Croissant** — a croissant split open with a scoop of gelato inside
- **Affogato** — a short glass of espresso with a scoop of vanilla gelato on top
- **Gelato × Cookie** — a scoop of gelato pressed between two round cookies
- **Tiramisu** — a square slice with cream and sponge layers, dusted with cocoa
- **NY Baked Cheesecake** — a tall wedge of baked cheesecake with a biscuit base
- **Chocochip Brookie** — a thick square of brownie-cookie with melting chips
- **Butter Croissant** — one golden croissant with layered ridges
- **Paneer Tikka Crosswich** — a croissant sandwich with orange paneer and green chutney
- **Truffle Mushroom Crosswich** — a croissant sandwich with mushroom and melted cheese

---

## 4. Checks before you ship them

| Check | Why |
|---|---|
| Transparent background, no ground plane | A white tile on an off-white page looks broken |
| Same camera angle across the set | Mixed angles read as clip art, not a system |
| Object fills ~80% of frame, consistently | Otherwise sizes jitter down the menu |
| Shadow directly beneath, soft | A hard or offset shadow fights the page |
| No text anywhere in the render | Generators will invent packaging labels |
| Under about 60 KB each | 33 renders is the page's whole weight budget |

Export as PNG for transparency, then run them through an optimiser. WebP is
smaller if you add a PNG fallback, but at this size PNG is fine.
