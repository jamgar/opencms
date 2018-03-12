import { ui } from './ui'

const init = () => {
  ui.showView()
  window.addEventListener('hashchange', ui.showView)
}

document.addEventListener('DOMContentLoaded', init)
