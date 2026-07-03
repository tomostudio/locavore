import { useState, useEffect, useRef } from 'react';
import { transition } from '@/helpers/preset/tailwind';

import Arrow from '../utils/arrow';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESET_DELAY = 4000;
const CLOSE_DELAY = 1200; // let the success message land before closing the modal

// Subscribes an email to the NXT letter via /api/subscribe (Brevo, single opt-in).
// onSuccess, when provided, fires shortly after a successful (or already-subscribed)
// submission so a containing modal can close itself.
const SubscribeForm = ({ className = '', subText, onSuccess, ...props }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | already | error
  const [placeholder, setPlaceholder] = useState('EMAIL');
  const inputEl = useRef(null);
  const resetTimer = useRef(null);
  const closeTimer = useRef(null);

  const isError = status === 'error';
  const isBusy = status === 'sending';
  const isDone = status === 'success' || status === 'already';

  useEffect(() => {
    return () => {
      clearTimeout(resetTimer.current);
      clearTimeout(closeTimer.current);
    };
  }, []);

  const scheduleReset = () => {
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => {
      setStatus('idle');
      setPlaceholder('EMAIL');
    }, RESET_DELAY);
  };

  const handleSubmit = async () => {
    if (isBusy || isDone) return;

    if (!EMAIL_REGEX.test(email.trim())) {
      setStatus('error');
      setPlaceholder("That's an invalid email.");
      if (inputEl.current) inputEl.current.value = '';
      setEmail('');
      scheduleReset();
      return;
    }

    inputEl.current?.blur();
    setStatus('sending');
    setPlaceholder('Sending…');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json().catch(() => ({}));

      if (inputEl.current) inputEl.current.value = '';
      setEmail('');

      if (data.status === 'success') {
        setStatus('success');
        setPlaceholder('Got it!');
        if (onSuccess) {
          closeTimer.current = setTimeout(onSuccess, CLOSE_DELAY);
        }
      } else if (data.status === 'already') {
        setStatus('already');
        setPlaceholder('You are already on the list!');
        if (onSuccess) {
          closeTimer.current = setTimeout(onSuccess, CLOSE_DELAY);
        }
      } else if (data.message === 'invalid') {
        setStatus('error');
        setPlaceholder("That's an invalid email.");
      } else {
        setStatus('error');
        setPlaceholder('Something went wrong, try again.');
      }
    } catch (err) {
      if (inputEl.current) inputEl.current.value = '';
      setEmail('');
      setStatus('error');
      setPlaceholder('Something went wrong, try again.');
    }

    scheduleReset();
  };

  const handleKeyEvent = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div
      className={`flex w-full max-w-sm max-md:max-w-lg flex-col justify-between ${className}`}
      {...props}
    >
      {subText && <label className='text-xl font-normal'>{subText}</label>}
      <div
        className={`relative mt-5 w-full border-white pb-2.5 border-b flex h-10 ${
          isBusy || isDone ? 'pointer-events-none' : ''
        }`}
      >
        <input
          className={`w-full text-sm tracking-wide outline-none bg-transparent !select-all ${
            isError ? 'placeholder-red-500' : 'placeholder-white'
          }`}
          type='email'
          placeholder={placeholder}
          onChange={(event) => setEmail(event?.target?.value ?? '')}
          onKeyUp={handleKeyEvent}
          ref={inputEl}
        />
        <button
          onClick={handleSubmit}
          aria-label='Subscribe'
          className={`h-full w-10 ${transition.fade}`}
        >
          <Arrow position='right' className='absolute right-0 top-2' fill='white' />
        </button>
      </div>
    </div>
  );
};

export default SubscribeForm;
