import React from 'react';
import { Button, Dropdown } from 'semantic-ui-react';

const options = [
  { key: 'Add', icon: 'Add', text: 'Edit Post', value: 'Add' },
  { key: 'delete', icon: 'delete', text: 'Remove Post', value: 'delete' },
  { key: 'hide', icon: 'hide', text: 'Hide Post', value: 'hide' },
]

const DropdownExampleFloating = () => {



  return(
  <Button.Group color='teal'>
    <Button>{localStorage.getItem('email')}</Button>
    <Dropdown
      className='button icon'
      floating
      options={options}
      trigger={<></>}
    />
  </Button.Group>
  
  )

  
      };

export default DropdownExampleFloating


