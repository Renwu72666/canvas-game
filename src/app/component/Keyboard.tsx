import React, { useEffect, useRef } from "react";
import engineer from "../asset/engineer.png";
const Keyboard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const icon = {
    x: 200,
    y: 200,
    w: 52,
    h: 52,
    speed: 5,
    dx: 0,
    dy: 0,
  };

  const drawIcon = (ctx: CanvasRenderingContext2D) => {
    const iconEngineer = new Image();
    iconEngineer.src = engineer;
    ctx.drawImage(iconEngineer, icon.x, icon.y, icon.w, icon.h);
  };

  const clear = (ctx: CanvasRenderingContext2D) => {
    if (canvasRef && canvasRef.current) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  const detectWall = () => {
    // Left wall
    if (icon.x < 0) {
      icon.x = 0;
    }
    // Top wall
    if (icon.y < 0) {
      icon.y = 0;
    }

    if (canvasRef && canvasRef.current) {
      // Right wall
      if (icon.x + icon.w > canvasRef.current.width) {
        icon.x = canvasRef.current.width - icon.w;
      }
      // Bottom wall
      if (icon.y + icon.h > canvasRef.current.height) {
        icon.y = canvasRef.current.height - icon.h;
      }
    }
  };
  const moveNewPosition = () => {
    icon.x += icon.dx;
    icon.y += icon.dy;
    detectWall();
  };

  const updateCanvas = () => {
    if (canvasRef && canvasRef.current) {
      const ctx = canvasRef.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;

      clear(ctx);

      drawIcon(ctx);

      moveNewPosition();

      requestAnimationFrame(updateCanvas);
    }
  };

  const moveRight = () => (icon.dx = icon.speed);
  const moveLeft = () => (icon.dx = -icon.speed);
  const moveUp = () => (icon.dy = -icon.speed);
  const moveDown = () => (icon.dy = icon.speed);

  const keyDownFn = (e: React.KeyboardEvent) => {
    // e.code => "ArrowRight" "ArrowLeft" "ArrowUp" "ArrowDown"
    switch (e.code) {
      case "ArrowRight":
        return moveRight();
      case "ArrowLeft":
        return moveLeft();
      case "ArrowUp":
        return moveUp();
      case "ArrowDown":
        return moveDown();
      default:
        return;
    }
  };

  const keyUpFn = (e: React.KeyboardEvent) => {
    if (
      e.code === "ArrowRight" ||
      e.code === "ArrowLeft" ||
      e.code === "ArrowUp" ||
      e.code === "ArrowDown"
    ) {
      icon.dx = 0;
      icon.dy = 0;
    }
  };

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = 600;
      updateCanvas();
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onKeyDown={keyDownFn}
      onKeyUp={keyUpFn}
      tabIndex={0}
    ></canvas>
  );
};

export default Keyboard;
