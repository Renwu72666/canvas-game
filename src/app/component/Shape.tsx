import React, { useEffect, useRef } from "react";

const Shape = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = (ctx: CanvasRenderingContext2D) => {
    // fillRect
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 100, 100);
    ctx.fillStyle = "blue";
    ctx.fillRect(120, 10, 100, 100);

    // strokeRect
    ctx.lineWidth = 5;
    ctx.strokeStyle = "green";
    ctx.strokeRect(100, 130, 50, 50);

    // clearRect
    ctx.clearRect(15, 15, 90, 90);

    // fillText
    ctx.font = "30px Arial";
    ctx.fillStyle = "purple";
    ctx.fillText("Hello Kevin!", 240, 50);
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

export default Shape;
