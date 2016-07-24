import { AppComponent } from './app.component'

describe('AppComponent', () => {
  it('is a class', () => {
    const x = new AppComponent
    x.title = 'Tasty'
    expect(x.title).toBe('Tasty')
  })
})
