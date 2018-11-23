import { Dependency1 } from './dependency1';
import { Dependency2 } from './dependency2';

export class Subject {
  constructor(private dep1: Dependency1, private dep2: Dependency2) { }

  public do(param: string) {
    return param;
  }
}
