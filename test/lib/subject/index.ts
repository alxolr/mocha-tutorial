import first from './suites/first.test';
import second from './suites/second.test';
import third from './suites/third.test';

describe('Subject', function() {
  describe('first suite', first.bind(this));
  describe('second suite', second.bind(this));
  describe('third suite', third.bind(this));
});
