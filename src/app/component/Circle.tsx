import React, { useEffect, useRef } from "react";

const Circle = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = (ctx: CanvasRenderingContext2D) => {
    // Arc
    if (canvasRef && canvasRef.current) {
      ctx.beginPath();
      const centerX = canvasRef.current.width / 2;
      const centerY = canvasRef.current.height / 2;

      ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

      ctx.moveTo(centerX + 150, centerY);

      ctx.arc(centerX, centerY, 150, 0, Math.PI, false);

      ctx.moveTo(centerX - 60, centerY - 80);

      ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

      ctx.moveTo(centerX + 100, centerY - 80);

      ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);

      ctx.stroke();
    }
  };

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = 600;
      const ctx = canvasRef.current.getContext("2d");

      draw(ctx as CanvasRenderingContext2D);
    }
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Circle;
