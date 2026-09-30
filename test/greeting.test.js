import { test } from 'node:test';
import assert from 'node:assert/strict';
import { page } from '../server.js';

test('the page greets with hello', () => {
  assert.match(page(), /<h1>Hello, terminalhire<\/h1>/);
});

test('the page keeps its description', () => {
  assert.match(page(), /A one-page app for screenshot runs\./);
});
