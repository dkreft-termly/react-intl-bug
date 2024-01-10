import { IntlProvider } from 'react-intl'

import './app.css'


export function App() {
  return (
    <IntlProvider locale={ navigator.language }>
      Hello, world
    </IntlProvider>
  )
}
