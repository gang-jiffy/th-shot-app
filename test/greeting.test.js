import { test } from 'node:test';
import assert from 'node:assert/strict';
import { greeting, page } from '../server.js';

test('greeting spells hello', () => {
  assert.equal(greeting('terminalhire'), 'Hello, terminalhire');
});

test('the page shows the greeting', () => {
  assert.match(page(), /<h1>Hello, terminalhire<\/h1>/);
});
