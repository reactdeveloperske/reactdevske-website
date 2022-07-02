import React, { useState } from 'react';
import Button from '../../Button';
import {Input, TextArea} from '../../FormInput';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    alert( `${formData.name}, ${formData.email}, ${formData.message}`);
  }

  const handleChange = e =>{
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
    console.log(formData);
  }

  return (
    <div>
        <div className='mt-[64px]'>
          <h5 className='font-montserrat text-h5 text-text-gray text-center'>CONTACT US</h5>
          <h2 className='font-montserrat text-h2 font-black text-center mt-[25px] mb-[60px]'>Have an interesting idea we should discuss?</h2>
        </div>

        <div className='bg-light-green p-[86px]'>
          <p className='text-bdy-lg text-text-gray font-montserrat text-center mx-[232px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vivamus duis laoreet amet. Aliquet elementum ultrices molestie netus donec pellentesque quis.</p>

          <div className="mx-[232px]">
            <form onSubmit={handleSubmit} className="mt-[50px]">
              <Input
                type="text"
                label="Name" 
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                type="email"
                label="Email" 
                placeholder="Email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextArea
                type="text"
                label="Message" 
                placeholder="Type your message here"
                name="message"
                value={formData.message}
                onChange={handleChange}              
              />
              <div className="flex justify-center">
                <Button
                  variant="submit" 
                  title="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact;