'use client'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AnimatedButton, Input } from "@/components/utils"
import sendEmail from "@/lib/sendEmail"
import { useState, useEffect } from 'react'

export default function SubmitDialog() {
  const [sending, setSending] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [help, setHelp] = useState<string>('');
  const [msg, setMsg] = useState<string>('');

  const handleSubmit = async () => {
    setSending(true);
    try {
      const req = await sendEmail(name, email, company, phone, help, msg);
      if (req.status === 250) {
        openSuccessToast();
        setSending(false);
      }
    } catch (e) {
      openFailToast();
      setSending(false);
    }
  }

  const openSuccessToast = () => {
    toast.success('Congrats! Your information has sent successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const openFailToast = () => {
    toast.error('Something went wrong! Failed to send your request.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <div className="contact-submit p-8 text-black text-lg font-bold mx-auto w-full md:w-6/12">
      <ToastContainer />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="my-2">Your Name *</div>
          <Input variant="default" value={name} onChange={(e) => {setName(e.target.value)}} />
        </div>
        <div>
        </div>
      </div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="my-2">Email *</div>
          <Input variant="default" value={email} onChange={(e) => {setEmail(e.target.value)}} />
        </div>
        <div>
          <div className="my-2">Company *</div>
          <Input variant="default" value={company} onChange={(e) => {setCompany(e.target.value)}} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="my-2">What can we help you with?</div>
          <Input variant="default" value={help} onChange={(e) => {setHelp(e.target.value)}} />
        </div>
        <div>
          <div className="my-2">Phone *</div>
          <Input variant="default" value={phone} onChange={(e) => {setPhone(e.target.value)}} />
        </div>
      </div>
      <div className="my-5">
        <div className="mb-3">MESSAGE</div>
        <Input variant="default" value={msg} onChange={(e) => {setMsg(e.target.value)}} />
      </div>
      { sending ? 
        <div>Sending your request now ...</div> : 
        <div onClick={handleSubmit}>
          <AnimatedButton variant='transparent' icon='arrow-right' className='flex text-black text-left text-lg md:text-xl my-2'>
            SUBMIT
          </AnimatedButton>
        </div>}
      
    </div>
  )
} 