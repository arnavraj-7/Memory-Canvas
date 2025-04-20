# 🧠 Memory Canvas Cheatsheet

Quick reference for React + Tailwind + ShadCN + Context API used in the Memory Canvas project.

---

## 🔁 React Essentials

### useState
```js
const [state, setState] = useState(initialValue);
```

### useEffect
```js
useEffect(() => {
  // code here runs after component mounts or dependencies change
}, [dependencies]);
```

### useContext
```js
const { activeUser } = useContext(ActiveUserContext);
```

### React Router
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
  </Routes>
</BrowserRouter>
```

### Navigate programmatically
```js
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate("/login");
```

---

## 🎨 Tailwind CSS

### Center a div
```html
<div className="flex justify-center items-center h-screen">
  Content
</div>
```

### Input styling
```html
<input className="border border-gray-300 rounded px-3 py-2 w-full" />
```

### Responsive design
```html
<div className="text-lg sm:text-xl md:text-2xl">Responsive Text</div>
```

---

## 🧱 ShadCN Components (Basics)

### Button
```jsx
import { Button } from "@/components/ui/button";

<Button variant="default">Click me</Button>
```

### Input
```jsx
import { Input } from "@/components/ui/input";

<Input type="text" placeholder="Enter title" />
```

### Card
```jsx
import { Card, CardContent } from "@/components/ui/card";

<Card>
  <CardContent>
    Content goes here
  </CardContent>
</Card>
```

### Toast (notification)
```js
import { toast } from "sonner";

toast.success("Upload complete!");
toast.error("Something went wrong");
```

---

## 🌐 Context API (Global State)

### Create context
```js
export const ActiveUserContext = createContext();
```

### Wrap in provider
```jsx
<ActiveUserContext.Provider value={{ activeUser, setActiveUser }}>
  {children}
</ActiveUserContext.Provider>
```

### Access from anywhere
```js
const { activeUser, setActiveUser } = useContext(ActiveUserContext);
```

---

## 🧠 Extras

### Reset form fields
```js
setTitle("");
setDescription("");
setUrl("");
```

### Show fallback message if no uploads
```jsx
{uploads.length === 0 && (
  <p>No memories yet! Upload your first one 😊</p>
)}
```

### Sort uploads by latest
```js
const sortedUploads = [...uploads].sort((a, b) => b.date - a.date);
```

---

Let me know if you want to add Firebase or localStorage next!

