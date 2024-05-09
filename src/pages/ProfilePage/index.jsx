import React from 'react'
import UiButton from '@/shared/ui/ui-button/ui-button';
// import FrameSvg from '../../shared/assets/icon/Frame.svg'
// import Warning from '../../shared/assets/icon/warning.svg';

const ProfilePage = () => {
  return (
    <div className='w-screen bg-[rgb(244,244,244)]'>
      <div className='flex justify-end'>
           
          <UiButton text={'Создать группу'}/>
          <img className='w-2/12' src='' alt="" />
      
      </div >
       
        <div className='w-9/12 h-3/4 bg-white'>
        <img src="" alt="" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button></button>
        </div>

    </div>
  )
}

export default ProfilePage;