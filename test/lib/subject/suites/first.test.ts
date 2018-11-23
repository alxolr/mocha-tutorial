import assert from 'assert';

export default function suite() {
  it('should return "good" when sending "good"', function(this: any) {
    const result = this.test.ctx.subject.do('good');
    assert.strictEqual(result, 'good');
  });
}
