/* src\components\Effect\RestoreHeightInPage\RestoreHeightInPage.jsx */
import { useEffect } from "react";
import { LocalStorage } from "./utils.local-storage";

const RestoreHeightInPage = () => {
  useEffect(() => {
    const keyPrefix = "app-shell-pageScrollPosition_";

    const storage = new LocalStorage();

    const persistScrollPositionSnapshot = (oldUrl) => {
      const key = keyPrefix + oldUrl;
      const node = document.getElementsByClassName("AppShell__content")[0];
      if (!node) return;
      const scrollPosition = {
        x: node.scrollLeft,
        y: node.scrollTop,
      };
      storage.save(key, scrollPosition);
    };

    const restoreScrollPositionSnapshot = (type, newUrl) => {
      const key = keyPrefix + newUrl;
      const scrollPosition = storage.retrieve(key);
      if (!scrollPosition) return;
      const node = document.getElementsByClassName("AppShell__content")[0];
      if (!node) return;
      const { x, y } = scrollPosition;
      setTimeout(() => {
        node.scrollTo({ left: x, top: y, behavior: "auto" });
      }, 50);
    };

    const handleRouteChangeStart = ({ oldUrl }) => {
      persistScrollPositionSnapshot(oldUrl);
    };

    const handleRouteChangeComplete = ({ type, newUrl }) => {
      restoreScrollPositionSnapshot(type, newUrl);
    };

    window.addEventListener("beforeunload", () => {
      // No need to forget or remove the data
    });

    return () => {
      window.removeEventListener("beforeunload", () => {
        // No need to forget or remove the data
      });
    };
  }, []);

  return null; // Since this component doesn't render anything, return null
};

export default RestoreHeightInPage;
