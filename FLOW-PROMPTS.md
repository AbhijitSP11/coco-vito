# Coco Vito — Google Flow (Veo 3.1) Ad Shoot Prompt Pack

Every shot is set in a warm café interior thrown into deep bokeh, and every shot carries the
**COCO VITO** wordmark in-frame. See §1B for how to get the lettering to render cleanly — this is
the one thing Veo is genuinely bad at, and the blurred background is what makes it work.

---

## 0. How to run this in Flow

| Setting | Use |
|---|---|
| Model | **Veo 3.1 — Quality** (native audio). Use *Fast* only for rough look-tests. |
| Mode | **Text to Video** for shots 1–14. **Frames to Video** when you need an exact start/end pose. **Ingredients to Video** once you have real photos of your own cups, plates and branding. |
| Aspect | `16:9` for the website hero + YouTube. Re-run the same prompt at `9:16` for Reels/Shorts — do not crop, re-generate. |
| Length | 8s per generation. Use **Extend** to reach 16s/24s. Use **Scenebuilder** to chain shots into the menu films (§3). |
| Outputs | Generate **4 variations per prompt**, keep the best. Budget ~3 attempts per hero shot. |

**Consistency trick:** photograph your actual cup, branded sleeve, plate and counter. Drop those
images into **Ingredients to Video** along with the prompt. Every clip then matches your real
crockery instead of inventing generic café props.

---

## 1. House Style Block

Paste this at the end of **every** prompt so all clips cut together as one campaign.

```
STYLE: premium food-commercial cinematography, shot on ARRI Alexa with Laowa 24mm probe macro
and 100mm macro lens, very shallow depth of field at T1.8, 120fps slow motion conformed to 24fps,
single large soft key from camera-left through a diffusion frame, warm practical rim light behind
the subject to separate steam and texture.

SETTING: inside a warm specialty café at golden hour. The subject is razor sharp in the foreground
and the entire café interior behind it falls away into deep creamy bokeh — amber pendant lights
rendering as soft round orbs, a blurred brass espresso machine, out-of-focus timber shelving and
hanging plants, faint silhouettes of seated customers. The background is never black and never a
plain studio backdrop; it is always a blurred, lived-in café.

BRANDING: a warm amber neon script sign reading COCO VITO glows softly out of focus in the
background bokeh, and the wordmark COCO VITO appears once more on a physical surface near the
subject. Only these two instances, nothing else written anywhere in frame.

Palette: espresso brown, warm cream, burnt caramel, with one accent colour per dish.
Surfaces: dark walnut counter, raw linen, matte ceramic, warm brass. Editorial and uncluttered.
Subtle film grain, no lens flares, no chromatic aberration. Photoreal, not CGI. Colour grade: warm
highlights, cool shadows, rich but natural saturation.

NEGATIVE: misspelled text, garbled lettering, gibberish writing, repeated or duplicated wordmark,
extra words, taglines, paragraphs of text, subtitles, captions, watermarks, black background,
plain studio backdrop, sharp or cluttered background, distorted hands, extra fingers, faces,
people looking at camera, plastic or waxy food, oversaturated neon colours, fisheye distortion,
shaky footage, cartoon, CGI render, stock-footage look, mushy low detail, melted deformed shapes,
floating objects, duplicate objects.
```

---

## 1B. Branding — getting COCO VITO to render

Veo garbles text. It is the weakest thing it does. But your two requests solve each other: **blurred
text is forgiving text.** A neon sign sitting in deep bokeh can be slightly imperfect and still read
perfectly as your sign, because the blur hides the flaws. A sharp wordmark in the foreground has
nowhere to hide. So the strategy is one soft one and one sharp one, and you re-roll until the sharp
one is right.

**The five rules**

1. **Exactly `COCO VITO`.** Uppercase, two short words, nothing else. No tagline, no "est. 2024",
   no address, no prices. Every extra word multiplies the chance of garbling.
2. **Two placements per clip, never more.** The blurred background neon (always) plus one physical
   surface near the dish (varies by dish — see the table). Three or more and Veo starts inventing
   nonsense words on every surface in frame.
3. **Generate 4 variations, keep the one that spelled it right.** This is normal. Budget for it.
4. **Push it out of focus if it keeps failing.** Move the sharp placement to the mid-ground so it
   sits at the edge of the focus falloff. It still reads as branding, and it stops garbling.
5. **Endcard, logo lockup, dish names and prices go in post.** Never ask Veo for those. The in-video
   branding is there so the clip feels shot in your café, not to do your titles.

**Per-dish placement for the sharp wordmark**

| Shot | Surface carrying COCO VITO |
|---|---|
| 2.1 Hazelnut Latte | kraft cup sleeve around the cup |
| 2.2 Tiramisu | embroidered linen napkin folded beside the plate |
| 2.3 Diet Coke | round wooden coaster under the glass |
| 2.4 Matcha Latte | etched into the side of the glass |
| 2.5 Hot Chocolate | stamped on the cream stoneware mug |
| 2.6–2.8 Gelato | printed on the gelato tub label / paper cup |
| 2.9 Waffles | printed small on the plate rim |
| 2.10 Gelato × Croissant | branded greaseproof paper under the croissant |
| 2.11 / 2B Fries | printed on the paper cone liner |
| 2.12 Truffle Fries | stamped on the dark ceramic bowl |
| 2.13 Wraps | branded greaseproof wrap paper |
| 2.14 Paneer Tikka Wrap | branded paper sleeve around the wrap |
| 3.x Menu films | chalkboard in the bokeh + the neon sign |
| 3.5 The Counter | embroidered on the barista's apron chest |

