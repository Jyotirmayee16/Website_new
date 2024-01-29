import React from "react";
import './model1.css'
import video1 from '../../images/video 1.mp4';
import video2 from '../../images/video 2.mp4';
import video3 from '../../images/video 3.mp4';
const model1 = () => {
  return (
    <section className="c-wrapper">
        <video width="640" height="360" controls>
        <source src={video1} type="video/mp4" ></source>
        </video>
        <video width="640" height="360" controls>
        <source src={video2} type="video/mp4" ></source>
        </video>
        <video width="640" height="360" controls>
        <source src={video3} type="video/mp4" ></source>
        </video>
        <div class="userInput" tabindex="0" role="img" aria-label="A 3D model. Use mouse, touch or arrow keys to move." style="cursor: grab; touch-action: pan-y;">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas width="491" height="400" style="width: 785.594px; height: 640px;" class="show"></canvas>
        <canvas id="webgl-canvas" data-engine="three.js r139" width="490" height="400" class="" style="width: 785.594px; height: 640px;"></canvas></slot>
      </div>

  </div>
     
    </section>
  );
};

export default model1;
