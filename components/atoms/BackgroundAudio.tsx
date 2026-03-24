"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type BackgroundAudioProps = {
  className?: string;
  initialVolume?: number; // 0..1
};

export default function BackgroundAudio({
  className = "",
  initialVolume = 0.35,
}: BackgroundAudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [didAutoplayFail, setDidAutoplayFail] = useState(false);

  const clampedVolume = useMemo(() => {
    return Math.max(0, Math.min(1, initialVolume));
  }, [initialVolume]);

  const tryPlay = async () => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    audioEl.volume = clampedVolume;

    console.log("Trying to play background audio");

    try {
      await audioEl.play();
      setIsPlaying(true);
      setDidAutoplayFail(false);
    } catch(error) {
      console.log("Failed to play background audio", error);
      setIsPlaying(false);
      setDidAutoplayFail(true);
    }
  };

  const pause = () => {
    const audioEl = audioRef.current;
    if (!audioEl) return;
    audioEl.pause();
    setIsPlaying(false);
  };

  const toggle = async () => {
    if (isPlaying) {
      pause();
      return;
    }

    await tryPlay();
  };

  useEffect(() => {
    // Most browsers block autoplay with sound. We try once, then fall back to
    // starting on the first user interaction (click/scroll/key).
    void tryPlay();

    const startOnFirstGesture = () => {
      void tryPlay();
      window.removeEventListener("pointerdown", startOnFirstGesture);
      window.removeEventListener("keydown", startOnFirstGesture);
      window.removeEventListener("mousedown", startOnFirstGesture);
      window.removeEventListener("touchstart", startOnFirstGesture);
      window.removeEventListener("scroll", startOnFirstGesture);
      window.removeEventListener("visibilitychange", startOnFirstGesture);
    };

    window.addEventListener("pointerdown", startOnFirstGesture, { once: true });
    window.addEventListener("keydown", startOnFirstGesture, { once: true });
    window.addEventListener("mousedown", startOnFirstGesture, { once: true });
    window.addEventListener("touchstart", startOnFirstGesture, { once: true });
    window.addEventListener("scroll", startOnFirstGesture, { once: true });
    window.addEventListener("visibilitychange", startOnFirstGesture, { once: true });

    return () => {
      window.removeEventListener("pointerdown", startOnFirstGesture);
      window.removeEventListener("keydown", startOnFirstGesture);
      window.removeEventListener("mousedown", startOnFirstGesture);
      window.removeEventListener("touchstart", startOnFirstGesture);
      window.removeEventListener("scroll", startOnFirstGesture);
      window.removeEventListener("visibilitychange", startOnFirstGesture);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const audioSrc = `https://linh4271714.github.io/wedding-invitation-XuanNam-PhuongThuy/audio/MaiMaiBenNhau.mp3`;

  return (
    <div className={className}>
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />

      <button
        type="button"
        onClick={() => void toggle()}
        className="fixed right-4 bottom-4 z-50 rounded-full border border-border-primary bg-background/80 px-3 py-2 text-xs text-primary backdrop-blur hover:bg-background"
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        title={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? "❚❚" : "▶"}
        {didAutoplayFail ? " Play music" : ""}
      </button>
    </div>
  );
}

