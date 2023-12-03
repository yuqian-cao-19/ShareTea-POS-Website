import React from 'react'
import "./toOrderButton.scss"
interface Props{
    ToOrderPage: React.Dispatch<React.SetStateAction<boolean>>;
}
function ToOrderButton ({ToOrderPage}: Props){

    const navigateToOrderPage = () => {
        ToOrderPage(true);
    }
  return (
    <button className='menu-to-order-button' onClick={navigateToOrderPage}>Build your drink!</button>
  )
}

export default ToOrderButton