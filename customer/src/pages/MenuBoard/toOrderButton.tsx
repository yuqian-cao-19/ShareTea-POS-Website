import React from 'react'

interface Props{
    ToOrderPage: React.Dispatch<React.SetStateAction<boolean>>;
}
function ToOrderButton ({ToOrderPage}: Props){

    const navigateToOrderPage = () => {
        ToOrderPage(true);
        console.log("fortnite");
    }
  return (
    <button className='menu-to-order-button' onClick={navigateToOrderPage}>Fortnite</button>
  )
}

export default ToOrderButton