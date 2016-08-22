var requireDir = require('require-dir')

// Require all sub tasks
requireDir('./gulp/tasks')

// Require main tasks
require('./gulp/index')
