var env, options;

env = require('config/environment');

if (env.isDevelopment()) {
  options = {
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: false,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_ACTIVE_GENERATION: true
  };
  Ember.RSVP.configure('onerror', function(e) {
    console.log(e.message);
    return console.log(e.stack);
  });
  Ember.debug("Running in " + env.name + " environment");
} else {
  options = {};
}

module.exports = Ember.Application.create(options);
