import React from 'react'

const Form = () => {
  return (
    <form className='form'>
        <div className="form__name">
            <input type="text" placeholder='First Name..' className="form__name--nameField"/>
            <input type="text" placeholder='Last Name..' className="form__name--nameField" />
        </div>

        <div className="form__submitField">
          <input type="email" placeholder='Enter your email address..'/>
          <input type="submit" value="JOIN OUR WAITING LIST" className='form__submit'/>
        </div>
    </form>
  )
}

export default Form