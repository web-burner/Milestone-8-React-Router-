1. create a project 
2. install tailwind 
3. install daisyui
4. install react router 
5. router 
6. daisyui theme 
7. component 
8. pages 
9. anchor tag , link ,  navLink and useNavigate
10. nested router 
11. children 
12. outlet
13. useEffect 
14. optional chaining
15. dynamic router 
16. loader : fetch
17. useLoaderData
18. params 
19. useParams 
20. axios install 
21. useNavigation
22. boolean
23. useNavigation.location
24. hydrateFallbackElement
25. useNavigation.state
26. spinner
27. useLocation
28. theme change 
29. useLocation.state
30. navigate(path,{state: object})
31. context api [createContext]
32. useContext/use

# 🚀 React + React Router + Context API Revision Sheet

---

# 1. Create Project

```bash
npm create vite@latest
npm install
npm run dev
```

**Purpose:** Create a React project using Vite.

---

# 2. Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

**Purpose:** Utility-first CSS framework.

**Used with:** DaisyUI, Responsive Design

---

# 3. DaisyUI

```bash
npm install daisyui
```

**Purpose:** Ready-made Tailwind components.

Example

```jsx
<button className="btn btn-primary">
```

**Used with:** Tailwind, Theme Change

---

# 4. Install React Router

```bash
npm install react-router
```

**Purpose:** Multiple pages without refreshing.

---

# 5. Router

```jsx
createBrowserRouter([...])
```

**Purpose:** Connect URL → Component.

---

# 6. DaisyUI Theme

```html
<html data-theme="dark">
```

**Purpose:** Change application theme.

---

# 7. Components

Reusable UI.

Examples

- Navbar
- Footer
- Card
- Button

---

# 8. Pages

Represent routes.

Examples

- Home
- About
- Contact

---

# 9. Navigation

## Anchor

```html
<a href="/">
```

❌ Refreshes page

---

## Link

```jsx
<Link to="/">
```

✅ Navigate without refresh.

---

## NavLink

```jsx
<NavLink to="/">
```

✅ Same as Link + active styling.

Best for Navbar.

---

## useNavigate

```jsx
const navigate = useNavigate();

navigate("/dashboard");
```

Navigate using JavaScript.

Used after

- Login
- Logout
- Form Submit

---

# 10. Nested Router

```
/dashboard
    /profile
    /settings
```

Parent route contains child routes.

---

# 11. children

```jsx
children:[]
```

Define nested routes.

---

# 12. Outlet

```jsx
<Outlet />
```

Placeholder where child route renders.

---

# 13. useEffect

Runs after component renders.

Mostly used for

- Fetch API
- Timer
- Event Listener

---

# 14. Optional Chaining

```jsx
user?.name
```

Avoids

```
Cannot read property...
```

---

# 15. Dynamic Route

```
/products/:id
```

One route handles many pages.

---

# 16. Loader

```jsx
loader:()=>fetch(...)
```

Fetch data before page renders.

---

# 17. useLoaderData

```jsx
const data = useLoaderData();
```

Read loader data.

---

# 18. Params

```
:id
```

Dynamic URL value.

---

# 19. useParams

```jsx
const { id } = useParams();
```

Read parameter from URL.

---

# 20. Axios

```bash
npm install axios
```

```jsx
axios.get(...)
```

Cleaner alternative to Fetch.

---

# 21. useNavigation

Track route navigation.

Useful for loading UI.

---

# 22. Boolean

```
true
false
```

Used for

- Loading
- Authentication
- Conditional Rendering

---

# 23. navigation.location

Shows destination route.

---

# 24. hydrateFallbackElement

Fallback UI while route hydrates.

Mostly used with SSR.

---

# 25. navigation.state

Possible values

```
idle
loading
submitting
```

---

# 26. Spinner

```jsx
if(navigation.state==="loading")
```

Show loading animation.

---

# 27. useLocation

```jsx
const location = useLocation();
```

Returns

- pathname
- search
- hash
- state

---

# 28. Theme Change

Usually

```
Light ↔ Dark
```

Often saved using

```
localStorage
```

---

# 29. useLocation().state

Receive navigation state.

```jsx
location.state
```

---

# 30. navigate(path,{state})

```jsx
navigate("/profile",{
    state:{
        name:"Shaon"
    }
})
```

Pass temporary data.

---

# 31. createContext()

```jsx
const UserContext = createContext();
```

Create global state.

Avoid prop drilling.

---

# 32. useContext()

```jsx
const user = useContext(UserContext);
```

Read Context data.

Must be inside Provider.

---

# ⭐ Common Combinations

## Navigation

```
Router
   ↓
Link / NavLink
   ↓
useNavigate
```

---

## Nested Routing

```
Children
    ↓
Outlet
```

---

## Dynamic Route

```
Dynamic Route
      ↓
Params
      ↓
useParams
```

---

## Data Fetching

```
Loader
    ↓
useLoaderData
```

---

## API

```
Axios
or
Fetch
     ↓
Loader
or
useEffect
```

---

## Loading

```
useNavigation
      ↓
navigation.state
      ↓
Spinner
```

---

## Passing Data

```
navigate(state)
      ↓
useLocation()
```

---

## Theme

```
Tailwind
     ↓
DaisyUI
     ↓
Theme Change
     ↓
localStorage
```

---

## Global State

```
createContext
      ↓
Provider
      ↓
useContext
```

---

# ⭐ Best Alternatives

| Current | Better Alternative | Why |
|---------|--------------------|-----|
| Fetch | Axios | Cleaner syntax |
| useEffect (Route Data) | Loader | Fetch before rendering |
| Large Global State | Zustand | Easier for large apps |
| Props Drilling | Context API | Share data globally |
| `<a>` | `<Link>` | No refresh |
| `<Link>` | `<NavLink>` | Active styling |

---

# 🚀 Learning Flow

```
Create Project
      ↓
Tailwind
      ↓
DaisyUI
      ↓
Components
      ↓
Pages
      ↓
Router
      ↓
Link / NavLink / useNavigate
      ↓
Nested Router
      ↓
Children
      ↓
Outlet
      ↓
Theme
      ↓
useEffect
      ↓
Axios / Fetch
      ↓
Optional Chaining
      ↓
Dynamic Route
      ↓
Params
      ↓
useParams
      ↓
Loader
      ↓
useLoaderData
      ↓
useNavigation
      ↓
Spinner
      ↓
useLocation
      ↓
navigate(state)
      ↓
Context API
      ↓
useContext
```

---

# ⚡ One-Line Interview Revision

| Topic | One Line |
|------|----------|
| Component | Reusable UI block. |
| Page | Component mapped to a route. |
| Router | Maps URL to components. |
| Link | Navigate without refresh. |
| NavLink | Link with active styling. |
| useNavigate | Navigate using JavaScript. |
| Outlet | Render child routes. |
| children | Define nested routes. |
| useEffect | Run side effects after render. |
| Optional Chaining | Safely access nested properties. |
| Dynamic Route | Route with variable values. |
| Params | Dynamic URL values. |
| useParams | Read URL parameters. |
| Loader | Fetch data before rendering. |
| useLoaderData | Read loader data. |
| Axios | HTTP client for APIs. |
| useNavigation | Monitor route loading state. |
| Spinner | Loading indicator. |
| useLocation | Access current route info. |
| navigate(path,{state}) | Navigate while passing temporary data. |
| useLocation().state | Read navigation state. |
| createContext | Create global state. |
| useContext | Read context values. |