**Swap line.** To change the placement in any prompt, replace the branding line in the house block
with: `the wordmark COCO VITO printed on [surface] beside the dish, sharp and legible, plus a warm
amber neon COCO VITO sign glowing out of focus in the background bokeh.`

**If the sharp placement will not behave**, give up on it and use this instead — then overlay your
real logo in the edit, where it will be pixel-perfect:

```
BRANDING (fallback): a warm amber neon script sign reading COCO VITO glows out of focus in the
background bokeh. No other text anywhere in frame. Leave clean empty bokeh in the lower third of
the frame.
```

---

## 2. Individual Dish Films (14 shots)

Each is a standalone 8-second ad. Shoot idea first, then the prompt to paste.

---

### 2.1 Hazelnut Latte — *"The Rosetta"*

**Shoot idea:** The whole film is one pour. Start tight on dark crema, lift as steamed milk breaks
the surface and draws a rosetta, finish with roasted hazelnuts dropping in beside the cup. Sells
craft, not sweetness.

```
Extreme macro top-down shot of a matte cream ceramic cup filled with dark espresso crema on a dark
walnut counter. A thin stream of steamed milk pours in from the upper frame and draws a perfect
rosetta leaf pattern across the surface in slow motion. The camera slowly rises and tilts to a
three-quarter view as the pour finishes. Two roasted hazelnuts fall into frame beside the cup and
settle. Fine wisps of steam drift through a warm backlight. Caramel-amber accent tones.
AUDIO: soft milk pour, gentle ceramic settle, low warm café ambience, no music, no voices.
[+ HOUSE STYLE BLOCK]
```

**Extend to 16s:** `Continue: a hand lifts the cup out of frame, leaving a ring of condensation and drifting steam on the empty walnut surface.`

---

### 2.2 Tiramisu — *"The Breach"*

**Shoot idea:** Chiaroscuro, but warm. One hard shaft of light on the dessert, the café behind it
melting into amber bokeh. Cocoa dust falls through the beam, then a spoon breaks the surface.

```
Side-on macro shot of a single square of tiramisu on a dark slate plate, lit by one hard beam of
light from the upper left, with an embroidered linen napkin reading COCO VITO folded beside the
plate, and the warm café interior behind dropping away into deep amber bokeh with soft round
pendant light orbs and a blurred neon COCO VITO sign glowing in the distance. Fine cocoa powder
sifts down through the
light beam and settles on the surface in slow motion. A polished silver spoon enters from the right,
presses through the dusted top and lifts a portion away, revealing clean distinct layers of
coffee-soaked sponge and glossy mascarpone cream. The camera pushes in slowly as the spoon lifts.
Dust motes float in the beam. Deep espresso and ivory palette.
AUDIO: soft crisp spoon through cream, faint cocoa sift, quiet room tone, no music.
[+ HOUSE STYLE BLOCK]
```

---

### 2.3 Diet Coke — *"Ice, Then Fizz"*

**Shoot idea:** The one cold, graphic, high-contrast clip in the set — it resets the eye between
warm shots. Silver can, hard specular edges, bubble macro, cooler bokeh behind it.

```
High speed macro shot of a chilled silver aluminium can beaded with condensation standing on a round
wooden coaster stamped COCO VITO on a wet dark walnut café table, two hard rim lights running
down each edge of the can, the café interior behind thrown completely out of focus into cool
blue-grey and amber bokeh with a blurred neon COCO VITO sign glowing among the light orbs. Cola
pours in a clean arc into a tall glass of crystal clear ice cubes beside it, the glass filling as
carbonation bubbles race upward and foam crowns the rim. One ice cube drops in and a single droplet
splashes upward in extreme slow motion. Cool silver and deep amber highlights.
AUDIO: sharp can crack and hiss, ice clinking, fizzing carbonation, liquid pour, no music.
[+ HOUSE STYLE BLOCK]
```

---

### 2.4 Matcha Latte — *"Jade Bloom"*

**Shoot idea:** The opposite of the latte shot — cool, calm, daylight, linen. The hero moment is
green hitting white milk and blooming.

```
Top-down macro shot of a wide matte stone bowl of vivid jade matcha being whisked with a bamboo
chasen, building a fine jade foam, on a pale linen cloth in soft diffused window daylight. Cut to a
tall clear glass of cold milk over ice, and the whisked matcha pours in from above, blooming and
curling through the white milk in slow motion like green ink in water. The camera drifts slowly
sideways as the colours marble together. Jade green accent against cream and pale stone.
AUDIO: soft bamboo whisk against ceramic, gentle pour, quiet morning ambience, no music.
[+ HOUSE STYLE BLOCK]
```

---

### 2.5 Hot Chocolate — *"Molten"*

**Shoot idea:** Thickness is the product. Shoot the pour slow enough to read the viscosity, then
drop marshmallows for texture and finish with grated chocolate. Warm, cosy, winter.

```
Macro three-quarter shot of thick glossy molten dark chocolate pouring slowly from a small copper
pan into a cream stoneware mug, the liquid folding over itself with visible weight and leaving a
smooth rippled surface. Steam rises through warm golden backlight. Three soft marshmallows drop in
one by one and bob on the surface. Dark chocolate is grated over the top and the shavings curl down
through the steam. Dark walnut table, wool blanket softly out of focus behind. Deep cocoa and warm
gold palette.
AUDIO: thick viscous pour, soft marshmallow plops, faint steam hiss, warm fireside room tone, no music.
[+ HOUSE STYLE BLOCK]
```

---

### 2.6 Gelato — Lotus Biscoff — *"The Curl"*

**Shoot idea:** Shot at the gelato counter itself, not in a studio. The scoop curl is the hero —
get the spade drag and the crumb cascade, with the café dissolving behind it.

