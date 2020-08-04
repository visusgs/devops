var assert = require('assert')

function test() {
  assert.equal(6 + 6, 9);
}

if (module == require.main) require('test').run(test);