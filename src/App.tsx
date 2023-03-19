import { useState } from 'react'
import { ThemeContext } from '@constants'
import {
  ControlPanelColors,
  IconsContainer,
  ControlPanelSizes,
  IconSizes,
} from '@components'

function App() {
  const [theme, setTheme] = useState<string>('pink')
  const [iconSize, setIconSize] = useState<IconSizes>('small')

  return (
    <ThemeContext.Provider value={{ theme, setTheme, iconSize, setIconSize }}>
      <ControlPanelColors />
      <ControlPanelSizes />
      <div className="h-screen w-screen flex items-center justify-center">
        <IconsContainer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