```
Macro shot of a stainless steel gelato spade dragging through a tub of caramel coloured Biscoff
gelato, rolling up a thick textured curl with visible crushed biscuit pieces through it. The curl is
lifted and placed into a paper cup printed COCO VITO sitting on a pale marble gelato counter, the
café interior behind completely out of focus in warm creamy bokeh with amber pendant orbs and a
blurred neon COCO VITO sign. Crushed spiced biscuit crumbs are scattered over the top in slow
motion and a half biscuit is pressed into the side. The camera orbits slowly around the scoop.
Caramel and biscuit tan palette.
AUDIO: dense scoop drag through gelato, light crumb scatter, clean studio quiet, no music.
[+ HOUSE STYLE BLOCK]
```

---

### 2.7 Gelato — Belgian Chocolate — *"Dark Fold"*

```
Macro shot of a gelato spade carving a thick glossy curl from a tub of deep dark Belgian chocolate
gelato, the surface showing dense fudgy texture. The curl is placed into a small dark ceramic cup on
a dark marble gelato counter beside a tub whose label reads COCO VITO, one soft overhead key and a
hard rim light on the scoop, the café behind falling into deep warm brown bokeh with soft amber
orbs and a blurred neon COCO VITO sign. Warm melted chocolate is drizzled over the scoop and runs
slowly down one side.
Fine chocolate shavings fall across frame. The camera pushes in slowly as the drizzle settles.
Near-black cocoa palette with a single warm highlight.
AUDIO: dense scoop drag, slow thick drizzle, clean studio quiet, no music.
[+ HOUSE STYLE BLOCK]
```

---

### 2.8 Gelato — Strawberry — *"Fresh Cut"*

```
Macro shot of a pale pink strawberry gelato scoop with visible fruit flecks resting in a frosted
glass coupe on a pale marble counter in bright soft window daylight, a paper cup printed COCO VITO
standing just behind it, and the café interior dissolving into bright creamy bokeh with pale light
orbs and a softly glowing neon COCO VITO sign. A fresh strawberry is sliced in half beside it and the halves fall into frame, their wet
cut faces catching the light. A thin ribbon of strawberry coulis is spooned over the scoop and runs
down into the glass in slow motion. The camera arcs gently from low to level. Blush pink, red and
cream palette, bright and fresh.
AUDIO: soft knife through strawberry, light coulis drizzle, clean studio quiet, no music.
[+ HOUSE STYLE BLOCK]
```

---

### 2.9 Waffles — *"Golden Grid"*

**Shoot idea:** Heat and release. Iron opens into steam, waffle lifts, butter melts into the
pockets, syrup floods the grid.

```
Macro shot of a cast iron waffle press opening to release a cloud of steam, revealing a deep golden
Belgian waffle with crisp defined pockets. Tongs lift the waffle onto a warm cream plate on a dark
walnut counter. A square of butter is placed in the centre and melts into the pockets in slow
motion. Warm maple syrup pours from above and floods across the grid, pooling in each square and
spilling over the edge. The camera tracks slowly in and tilts down as the syrup spreads. Golden
brown and amber palette, warm morning side light.
AUDIO: iron hinge and steam release, crisp waffle on plate, slow syrup pour, warm kitchen ambience, no music.
[+ HOUSE STYLE BLOCK]
```

---

### 2.10 Gelato × Croissant — *"The Build"*

**Shoot idea:** Your signature item, so shoot it as a build, not a static hero. Croissant split,
scoop pressed in, pistachio crumb, lift. Three beats in eight seconds.

```
Macro shot of a golden flaky croissant on a bakery marble counter being sliced horizontally with a
serrated knife, loose pastry flakes scattering. A thick curl of cream coloured gelato is pressed
into the opening and spreads slightly under the top half. Crushed pistachios are sprinkled over the
exposed gelato and a drizzle of dark chocolate is laced across the top. The finished croissant
gelato sandwich sits in soft morning window light as the camera slowly rises to a three-quarter hero
angle. Golden pastry, cream and green pistachio palette.
AUDIO: crisp serrated knife through flaky pastry, light pistachio scatter, quiet bakery ambience, no music.
[+ HOUSE STYLE BLOCK]
```

---

### 2.11 Fries — *"Golden Rain"*

**Shoot idea:** Energy. Backlit salt falling through dark air is the best-looking frame you can get
out of fries — build the shot around it.

```
Macro shot of a fryer basket lifting out of bubbling oil loaded with crisp golden fries, steam
pouring off them, shot with a strong backlight against a café kitchen pass thrown far out of focus
into warm amber bokeh with a blurred neon COCO VITO sign glowing behind. The basket shakes
and the fries toss and resettle in slow motion. The fries tumble into a paper lined metal cone, and
coarse salt is thrown from above, the grains catching the backlight as they fall through the air
like golden rain. The handheld camera pushes in slightly on the finished cone. Deep amber and dark
charcoal palette, high contrast.
AUDIO: oil sizzle, basket shake and rattle, crisp fries tumbling, no music.
[+ HOUSE STYLE BLOCK]
```

---

### 2.12 Truffle Fries — *"The Luxe Finish"*

**Shoot idea:** Same food, completely different grade. Darker, slower, more expensive. Parmesan
snow, truffle oil, shaved truffle. This clip justifies the price gap on the menu.

