import { Dependency1 } from '../../../lib/dependency1';
import { Dependency2 } from '../../../lib/dependency2';
import { Subject } from '../../../lib/subject';

before(function() {
  const dep1 = new Dependency1();
  const dep2 = new Dependency2();

  this.subject = new Subject(dep1, dep2);
});
