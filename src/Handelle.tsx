import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/header.tsx";
import App from "./components/App.tsx";
import Footer from "./components/footer.tsx";
const roots = [
  { id: "header", component: Header },
  { id: "root", component: App },
  { id: "footer", component: Footer },
];

roots.forEach(({ id, component: Components }) => {
  const element = document.getElementById(id);

  if (element) {
    createRoot(element).render(
      <StrictMode>
        <Components />
      </StrictMode>,
    );
  }
});
