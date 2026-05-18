# 🧠 Hero Section Code Walkthrough

This is my **landing section**, and I design it as a **full-screen immersive introduction layer**.

It combines:

* background storytelling
* motion effects
* personal positioning
* conversion actions
* skill signaling

---

# 🧩 Component Setup (What I import)

```js id="h1x9pl"
import { Button } from "@/components/Button";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
```

I bring in:

* UI components (Button, AnimatedBorderButton)
* icons for actions (arrow, download, scroll cue)
* social icons (GitHub, LinkedIn)

👉 This gives me a mix of **conversion UI + navigation UI + identity signals**.

---

# 🧠 Skills Data Model (Tech stack signal)

```js id="k8q1vd"
const skills = [
```

I define a list of technologies I work with.

Instead of hardcoding UI:

* I treat skills as data
* later render them as a scrolling marquee

👉 This becomes a **credibility signal strip**

---

# 🧱 Section Foundation (Full-screen hero)

```jsx id="p2m8xn"
<section className="relative min-h-screen flex items-center overflow-hidden">
```

I structure the hero as:

* full viewport height (`min-h-screen`)
* vertically centered content
* overflow hidden for visual effects

👉 This ensures first impression is immersive.

---

# 🌄 Background Layer (Visual depth system)

```jsx id="b7v1lm"
<div className="absolute inset-0">
```

I build a layered background system:

### 1. Image layer

```jsx id="x4q9kd"
<img src="/hero-bg.jpg" className="object-cover opacity-40" />
```

* sets mood
* adds texture
* kept subtle (40% opacity)

---

### 2. Gradient overlay

```jsx id="m9p3lz"
bg-gradient-to-b from-background/20 via-background/80 to-background
```

I darken and control readability:

* top → lighter
* bottom → darker

👉 This ensures text contrast always works.

---

# 🌊 Animated Particle Layer (Green dots)

```jsx id="z2k8vn"
{[...Array(30)].map(...)}
```

I generate 30 floating dots:

* random position
* slow drift animation
* subtle opacity

👉 This creates a **living background feel**

Important idea:

> I don’t animate everything — just enough to feel alive.

---

# 🧭 Main Layout Grid

```jsx id="t8x2qp"
<div className="grid lg:grid-cols-2 gap-12">
```

I split hero into two systems:

### Left → Narrative + CTA

### Right → Visual identity (profile)

---

# 🧠 LEFT COLUMN (Messaging system)

---

## 🏷️ Role badge (positioning signal)

```jsx id="v1k9pm"
Software Development • Trainer • Consultant
```

This is my **professional identity strip**:

* communicates roles instantly
* builds authority in one line

---

## 🧱 Headline (core message)

```jsx id="n7q3lm"
Designing and Engineering Digital products
```

This is the **main positioning statement**.

I structure it as:

* strong opening line
* highlighted keyword (“Digital”)
* emotional finish (“Intent and Care”)

👉 This is my “value proposition layer”

---

## 📄 Supporting paragraph

I explain:

* who I am
* what I build
* how I think

This turns abstract headline into **contextual trust**.

---

# 🎯 CTA SYSTEM (Conversion layer)

```jsx id="c4p8vd"
<Button size="lg">Contact Me</Button>
<AnimatedBorderButton>Download CV</AnimatedBorderButton>
```

I create two actions:

### Primary CTA

👉 Contact Me

* leads to conversion

### Secondary CTA

👉 Download CV

* leads to credibility artifact

---

# 🔗 Social Proof Layer

```jsx id="f9q1lx"
FaGithub / FaLinkedin
```

I add social links to:

* show external validation
* allow deeper exploration

👉 This reduces “unknown creator” friction

---

# 🧠 RIGHT COLUMN (Identity visual system)

---

## 🌟 Glow background effect

```jsx id="k3v9pm"
bg-gradient-to-br blur-2xl animate-pulse
```

This creates:

* depth
* motion
* focus around profile

---

## 🖼️ Profile image

```jsx id="x8q2vn"
<img src="/profile-photo.png" />
```

This is my **human identity anchor**.

👉 It balances the technical text on the left.

---

## 🟢 Floating badge (availability state)

```jsx id="m1p7ld"
Available for work
```

This communicates:

* current status
* hiring availability

👉 It acts like a real-time signal

---

## 📊 Stats badge

```jsx id="z7q4vn"
More than 20 Years in IT
```

This is **instant credibility reinforcement**.

---

# 🎡 Skills Marquee (Tech exposure system)

```jsx id="p9k2lm"
{[...skills, ...skills].map(...)}
```

I duplicate the array to create a **continuous scroll loop**.

Each skill:

* fades in/out visually
* scrolls horizontally
* reinforces tech stack depth

---

# ⬇️ Scroll indicator

```jsx id="t2v8qp"
ChevronDown + Scroll text
```

I guide users downward:

* indicates more content below
* improves navigation flow

---

# 🧠 Mental Model (How I think about this Hero)

I break it into 5 stacked systems:

---

## 1. 🌄 Background System

* image + gradient + particles
* sets emotional tone

---

## 2. 🧠 Identity System

* headline
* role tags
* personal positioning

---

## 3. 🎯 Conversion System

* Contact button
* CV download

---

## 4. 🧍 Human System

* profile image
* availability badge
* credibility stats

---

## 5. 🔄 Motion System

* floating dots
* marquee skills
* hover effects

---

# 🚀 Big Picture Insight

This Hero is not just UI — it’s a:

> “multi-layer attention funnel”

It moves users through:

1. Emotion (background)
2. Identity (headline)
3. Trust (skills + stats)
4. Action (CTA buttons)

---

# ✨ Final Mental Model

I think of it as:

> 🧠 “A cinematic landing screen that transitions users from curiosity → trust → action.”

