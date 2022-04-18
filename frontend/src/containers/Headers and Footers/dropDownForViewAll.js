import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Dropdown } from 'semantic-ui-react';


const DropdownForViewAll = () => {

  const history = useHistory();

const onLogoutClicked = () => {
  localStorage.clear();
  history.replace('/');
}


const options = [
  { key: 'Home', text: (<Button className="ui button" style={{backgroundColor: 'transparent'}} onClick={() => history.push('/idealisting')}><div className="visible content">Home</div>
  </Button>), value: 'Home' },
  { key: 'Logout', text: (<Button className="ui animated button" style={{backgroundColor: 'transparent'}} onClick={()=>onLogoutClicked()}><div className="visible content">Logout</div>
  <div className="hidden content">
      <i className="power off icon"></i></div></Button>), value: 'Logout' },
]



  return(
  <ButtonGroup>
    <Button style={{backgroundColor: 'lightgrey'}}>
    <i className="user circle icon" style={{color: 'green'}}></i>{localStorage.getItem('email')}</Button>
    <Dropdown
      className='button icon' style={{padding: '10px', height: '90%', marginTop: '2px'}}
      floating
      options={options}
      trigger={<></>}
    />
  </ButtonGroup>
  
  )

  
      };

export default DropdownForViewAll;