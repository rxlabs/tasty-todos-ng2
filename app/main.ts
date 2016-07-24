import { enableProdMode } from '@angular/core'
import { bootstrap } from '@angular/platform-browser-dynamic'

import { App } from './containers/app'

export default () => {
  if (process.env.NODE_ENV === 'production') {
    enableProdMode()
  }

  bootstrap(App)
}
