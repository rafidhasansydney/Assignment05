<p align="center">
  <img src="assets/logo-text.png" alt="Dev Stack" width="220" />
</p>

# 🧱 Dev Stack — Build Your Ideal Development Stack

Dev Stack is a responsive React web app where developers can browse popular
web technologies, compare them side by side, and build their own custom
development stack. Every technology comes with its category, rating,
difficulty, and a short description, and the stack panel updates live as you
add or remove items.

🔗 **Live Site:** https://rafidhasansydney.github.io/Assignment05/

---

## ⚙️ Technologies Used

- **React 19** — component-based UI
- **Vite** — dev server and build tool
- **Tailwind CSS v4** — utility-first styling
- **React-Toastify** — toast notifications
- **JSON** — technology data loaded at runtime

---

## ✨ Key Features

1. **Stack Builder** — add technologies to a personal stack with duplicate
   protection, remove them one by one, or clear everything with Remove All
2. **Instant Feedback** — every action (add, duplicate attempt, remove,
   remove all) shows a color-coded toast notification
3. **Fully Responsive** — dedicated mobile navbar with hamburger menu,
   single-column cards on phones, and a sticky stack sidebar on desktop
4. **JSON-Driven Catalog** — 13 technologies fetched from a JSON file with a
   proper loading state while the data loads
5. **One Gradient to Theme Them All** — the whole brand look (name, hero
   highlight, primary buttons) flows from a single CSS variable

---

## 📝 React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax that lets me write HTML-like code inside JavaScript. It is
used because it makes components easy to read and write — I describe what the
UI should look like in one place, and React converts it into real DOM
elements. I used JSX in every component of this project.

**2. What is the difference between props and state?**
Props are values a parent component passes down to a child, and the child
cannot change them. State is data a component owns itself and can update,
and updating it re-renders the component. In my project, the technology data
reaches the cards through props, while the selected stack is state in App.

**3. What does the `useState` hook do, and where did you use it?**
It creates a piece of data React watches, together with a setter function.
When I call the setter, the component re-renders with the new value. I used
it for the stack array in App, for the menu open/close toggle in the
Navbar, and for the technologies list plus loading flag in TechCatalog.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
It runs a side effect after the component renders. I needed it because
fetching technologies.json is a side effect — running the fetch inside
useEffect with an empty dependency array means it runs once when the app
loads, not on every render.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The key gives each list item a stable identity, so React knows exactly which
item was added, changed, or removed and updates only that one. Without keys,
React can mix up items when the list changes. I used `tech.id` as the key
for both the cards and the stack items.

**6. What is conditional rendering? Show one place you used it.**
It means rendering different things based on a condition. I used it in the
Your Stack panel — when the stack is empty it shows "Your stack is empty.",
otherwise it shows the list of selected technologies. The loading spinner
vs the cards grid is another example.

**7. How do you pass data from a parent to a child, and how does a child send something back?**
Parent to child happens through props. Child to parent works by the parent
passing a function down as a prop, and the child calling it. In my project,
App passes the stack array to YourStack as a prop, and the technology cards
call the `onAdd` function (which is `addToStack` defined in App) to send a
technology back up.

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```
