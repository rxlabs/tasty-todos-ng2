import { App } from './app.component'

describe('App', () => {
  it('is a class', () => {
    const x = new App
    x.title = 'Tasty'
    expect(x.title).toBe('Tasty')
  })
})
