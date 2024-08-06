import React, { useRef, useEffect } from 'react';
import { useDrawing } from '../context/DrawingContext';

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { brushSize, color } = useDrawing();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Initialize canvas context
    context.lineWidth = brushSize;
    context.strokeStyle = color;

    // Add event listeners for drawing
    const startDrawing = (event: MouseEvent) => {
      context.beginPath();
      context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
      canvas.addEventListener('mousemove', draw);
    };

    const draw = (event: MouseEvent) => {
      context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
      context.stroke();
    };

    const stopDrawing = () => {
      canvas.removeEventListener('mousemove', draw);
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    };
  }, [brushSize, color]);

  return <canvas ref={canvasRef} width={800} height={600} style={{ border: '1px solid black' }} />;
};

export default Canvas;
