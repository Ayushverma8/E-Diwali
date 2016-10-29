'use strict';

var letters = $('#demo span');

TweenMax.staggerFrom(letters, 0.24, { opacity: 0, y: 200, ease: Back.easeOut }, 0.5);