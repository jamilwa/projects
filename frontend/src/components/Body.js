import React from 'react'

export default function Body() {
    this.state({
        token : null
    })
    this.setState({
        token : localStorage.getItem('token')
    })
   
  return (
    <div>Body {this.state.token}</div>

  )
}
