const log = debug('render/funcs/func.init');

module.exports = (id) => {
  log('Initializing...');
  gl_canvas = document.getElementById(id);
  if (!gl_canvas) {
    throw 0;
  }
  gl_ctx = gl_canvas.getContext('webgl') || gl_canvas.getContext('experimental-webgl');
  if (!gl_ctx) {
    throw 0;
  }
  gl_regl = require('regl')(gl_ctx);
  if (!gl_regl) {
    throw 0;
  }
  // Setup the scoped camera.
  gl_camera = require('../cmds/cmd.setupCamera');
  // Initialize debugging.
  const node = document.createElement('div');
  node.id = 'gl_debug';
  ui_debug.appendChild(node);
  gl_ui_debug = document.getElementById('gl_debug');
  log('Initialization successful!');
};