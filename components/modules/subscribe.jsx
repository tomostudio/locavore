import { useState } from 'react';
import { decode } from 'html-entities';

import Arrow from '../utils/arrow';

const SubscribeForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError('Please enter a valid email address');
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf('@') > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ('0' !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <form className='flex w-full mt-10 max-w-sm flex-col justify-between'>
      <label className='text-xl font-normal'>
        Sign up for
        <span className='font-serif italic'> insights </span>
        in your inbox
      </label>
      <div className='relative mt-5 w-full border-white pb-2.5 border-b flex h-10'>
        <input
          className='w-full text-sm tracking-wide placeholder-white outline-none bg-transparent'
          type='email'
          placeholder='EMAIL'
          onChange={(event) => setEmail(event?.target?.value ?? '')}
          onKeyUp={(event) => handleInputKeyEvent(event)}
        />
        <button onClick={handleFormSubmit} 
            className='h-full w-10'>
          <Arrow
            position='right'
            className='absolute right-0 top-2'
            fill='white'
          />
        </button>
      </div>
    </form>
  );
};

export default SubscribeForm;
