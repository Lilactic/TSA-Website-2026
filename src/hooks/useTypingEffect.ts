import { useEffect, useState } from "react";

const useTypingEffect = () => {
  const texts = [
    "community resources...",
    "volunteer opportunities...",
    "upcoming events...",
    "amenities...",
    "support services...",
    "assistance...",
    "family fun...",
  ];

  const typingSpeed = 90;
  const deletingSpeed = 40;
  const pauseBetweenTexts = 1500;

  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(texts[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [paused, setPaused] = useState(document.hidden); // start paused if hidden

  // Pause typing when tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      setPaused(document.hidden);
      if (document.hidden) {
        // lock displayedText to full phrase
        setDisplayedText(texts[textIndex]);
        setIsDeleting(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [textIndex, texts]);

  useEffect(() => {
    if (paused) return;

    const currentText = texts[textIndex];
    let timeout: number;

    if (!isDeleting && displayedText.length < currentText.length) {
      timeout = window.setTimeout(() => {
        setDisplayedText(prev => currentText.slice(0, prev.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = window.setTimeout(() => {
        setDisplayedText(prev => currentText.slice(0, prev.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), pauseBetweenTexts);
    } else if (isDeleting && displayedText.length === 0) {
      timeout = window.setTimeout(() => {
        setTextIndex(prev => (prev + 1) % texts.length);
        setIsDeleting(false);
      }, pauseBetweenTexts);
    }

    return () => window.clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, paused, texts]);

  return displayedText;
};

export default useTypingEffect;