```
Slow macro shot of a bowl of crisp golden fries, the dark ceramic bowl stamped COCO VITO, on a dark
walnut café table in moody warm light with a single hard rim light from behind, the café interior
behind reduced to deep amber bokeh and a blurred neon COCO VITO sign. A microplane grates parmesan
over the bowl and the cheese falls as fine
white snow through the rim light in slow motion. Fragrant truffle oil is drizzled across the fries
in a thin glossy ribbon. Paper thin black truffle slices are laid on top with tweezers and chopped
parsley is scattered. The camera pushes in very slowly and steam curls through the backlight.
Deep charcoal, gold and ivory palette, rich and restrained.
AUDIO: fine grating, soft oil drizzle, faint crackle of hot fries, quiet upscale kitchen, no music.
[+ HOUSE STYLE BLOCK]
```

---

### 2.13 Wraps — *"Roll and Reveal"*

**Shoot idea:** Movement and sizzle. Griddle, fillings, the roll, then the diagonal cut showing the
cross-section. The cut is the money shot — hold on it.

```
Macro shot of a soft flour tortilla warming on a flat griddle with light char blistering across its
surface. Fresh fillings are laid down the centre in a clean line: crisp shredded lettuce, sliced
tomato, red onion and a ribbon of creamy sauce. Hands with the fingers out of frame fold the sides
and roll the wrap tight in one smooth motion. The wrap is turned seam down on the griddle to sear,
then cut on a sharp diagonal with a chef knife and the two halves are stood upright to show the
packed spiral cross section. Camera handheld and energetic, pushing in on the cut faces.
Warm griddle tones, fresh green and red accents.
AUDIO: tortilla sizzle on griddle, knife through crisp wrap, light kitchen ambience, no music.
[+ HOUSE STYLE BLOCK]
```

---

### 2.14 Paneer Tikka Wrap — *"Char and Smoke"*

**Shoot idea:** Spice, smoke and tandoor glow — the warmest, most textured clip in the set. Lead
with the grill, finish with the cross-section.

```
Macro shot of marinated paneer cubes in deep orange tikka spice searing on a hot grill, developing
dark char marks, with smoke curling up through a warm amber backlight. A soft roomali roti is laid
flat and spread with bright green mint chutney, then layered with the charred paneer, thin red onion
rings and fresh coriander. The roti is rolled tight and seared seam down, then cut on a diagonal and
the halves stood up to reveal the charred paneer and green chutney in cross section. The camera
moves from a low grill-level angle up to a three-quarter hero shot. Warm tandoor orange, deep char
and fresh green palette.
AUDIO: paneer sizzling on grill, soft smoke hiss, knife through the wrap, warm kitchen ambience, no music.
[+ HOUSE STYLE BLOCK]
```

---

## 2B. Bullet Time Set — Peri Peri Loaded Fries

The frozen-moment / levitation shot. Everything hangs in mid-air, the camera orbits the frozen
moment, then time resumes and the ingredients land together in the bowl. This is the hardest shot
in the pack to generate and the best one you'll get — budget 5–8 attempts.

**The build:** golden fries, peri peri masala, coarse peri peri seasoning mix, red chilli flakes,
fresh chopped coriander, grated cheese.

### How to make Veo actually hold the freeze

Veo does not understand "bullet time" as a term. You have to describe the three beats literally:

1. `everything is suspended motionless in mid-air, time is completely frozen`
2. `the camera orbits [N] degrees around the frozen suspended ingredients`
3. `time resumes and everything falls`

Add these to the negative prompt on every bullet-time shot, on top of the house block:

```
NEGATIVE (bullet time): objects drifting or moving while time is frozen, warping or morphing
ingredients, duplicating fries, smearing motion blur, objects passing through each other,
ingredients disappearing mid-orbit, jelly wobble, slow-motion instead of full freeze,
background coming into focus during the orbit, particles blending into the background.
```

**One thing the café background costs you.** Suspended masala dust, chilli flakes and cheese
strands separate instantly against black — against bokeh they can sink into the background. Three
fixes, all already built into the prompts below: keep the **hard rim backlight** (it outlines every
particle), keep the bokeh **darker and warmer** than the particles, and add `strong separation
between the sharp foreground subject and the soft background` if a generation comes back muddy.
If a take still reads flat, push the background further out: add `extremely shallow depth of field,
background completely unrecognisable, pure soft light orbs only`.

**Flow technique that works better than one prompt:** use **Frames to Video**. First frame = the
scattered suspended arrangement. Last frame = the finished loaded bowl. Veo fills the convergence.
You get a far cleaner "coming together" than text-to-video alone. The alternative cheat: generate
the *explosion* (§2B.2), which Veo finds much easier, then **reverse the clip in your editor** —
everything flies inward and assembles perfectly.

---

### 2B.1 "The Convergence" — hero bullet-time shot

**Shoot idea:** Fries hang in a loose cluster at centre frame. Masala, chilli flakes, coriander and
cheese hang suspended around them in a sphere, caught mid-fall. The camera orbits the frozen moment,
then time snaps back and everything collapses into the bowl in one hit.

```
Extreme macro shot with a strong rim backlight, set against a warm café interior thrown completely
out of focus into deep amber bokeh — soft round pendant light orbs, a blurred brass espresso
machine, and a glowing neon COCO VITO sign out of focus behind. Twelve crisp golden fries
hang motionless in mid-air in a loose cluster at the centre of frame, time completely frozen.
Suspended around them in a sphere and caught mid-fall are a cloud of fine orange-red peri peri
masala powder, coarse peri peri seasoning grains, bright red chilli flakes, torn fresh green
coriander leaves and strands of grated cheese. Every particle is sharp, motionless and individually
lit by the backlight. The camera orbits 180 degrees around the frozen suspended arrangement in one
smooth continuous move, the particles glinting as the light rakes across them. Time then resumes
and everything drops at once into a dark ceramic bowl below stamped COCO VITO, the seasoning
cascading over the fries. Warm amber bokeh, fiery orange-red, golden and fresh green palette,
strong separation between the sharp subject and the soft background.
AUDIO: total silence during the frozen orbit with a faint low hum, then a sharp snap as time
resumes, fries and seasoning landing in the bowl, no music.
[+ HOUSE STYLE BLOCK]
[+ NEGATIVE (bullet time)]
```

