import React, { useEffect, useRef, useState } from "react";

const BallGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const circle = {
    x: 200,
    y: 200,
    size: 40,
    dx: 5,
    dy: 5,
  };

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
  };

  const moveCircle = () => {
    if (canvasRef && canvasRef.current) {
      const ctx = canvasRef.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      draw(ctx);
      circle.x += circle.dx;
      circle.y += circle.dy;

      if (
        circle.x + circle.size > canvasRef.current.width ||
        circle.x - circle.size < 0
      ) {
        circle.dx *= -1;
      }
      if (
        circle.y + circle.size > canvasRef.current.height ||
        circle.y - circle.size < 0
      ) {
        circle.dy *= -1;
      }
      requestAnimationFrame(moveCircle);
    }
  };

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = 600;
      moveCircle();
    }
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default BallGame;
