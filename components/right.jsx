import React from 'react'

class Right extends React.Component {

componentDidMount() {
  window.colors = [];

  $('#rainbow').on('click', () => {
    if (colors[0]) {
      window.colors = [];
      $('#rainbow').text('Rainbow Mode')
      $('.header').css('background-image','url(images/circuits.jpg)')
      $('button').css('background-color','#cff')
    } else {
      window.colors = ['f00', 'f40', 'f80', 'fc0', 'ff0', 'cf0', '8f0', '4f0',
        '0f0', '0f4', '0f8', '0fc', '0ff', '0cf', '08f', '04f', '00f', '40f',
        '80f', 'c0f', 'f0f', 'f0c', 'f08', 'f04']
      $('#rainbow').text('Monochrome')
      $('.header').css('background-image','url(images/rainbow_circuits.jpg)')
      $('button').css('background-color','#ccc')
    }
  })
}

  render() {
    return(
      <div className='right'>
        <button id="rainbow">Rainbow Mode</button>
      </div>
    )
  }
}

export default Right