**Extend to 16s:** `Continue: the camera settles to a low three-quarter hero angle on the finished bowl of peri peri loaded fries as the last of the masala dust drifts down and melted cheese stretches between two fries.`

---

### 2B.2 "The Explosion" — generate this, then reverse it

**Shoot idea:** Easier for Veo, and reversed in the edit it gives you a perfect assembly. A finished
bowl of loaded fries bursts apart, freezes at full expansion, the camera orbits, and it hangs there.

```
Extreme macro shot with hard rim backlight, set against a warm café interior blown far out of focus
into deep amber bokeh with soft light orbs and a blurred neon COCO VITO sign. A finished bowl of
golden
fries loaded with orange-red peri peri masala, red chilli flakes, chopped coriander and grated
cheese bursts apart, every element launching outward away from the centre in extreme slow motion.
At full expansion all motion stops completely and the entire arrangement hangs frozen in mid-air:
fries, masala dust, coarse seasoning grains, chilli flakes, coriander leaves and cheese strands all
suspended and motionless, evenly spread through the frame. The camera orbits slowly around the
frozen explosion, holding the freeze throughout. Every particle stays sharp and separated against
the soft bokeh. Warm amber bokeh, fiery orange-red, golden and fresh green palette.
AUDIO: a deep low impact, then total silence with a faint sustained tone during the frozen orbit,
no music.
[+ HOUSE STYLE BLOCK]
[+ NEGATIVE (bullet time)]
```

> Reverse this clip in your editor and it becomes the cleanest "ingredients come together" shot
> you'll get out of Flow. Cut the reversed version straight into the §2B.1 landing.

---

### 2B.3 "The Dust Orbit" — tight, vertical, for Reels

**Shoot idea:** Tighter and simpler, so it generates reliably. One cone of fries, seasoning cloud
suspended around it, a single slow 360. This is the one to run at 9:16.

```
Extreme macro vertical shot with a hard rim light from behind, set against a warm café interior
thrown far out of focus into creamy amber bokeh with round pendant light orbs and a glowing neon
COCO VITO sign blurred behind. A single cone of crisp golden fries, its paper liner printed
COCO VITO, stands at centre frame. Suspended motionless in the air
around the cone, time completely frozen, is a swirling cloud of fine orange-red peri peri masala
powder, coarse peri peri seasoning grains, red chilli flakes, torn coriander leaves and fine
strands of grated cheese, every particle individually sharp and catching the backlight. The camera
makes one slow continuous 360 degree orbit around the frozen cone, the suspended cloud never moving.
On the final frame time resumes and the cloud falls onto the fries. Vertical composition, cone
centred in the upper two thirds, clean uncluttered bokeh in the lower third.
Warm amber bokeh, fiery orange-red and golden palette.
AUDIO: silence with a faint low hum during the orbit, then a soft rush as the seasoning lands,
no music.
[+ HOUSE STYLE BLOCK]
[+ NEGATIVE (bullet time)]
```

---

### 2B.4 "The Toss and Freeze" — bullet time with motion in it

**Shoot idea:** Warmer and more kitchen-real than the black-background shots. A pan toss freezes at
the peak of the arc, camera orbits, then it lands.

```
Macro shot with a strong warm backlight and visible haze, the café interior behind blown entirely
out of focus into warm amber bokeh with a blurred neon COCO VITO sign glowing among the light orbs.
A black pan tosses a
load of crisp golden fries upward and at the peak of the arc all motion stops completely. The fries
hang frozen in mid-air above the pan along with a suspended cloud of orange-red peri peri masala,
coarse seasoning grains, red chilli flakes, torn coriander and grated cheese that was thrown with
them. The camera orbits 120 degrees around the frozen arc of food, the warm backlight raking across
the suspended particles and steam. Time then resumes and everything falls back into the pan with a
burst of steam. Warm amber bokeh background, fiery red and green accents.
AUDIO: a sharp pan toss, then total silence during the frozen orbit, then the fries landing back in
the pan with a sizzle, no music.
[+ HOUSE STYLE BLOCK]
[+ NEGATIVE (bullet time)]
```

---

### Reusing this on other dishes

The structure transfers. Swap the suspended elements and the accent colour, keep everything else:

| Dish | Suspended elements |
|---|---|
| Truffle Fries | parmesan snow, shaved black truffle, parsley, a ribbon of truffle oil frozen mid-pour |
| Paneer Tikka Wrap | charred paneer cubes, red onion rings, coriander, a frozen arc of green chutney |
| Belgian Waffle | waffle quarters, butter cube, a frozen ribbon of maple syrup, icing sugar cloud |
| Gelato × Croissant | croissant halves, a gelato scoop, pistachio crumb, frozen chocolate drizzle |
| Hazelnut Latte | the cup, a frozen arc of milk mid-pour, whole and cracked hazelnuts, coffee beans |

---

## 2C. The Living Menu — floating 3D dish layer

An open Coco Vito menu lies on the table. The dishes lift off the page one at a time as tiny
Michelin-plated miniatures, each shot from its own angle, until the whole menu is floating above
the card. Food sits on white bone china; the drinks hover on their own, no plate, no saucer.
This is the signature shot of the campaign — it's the one people will screenshot.

### Read this before you generate

