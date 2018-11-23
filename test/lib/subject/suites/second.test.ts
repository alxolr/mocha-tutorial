import assert from 'assert';

export default function suite() {
  it('should return "bad" when sending "bad"', function(this: any) {
    const result = this.test.ctx.subject.do('bad');
    assert.strictEqual(result, 'bad');
  });
}
