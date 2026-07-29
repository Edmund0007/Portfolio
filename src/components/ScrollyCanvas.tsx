"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export default function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const totalFrames = 74;

  // Helper to draw an image covering the canvas (object-fit: cover logic)
  const drawImageCover = (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    const canvas = ctx.canvas;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.width;
    const imgHeight = img.height;

    const rCanvas = canvasWidth / canvasHeight;
    const rImg = imgWidth / imgHeight;

    let sx = 0, sy = 0, sWidth = imgWidth, sHeight = imgHeight;

    if (rCanvas > rImg) {
      // Canvas is wider than Image
      sHeight = imgWidth / rCanvas;
      sy = (imgHeight - sHeight) / 2;
    } else {
      // Canvas is taller than Image
      sWidth = imgHeight * rCanvas;
      sx = (imgWidth - sWidth) / 2;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, canvasWidth, canvasHeight);
  };

  // Redraw the current frame
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (img && img.complete) {
      currentFrameRef.current = index;
      drawImageCover(ctx, img);
    }
  }, []);

  // Resize canvas for device pixel ratio (sharpness on Retina displays)
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const handleLoad = () => {
      loadedCount++;
      setProgress(Math.round((loadedCount / totalFrames) * 100));
      if (loadedCount === totalFrames) {
        setLoading(false);
        // Initial draw
        setTimeout(() => {
          handleResize();
        }, 100);
      }
    };

    const handleError = (e: Event | string) => {
      console.error("Error loading frame:", e);
      loadedCount++;
      if (loadedCount === totalFrames) {
        setLoading(false);
      }
    };

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      // Leading zero padding for ezgif-frame-001.png syntax
      const filename = `/sequence/ezgif-frame-${String(i).padStart(3, "0")}.png`;
      img.src = filename;
      img.onload = handleLoad;
      img.onerror = handleError;
      loadedImages[i] = img;
    }

    imagesRef.current = loadedImages;

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // Listen to Framer Motion scroll updates
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (loading) return;
    // Map scroll progress (0 to 1) to frame index (1 to 74)
    const frameIndex = Math.min(
      totalFrames,
      Math.max(1, Math.round(latest * (totalFrames - 1) + 1))
    );
    if (frameIndex !== currentFrameRef.current) {
      drawFrame(frameIndex);
    }
  });

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070708] text-white">
          <div className="relative w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-6">
            <div
              className="absolute left-0 top-0 h-full bg-orange-500 transition-all duration-300 ease-out shadow-[0_0_15px_#f97316]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="font-mono text-xs tracking-[0.2em] text-white/50 animate-pulse">
            LOADING EXPERIENCE ({progress}%)
          </div>
        </div>
      )}

      {/* Canvas container - sticky within the 500vh parent */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#070708]">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover transition-opacity duration-700 ease-out"
          style={{ opacity: loading ? 0 : 1 }}
        />
        {/* Soft background vignette */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#070708] via-transparent to-[#070708]/80 opacity-60" />
        <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent to-[#070708]/90 opacity-40" />
      </div>
    </div>
  );
}