**Do not ask Veo for the dish names.** Fourteen floating labels is far beyond what it can spell.
You will get confident gibberish on every plate and waste a day re-rolling. The names go on in
your editor — and that's not a compromise, it's how this shot is actually made in commercials. You
get your real typeface, correct spelling, and control over when each one animates in.

So the generation needs to do three things for you:

1. **Reserve the label space.** The prompt below includes `clean empty air beside each floating
   plate` so you have somewhere to put the typography.
2. **One beat per dish, and no hard cuts.** Each dish gets its own angle, but the camera *moves*
   between them rather than cutting. That gives you a clean 2D track per dish in After Effects or
   CapCut, and a clear moment to animate each name in. Whip-pans and handheld make it miserable.
3. **Handle the menu page text honestly.** The page header reads `COCO VITO` — two words, Veo can
   manage that. The rest of the menu copy is prompted as *small and softly out of focus*, so it
   reads as a real menu at a glance and any garbling is invisible. Never prompt for legible body
   copy on the page.

**Two Flow techniques that pay off here:**

- **Ingredients to Video** — photograph your actual menu card and feed it in. The floating dishes
  then rise off *your* menu, not a generic one.
- **Frames to Video** — first frame: miniatures sitting flat on the closed menu. Last frame: the
  same miniatures floating in a tiered arrangement above it. Veo fills the lift. This gives a far
  cleaner rise than text-to-video alone.

---

### The miniatures — plating direction

"Michelin miniature" means each dish is shrunk to one or two bites, centred on an oversized white
plate with a lot of negative space, finished with tweezers. The four drinks are the exception —
they get no plate and no saucer, they just hover as the glass or cup. Use this as the plating
brief:

| Dish | Miniature |
|---|---|
| Hazelnut Latte | thimble-sized glass cup, a micro rosetta on top, two whole hazelnuts beside it |
| Tiramisu | one 2cm cube, sharp edges, cocoa dusted, a single gold leaf flake on the corner |
| Diet Coke | miniature cut-glass tumbler, one clear ice cube, condensation beads |
| Matcha Latte | tiny clear glass, a clean jade layer floating over white milk |
| Hot Chocolate | thimble mug, one micro marshmallow, a dusting of grated chocolate |
| Lotus Biscoff Gelato | a single small quenelle, one biscuit shard standing upright in it |
| Belgian Chocolate Gelato | dark quenelle with a curved chocolate tuile arcing over it |
| Strawberry Gelato | blush quenelle, one paper-thin strawberry slice, three coulis dots |
| Waffle | one 3cm waffle square, a butter pearl in the centre, a single syrup dot |
| Gelato × Croissant | a 4cm croissant with a gelato quenelle set in it, pistachio dust |
| Wrap | a 2cm pinwheel slice stood upright to show the spiral, one micro herb |
| Fries | six matchstick fries stacked into a tiny tower, coarse salt, one dot of aioli |
| Truffle Fries | three fries leaning together, parmesan snow, one shaved truffle slice |
| Paneer Tikka Wrap | a 2cm pinwheel with visible char, a green chutney dot, micro coriander |

Drop the relevant rows straight into the prompt when you want specific dishes named in-shot.

---

### The shot

Each dish arrives on its own beat, shot from a different angle, accumulating above the menu until
all twelve are floating together in the final frame.

**Twelve dishes will not fit in eight seconds.** At 0.6s each they'd be a blur and the labels would
have nowhere to land. So this is **one video built from two generations**: an 8s opening that
brings in six dishes, then **Extend** for the back six and the wide reveal. Total 16s, about 1.3s
per dish — enough for each one to register and for its name to animate in.

**The drinks never get a plate.** The four drinks hover on their own — just the glass or the cup,
nothing underneath. Only the food sits on white bone china.

This structure is also better for your typography than the old tiered version: each dish gets a
clear beat of its own, so you label it the moment it lands and it holds while the camera moves on.

**Both prompts are self-contained.** Don't append the house style block.

---

**Part 1 — generate this first (8s)**

```
Macro sequence above an open cream linen-paper menu card lying flat on a dark walnut café table,
its header printed COCO VITO in clean letterpress, the rest of the menu copy small and softly out
of focus. Miniature dishes appear one at a time, each rising off the page and settling to hover
motionless in mid-air, accumulating in the frame as the camera changes angle for each arrival.
Food is plated Michelin style on small round white bone china plates with generous negative space.
Drinks have no plate and no saucer beneath them at all — each drink hovers on its own as just a
glass or a cup.

Beat one, low three-quarter angle looking up: a thimble sized glass cup of latte with a micro
rosetta rises and holds, no plate beneath it.
Beat two, camera swings to straight top-down: a 2cm cocoa dusted tiramisu cube with a flake of
gold leaf rises on a white plate beside it.
Beat three, camera drops to a level profile angle: a single caramel gelato quenelle with a biscuit
shard standing in it rises on a white plate.
Beat four, camera lifts to a high forty-five degree angle: a 3cm waffle square with a butter pearl
and one syrup dot rises on a white plate.
Beat five, camera orbits slowly inward: a 4cm croissant with a gelato quenelle set into it and
pistachio dust rises on a white plate.
Beat six, camera settles to a straight-on eye-level macro: a thimble glass of jade matcha over
milk rises and holds, no plate beneath it.

Each arrival is a smooth continuous camera reposition, never a hard cut. Every dish already in the
air stays perfectly level and perfectly still as the next one arrives. Clean empty air is left
beside each floating item. Behind everything, the café interior falls away into deep warm amber
bokeh with soft round pendant light orbs, a blurred brass espresso machine, and a glowing neon
sign reading COCO VITO softly out of focus.

STYLE: premium food-commercial cinematography, ARRI Alexa with a 100mm macro lens, very shallow
depth of field at T1.8, 120fps slow motion conformed to 24fps, large soft key from camera-left
through a diffusion frame, warm practical rim light separating each plate from the background.
Palette: espresso brown, warm cream, burnt caramel, crisp white porcelain. Subtle film grain, no
lens flares. Photoreal, not CGI. Warm highlights, cool shadows, rich but natural saturation.

AUDIO: a soft rising tone as each item lifts, a faint ceramic chime as it settles, quiet warm café
ambience with a distant espresso machine, no music, no voices.

NEGATIVE: drinks on plates, saucers under glasses, plates beneath cups, dish name labels, floating
text, readable paragraphs of menu copy, price lists, misspelled or gibberish lettering, giant full
size dishes, normal portion sizes, all dishes appearing at once, plates wobbling or drifting while
suspended, plates tilting or spilling, food falling off plates, visible strings or stands,
cluttered or overlapping plates, plates intersecting each other, duplicated identical dishes,
warped or morphing plates, hard cuts, black background, plain studio backdrop, sharp background,
distorted hands, faces, plastic or waxy food, cartoon, CGI render, shaky footage.
```

