test('welcome message present', function() {
  App.reset();
  return visit('/').then(function() {
    return ok(find('h2:contains("Welcome to Ember")').length);
  });
});

test('list items present', function() {
  App.reset();
  return visit('/').then(function() {
    var listItems;
    listItems = find('li').length;
    return equal(3, listItems, "found instead " + listItems);
  });
});
