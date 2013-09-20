var _ref;

window.require.list().filter(function(module) {
  if (new RegExp("^config/environments/").test(module)) {
    return require(module);
  }
});

module.exports = {
  name: (_ref = window.BRUNCH_ENV) != null ? _ref : 'development',
  is: function(env) {
    return this.name === env;
  },
  isDevelopment: function() {
    return this.is('development');
  },
  isProduction: function() {
    return this.is('production');
  }
};