---

**Part 2 — Extend from the end of Part 1 (8s)**

```
Continue the same sequence above the menu card, the six existing miniatures still hovering
motionless. Six more arrive one at a time, each with its own camera angle, until all twelve are
floating together.

Beat seven, low hero angle looking up: a 2cm wrap pinwheel stood upright showing its spiral rises
on a white plate.
Beat eight, camera tilts into a slight dutch angle: a charred paneer tikka pinwheel with a green
chutney dot rises on a white plate.
Beat nine, camera returns to a level profile: a tower of six matchstick fries with coarse salt
rises on a white plate.
Beat ten, camera lifts to a high angle looking down: a tiny bowl of truffle fries with parmesan
snow rises.
Beat eleven, camera drops to a warm three-quarter: a thimble mug of hot chocolate with one
marshmallow rises and holds, no plate beneath it.
Beat twelve, camera settles straight on: a miniature cut glass tumbler of cola on a single ice
cube rises and holds, no plate beneath it.

The camera then pulls back smoothly and cranes up to a wide three-quarter hero view revealing all
twelve miniatures floating together in clean tiers above the menu card, every one perfectly still,
clean empty air beside each. Warm amber café bokeh behind with the neon COCO VITO sign glowing out
of focus. Hold on the full arrangement.

AUDIO: soft rising tones and faint ceramic chimes as each item settles, then a warm sustained tone
as the camera pulls back, quiet café ambience, no music, no voices.

NEGATIVE: drinks on plates, saucers under glasses, plates beneath cups, dish name labels, floating
text, price lists, gibberish lettering, dishes disappearing, existing dishes moving or drifting,
plates tilting or spilling, duplicated dishes, plates intersecting, hard cuts, black background,
sharp background, cartoon, CGI render, shaky footage.
```

---

**If the accumulation drifts** — dishes from earlier beats sliding, vanishing or duplicating as new
ones arrive — generate the beats as separate 2s clips against the same menu plate and assemble them
in Scenebuilder. You lose the single-take feel but you get total control, and with matched lighting
nobody reads it as separate takes.
### Adding the names in post

Generate at **1080p**, then in After Effects (or CapCut, which is enough for this):

1. **2D track** each floating plate — this is why the camera moves are slow and steady.
2. Set each label in your brand face, **left-aligned into the empty air** the prompt reserved.
3. Stagger the animation: each name fades up ~4 frames after its plate settles. Staggering is what
   makes it feel three-dimensional rather than stuck on.
4. Add a thin connector line from label to plate if the layout gets crowded.
5. Keep prices off this shot. Names only — prices belong on the menu page, not in the air.

---

## 3. Multi-Dish Menu Films

These carry the whole menu. Build each by generating the beats separately and chaining them in
**Scenebuilder**, or run the single prompt and **Extend**.

---

### 3.1 "The Full Menu Flyover" — 16s hero film

**Shoot idea:** One unbroken overhead dolly down a long walnut table where the entire menu is laid
out in sections — drinks, then sweets, then savoury. No cuts, no people. It reads as confidence.

```
Continuous smooth overhead tracking shot moving slowly along a long dark walnut communal table,
camera looking straight down, travelling from one end to the other in one unbroken move. The table
is laid out in three sections that pass through frame in order. First the drinks: a latte with a
rosetta, a jade matcha latte over ice, a mug of thick hot chocolate with marshmallows, and a tall
glass of cola over ice beading with condensation. Then the sweets: a square of tiramisu dusted with
cocoa, three gelato scoops in caramel, dark chocolate and pink, a golden Belgian waffle with syrup,
and a croissant filled with gelato and pistachio. Then the savoury: a diagonally cut wrap standing
to show its cross section, a charred paneer tikka wrap, a cone of golden fries, and a bowl of
truffle fries with parmesan snow. Steam drifts from the hot items. Scattered coffee beans, linen
napkins and brass cutlery sit between the plates. Soft overhead daylight with warm practical rim
light.
AUDIO: gentle café ambience, distant espresso machine, soft clinking, no music, no voices.
[+ HOUSE STYLE BLOCK]
```

**Extend prompt:** `Continue the same unbroken overhead move to the end of the table, finishing on an empty dark walnut surface with two coffee cups and drifting steam.`

---

### 3.2 "Signature Six — Drinks" — 8s whip-pan montage

**Shoot idea:** Six beats in eight seconds joined by whip pans. Fast, modern, built for social.

