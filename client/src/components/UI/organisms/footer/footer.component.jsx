import React from 'react';
import AddressIcon from '@Atoms/Icons/address.icon';
import PhoneIcon from '@Atoms/Icons/phone.icon';
import { FormInput } from './footer.styles';

const Footer = () => (
  <>
    <div className="bg-gray-700 h-auto p-8">
      <div className="footer flex justify-around pt-10">
        <div className="subscribe-form">
          <FormInput type="email" placeholder="E-mail" className="bg-transparent border-solid border-4 border-white px-4 py-2 text-white" />
          <button
            type="button"
            className="ml-5  mt-5 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded cursor-pointer outline-none"
          >
            Subscribe
          </button>
        </div>

        <div className="contact  text-white ">
          <div className="flex self-center ">
            <AddressIcon className="mr-2" />
            <p className="font-bold">Address</p>
          </div>
          <p className="pt-2">53 Mambolo St, Wuse, Abuja</p>
          <div className="flex self-center mt-5">
            <PhoneIcon className="mr-2" />
            <p className="font-bold">Phone Number</p>
          </div>
          <p className="pt-2">+234 706 368 5813</p>
        </div>
      </div>
    </div>
  </>

);

export default Footer;
