import React from 'react'
import Alert from './components/Alert'

import './App.css'

const App = () =>
  <>
    <Alert type={"success"} message={"Successful alert"} />
    <Alert type={"info"} message={"Time triggered"} delay={true} />
    <Alert type={"danger"} message={"Time triggered with longer delay time"} delay={true} delayTime={5000} />
  </>

export default App
