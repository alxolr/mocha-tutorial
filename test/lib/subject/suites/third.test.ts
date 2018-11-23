import assert from 'assert';

export default function suite() {
  it('should return "the ugly" when sending "the ugly"', function(this: any) {
    const result = this.test.ctx.subject.do('the ugly');
    assert.strictEqual(result, 'the ugly');
  });
}
