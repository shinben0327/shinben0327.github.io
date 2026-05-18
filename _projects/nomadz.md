---
layout: page
title: NomadZ RoboCup
description: Teaching robots to play soccer using motion imitation reinforcement learning to participate in the RoboCup competition.
img: assets/img/projects/nomadz/cover.png
importance: 1
category: robotics
---

## Overview

As the motion control team lead of the NomadZ ETH Zurich RoboCup team, I work with a group of Master's and Bachelor's students to teach our Booster K1 robots to play soccer using motion imitation reinforcement learning. We generate our motion data from human videos using video reconstruction and motion retargeting, then use AMP (Adversarial Motion Prior) to train our policies. We are currently preparing for the RoboCup 2026 competition.

{% include figure.liquid
   path="assets/img/projects/nomadz/cover.png"
   class="img-fluid rounded z-depth-1"
   caption="Retargeting human-object interaction data to robots."
   zoomable=true
%}

## Demo

Below are some videos of our current results:

{% include video.liquid
   path="assets/video/projects/nomadz/gvhmr.mp4"
   class="img-fluid rounded z-depth-1"
   controls=true
   autoplay=true
   loop=true
   muted=true
%}

{% include video.liquid
   path="assets/video/projects/nomadz/retarget.mp4"
   class="img-fluid rounded z-depth-1"
   controls=true
   autoplay=true
   loop=true
   muted=true
%}

{% include video.liquid
   path="assets/video/projects/nomadz/dribble_rl.mp4"
   class="img-fluid rounded z-depth-1"
   controls=true
   autoplay=true
   loop=true
   muted=true
%}
