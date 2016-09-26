import React from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Instructions from './instructions'
import About from './about'
import Cycle from './cycle'
import CycleInfo from './cycle_info'
import CustomRule from './custom_rule'
import Body from './body'
import Right from './right'

class Root extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <Body/>
        <Right/>
        <Sidebar/>
        <Instructions/>
        <About/>
        <Cycle/>
        <CycleInfo/>
        <CustomRule/>
      </div>
    )
  }
}


export default Root
