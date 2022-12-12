import React, { useEffect, useRef } from "react";

const Triangle = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = (ctx: CanvasRenderingContext2D) => {
    // Triangle
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(150, 50);
    ctx.lineTo(100, 200);
    ctx.closePath();
    // ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(200, 50);
    ctx.lineTo(150, 200);
    ctx.lineTo(250, 200);
    ctx.closePath();
    // ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();

    // Rectangle
    ctx.beginPath();
    ctx.rect(300, 50, 150, 100);
    ctx.fillStyle = "orange";
    ctx.fill();
  };

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = 300;
      const ctx = canvasRef.current.getContext("2d");

      draw(ctx as CanvasRenderingContext2D);
    }
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Triangle;
