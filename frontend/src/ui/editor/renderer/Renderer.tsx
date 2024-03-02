import { useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';

const Renderer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!containerRef.current) return;

    const app = new PIXI.Application({ 
        resizeTo: containerRef.current // Resize PIXI app to match container size 
    });

    // Append the PIXI canvas to the container element
    containerRef.current.appendChild(app.view as unknown as Node);

    const resizeObserver = new ResizeObserver(() => {
      // Update the size of the container when it changes
        app.resizeTo = containerRef.current!;
        console.log(app.view.width, app.view.height);
    });

    // Observe the size changes of the container
    resizeObserver.observe(containerRef.current);
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xFF0000);
    graphics.drawRect(50, 50, 100, 100); // Draw a rectangle
    graphics.endFill();

    graphics.beginFill(0x00FF00);
    graphics.drawCircle(200, 200, 50); // Draw a circle
    graphics.endFill();

    // Add the graphics object to the stage
    app.stage.addChild(graphics);

    // Cleanup function to destroy PIXI application when component unmounts
    return () => {
      app.destroy(true);
      resizeObserver.disconnect();
    };
  }, []); // Empty dependency array to run effect only once

  return <div style={{
    width: '100%',
    height: '100%',
  }} ref={containerRef} />;
};

export default Renderer;