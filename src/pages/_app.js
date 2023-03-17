import "@/styles/globals.css";
import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <DndProvider backend={HTML5Backend}>
      <Component {...pageProps} />
    </DndProvider>
  );
}
