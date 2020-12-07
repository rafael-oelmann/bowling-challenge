'use strict';

describe('frame', () => {
  let frame;

  beforeEach( () => {
    frame = new Frame();
  });

  it('has starting number of 10 pins', () => {

    expect(frame.pins).toEqual(10);

  });


});