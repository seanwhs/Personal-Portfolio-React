# 🧠 Contact Section Code Walkthrough

This is my **contact system**, and it combines three things:

* 🧾 controlled form state
* ⚙️ async email submission (EmailJS)
* 📡 UI feedback system (loading + success/error)

---

# 📦 Imports (What I rely on)

```js
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
```

I bring in:

* Icons → for visual contact info + feedback states
* `Button` → reusable UI component
* `useState` → to manage form + UI state
* `useEffect` → to auto-clear messages
* `emailjs` → to send emails without a backend

---

# 📇 Static Data Model (Contact Info)

```js id="g7l1ab"
const contactInfo = [
```

I define my contact methods as structured data:

* Email
* Phone
* Location

Each item contains:

* icon
* label
* value
* link

👉 This lets me render everything dynamically instead of hardcoding UI.

---

# ⚙️ Core State System

```js id="kq9x1v"
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});
```

I treat the form as a **controlled component**.

👉 Every input field is synced with React state.

---

```js id="x1p9lm"
const [isLoading, setIsLoading] = useState(false);
```

This controls:

* button loading state
* prevents multiple submissions

---

```js id="v8q2sd"
const [submitStatus, setSubmitStatus] = useState({
  type: null,
  message: "",
});
```

This is my **feedback system**:

* `success` → green message
* `error` → red message
* `null` → hidden

---

# ⏱️ Auto-Clear Feedback System

```js id="n2m8df"
useEffect(() => {
```

When a message appears:

* I start a timer
* after 6 seconds → I clear it automatically

👉 This prevents UI clutter and keeps it clean.

---

# 📤 Form Submission Flow (Core Logic)

```js id="t6q3lk"
const handleSubmit = async (e) => {
```

This is the most important part of the component.

---

## 1. 🚫 Prevent page refresh

```js id="h1p8wd"
e.preventDefault();
```

I stop default form behavior so React can handle everything.

---

## 2. 🔄 Enter loading state

```js id="z9x2qp"
setIsLoading(true);
```

Button switches to “Sending...”

---

## 3. 🧹 Reset status

```js id="c4v7nd"
setSubmitStatus({ type: null, message: "" });
```

I clear previous messages before sending a new request.

---

## 4. 🔐 Load EmailJS credentials

```js id="r2k9sm"
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

I pull sensitive config from environment variables.

👉 This keeps secrets out of code.

---

## 5. 🧪 Validate config

```js id="f6q1mn"
if (!serviceId || !templateId || !publicKey)
```

If anything is missing:

* I throw an error early
* prevent broken email attempts

---

## 6. 📡 Send email via EmailJS

```js id="b9x4pl"
await emailjs.send(serviceId, templateId, {
  name: formData.name,
  email: formData.email,
  message: formData.message,
}, publicKey);
```

This is where the magic happens:

👉 I send form data directly to EmailJS
👉 No backend required

---

## 7. ✅ Success handling

```js id="d3k8vn"
setSubmitStatus({
  type: "success",
  message: "Message sent successfully!"
});
```

I:

* show success UI
* reset form fields

---

## 8. ❌ Error handling

```js id="p8v1lx"
catch (error)
```

If something fails:

* I log full error
* show user-friendly message

---

## 9. 🧹 Final cleanup

```js id="m7q2zd"
finally {
  setIsLoading(false);
}
```

No matter what happens:

* I stop loading state
* button returns to normal

---

# 🧱 UI STRUCTURE (Layout Thinking)

## 🧭 Section wrapper

```jsx id="a9p2lc"
<section id="contact">
```

This enables navbar scrolling to this section.

---

## 🎯 Header block

I present:

* section label
* headline
* description

👉 This introduces intent: “Let’s build something together”

---

## 🧾 Two-column layout

```jsx id="s8k3vn"
grid lg:grid-cols-2
```

I split UI into:

### Left:

* contact form

### Right:

* contact info + availability

---

# 🧾 FORM SYSTEM (Controlled Inputs)

Each input is:

```js id="q2v9sd"
value={formData.name}
onChange={(e) => setFormData(...)}
```

👉 This ensures:

* React controls every input
* form state is always in sync

---

# 📤 Submit Button (Dynamic UI)

```jsx id="w1p8cm"
{isLoading ? "Sending..." : "Send Message"}
```

Button state depends on:

* `isLoading`

---

# 📡 Status Feedback UI

```jsx id="e6x9qp"
{submitStatus.type && (...) }
```

I conditionally render:

### Success:

* green UI
* check icon

### Error:

* red UI
* warning icon

---

# 📇 Contact Info Rendering

```js id="t9q2ld"
contactInfo.map(...)
```

I dynamically render:

* email
* phone
* location

Each becomes a clickable card.

---

# 🧠 Mental Model (How I think about this component)

I break it into 3 systems:

---

## 1. 🧾 Form System

* controlled inputs
* state sync

---

## 2. ⚙️ Async System

* EmailJS request
* loading + error handling

---

## 3. 📡 Feedback System

* success / error UI
* auto-clear after timeout

---

# 🚀 Big Picture Insight

This contact section is essentially:

> “A mini frontend backend system without a backend.”

It handles:

* user input
* validation
* async API call
* feedback loop

All inside one React component.

---

# ✨ Final Mental Model

I think of it as:

> 🧠 “A state machine for messaging”

* idle → user typing
* loading → sending email
* success → confirmation
* error → recovery