```
Fast paced macro montage of six café drinks connected by quick whip pan transitions, each beat
roughly one second. Beat one: steamed milk pouring a rosetta into a latte, top down. Beat two:
a bamboo whisk building jade foam in a matcha bowl. Beat three: thick molten chocolate pouring into
a cream mug with steam. Beat four: cola pouring over crystal ice with bubbles racing up the glass.
Beat five: espresso extracting in a double stream from a polished portafilter. Beat six: all five
drinks landing together on a dark walnut counter in a tight hero group as the camera settles.
Energetic but controlled camera, consistent warm lighting across every beat.
AUDIO: milk steam wand, bamboo whisk, thick pour, fizzing cola, espresso extraction, cups landing on
wood, tight rhythmic sound design, no music, no voices.
[+ HOUSE STYLE BLOCK]
```

---

### 3.3 "The Sweet Section" — 8s

```
Macro montage of four desserts in sequence with smooth match cut transitions. A spoon lifts a
portion from a cocoa dusted tiramisu revealing its layers. Cut to a gelato spade rolling a thick
curl from a tub of caramel biscuit gelato with crumbs falling. Cut to warm syrup flooding the
pockets of a golden Belgian waffle as butter melts. Cut to a flaky croissant filled with gelato
being lifted from a marble counter with pistachio crumbs falling away. Each shot is a slow push in.
Warm cream, caramel and chocolate palette throughout, soft diffused key light.
AUDIO: spoon through cream, scoop drag, syrup pour, crisp pastry, soft café ambience, no music.
[+ HOUSE STYLE BLOCK]
```

---

### 3.4 "The Savoury Section" — 8s

```
Macro montage of four savoury dishes in sequence with fast energetic transitions. Marinated paneer
tikka cubes searing and charring on a hot grill with smoke curling through backlight. Cut to a wrap
being rolled tight on a griddle and sliced on a sharp diagonal, the halves standing to show the
packed cross section. Cut to a fryer basket lifting from bubbling oil and fries tumbling into a
paper lined cone with coarse salt thrown through the backlight. Cut to parmesan grated as fine snow
over a bowl of truffle fries with truffle oil drizzled across. Handheld energy, high contrast,
deep amber and char tones.
AUDIO: grill sizzle, knife through crisp wrap, oil bubbling and basket shake, fine grating,
rhythmic kitchen sound design, no music, no voices.
[+ HOUSE STYLE BLOCK]
```

---

### 3.5 "The Counter" — 8s lifestyle opener

**Shoot idea:** The only clip with people, and you never see a face — hands, steam, the pass. Use it
as the first two seconds of every cut-down.

```
Warm handheld shot inside a busy specialty café at golden hour, shot from behind the counter. Steam
rises from an espresso machine in the foreground with light raking through it. Out of focus
customers move in the background. A barista's hands, seen from behind and never showing a face,
slide a finished latte and a plate with a gelato filled croissant across a dark walnut pass toward
the camera. Shallow depth of field, warm amber window light flaring softly past the lens edge,
natural lived-in atmosphere.
AUDIO: espresso machine hiss and grinder, ceramic on wood, low murmur of conversation, warm room
tone, no music, no intelligible dialogue.
[+ HOUSE STYLE BLOCK]
```

---

## 4. Format Variants

Re-generate, don't crop:

| Use | Aspect | Note |
|---|---|---|
| Website hero loop | 16:9 | §3.1 and §3.5. Mute and loop. In-video neon branding only — no overlay needed. |
| Menu page cards | 1:1 or 4:5 | Individual dish films from §2. |
| Reels / Shorts / Stories | 9:16 | Add to the prompt: `vertical composition, subject centred in the upper two thirds, clean negative space in the lower third for text overlay.` |
| Paid social cutdown | 9:16 | §3.2 / §3.4 — they already have the pace for it. |

---

## 5. Fixing Bad Generations

| Problem | Fix |
|---|---|
| Food looks plastic or waxy | Add `visible natural imperfection, crumbs, condensation, uneven surface, real texture` and push the negative prompt harder. |
| COCO VITO misspelled or garbled | Re-roll — it takes a few. If it keeps failing, cut to the neon sign only (§1B fallback) and overlay the sharp wordmark in post. Never add a second slogan to "help" it. |
| Wordmark appearing on every surface | You have more than two placements in the prompt. Strip back to the neon plus one surface and add `no other text anywhere in frame`. |
| Background too sharp or too busy | Add `extremely shallow depth of field, background completely unrecognisable, pure soft light orbs only`. |
| Mangled hands | Add `hands visible only from the wrist, fingers out of frame`, or cut hands entirely. |
| Too fast or frantic | Add `single continuous slow camera move, no cuts` and name one action only. |
| Clips don't match each other | You skipped the House Style Block, or you're mixing Fast and Quality. Re-run on Quality with the block. |
| Steam looks fake | Specify `warm rim light from behind the steam against a dark background` — steam only reads when backlit. |
| Gelato looks melted or deformed | Add `firm freshly scooped gelato holding its shape, cold and solid`. |

---

## 6. Suggested Shoot Order

1. **§3.5 The Counter** — sets the look. Lock the grade here before anything else.
2. **§2.1 Hazelnut Latte** and **§2.12 Truffle Fries** — your warmest and your most premium. If both work, the style block is right.
3. The remaining twelve dish films.
4. **§2B Bullet Time** — leave it for a session of its own. It has the lowest hit rate in the pack,
   so run §2B.2 (the explosion) first: if that holds a clean freeze, the others will too.
5. **§2C The Living Menu** — also its own session. If the levitation won't settle after a handful
   of attempts, fall back to the flat-lay variant at the end of that section and fake the lift in
   post.
6. **§3.1 The Full Menu Flyover** last — by then you'll know exactly how each dish should be plated.
