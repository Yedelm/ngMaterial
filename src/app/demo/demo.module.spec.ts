import { DemoModule } from './demo.module';

describe('Demo\demoModule', () => {
  let demoModule: DemoModule;

  beforeEach(() => {
    demoModule = new DemoModule();
  });

  it('should create an instance', () => {
    expect(demoModule).toBeTruthy();
  });
});
