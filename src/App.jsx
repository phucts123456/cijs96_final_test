import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllTab from './components/Tab/AllTab';
import ActiveTab from './components/Tab/ActiveTab';
import CompletedTab from './components/Tab/CompletedTab';

function App() {
  const [curTab, setCurTab] = useState(<AllTab />);
  const handleChangeTab = (tab) =>{
    for(let item of tabs)
    {
      if(tab.key == item.key)
      {
        
        item.isActive = true;
        setCurTab(item.childTab);
      }
      else{
        item.isActive = false;
      }
    }
    setTabs(tabs);
  }
  const [tabs, setTabs] = useState([
    {
      key: '1',
      label: 'All',
      isActive: true,
      childTab:<AllTab/>
    },
    {
      key: '2',
      label: 'Active',
      isActive: false,
      childTab:<ActiveTab />
    },
    {
      key: '3',
      label: 'Complete',
      isActive: false,
      childTab:<CompletedTab />
    },
  ]);
  return (
    <div className='app_container'>
      <h1>#TODO</h1>
      <div className='tab_select_container'>
        {tabs.map((tab) => {
          return <button onClick={() => handleChangeTab(tab)} className={`tab_select_change_btn  ${tab.isActive ? 'active' : ''}`}>{tab.label}</button>
        })}
      </div>
      {curTab}
    </div>
  )
}

export default App
