---
layout: page
title: Human-Object Interaction Retargeting (ongoing)
description: Retargeting human-object interactions to robots using constrained optimisation and reinforcement learning.
img: assets/img/projects/hoi_retargeting/cover.png
importance: 1
category: work
---

## Overview

As part of my semester project at RSL (Robotic Systems Lab) for my Master's degree, I am working on retargeting human-object interactions to robots using constrained optimisation and reinforcement learning. The goal of this project is to create physically plausible retargeted data of human demonstrations that can be used for downstream environments. The project is still ongoing, and is expected to be completed by the end of June.

{% include figure.liquid
   path="assets/img/projects/hoi_retargeting/cover.png"
   class="img-fluid rounded z-depth-1"
   caption="Retargeting human-object interaction data to robots."
   zoomable=true
%}

## Demo

We start with an inverse kinematics retargeter, which is limited by human-robot embodiment gap:

{% include video.liquid
   path="assets/video/projects/hoi_retargeting/ik.mp4"
   class="img-fluid rounded z-depth-1"
   controls=true
   autoplay=true
   loop=true
   muted=true
%}

Then, constrained optimisation is used to encourage correct contacts points:

{% include video.liquid
   path="assets/video/projects/hoi_retargeting/opti.mp4"
   class="img-fluid rounded z-depth-1"
   controls=true
   autoplay=true
   loop=true
   muted=true
%}

And finally, reinforcement learning is used to create a physically plausible result:

{% include video.liquid
   path="assets/video/projects/hoi_retargeting/rl.mp4"
   class="img-fluid rounded z-depth-1"
   controls=true
   autoplay=true
   loop=true
   muted=true
%}

{% include video.liquid
   path="assets/video/projects/hoi_retargeting/training.mp4"
   class="img-fluid rounded z-depth-1"
   controls=true
   autoplay=true
   loop=true
   muted=true
%}
