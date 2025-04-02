import React, { useEffect } from "react";
import "./Top.scss";

export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  // When the user scrolls, show or hide the button
  function scrollFunction() {
    const topButton = document.getElementById("topButton");
    if (!topButton) return; // <- Null check to avoid crash

    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topButton.style.visibility = "visible";
    } else {
      topButton.style.visibility = "hidden";
    }
  }

  // Add scroll listener once component mounts
  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    scrollFunction(); // call once on load to ensure hidden

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <button onClick={TopEvent} id="topButton" title="Go to top">
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
