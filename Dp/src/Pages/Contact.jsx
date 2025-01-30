import { MessageSquareText, Phone, MapPin } from 'lucide-react';
import Navbar from '../Components/Navbar/Navbar';
import { useState, useEffect, useRef } from "react";
import Preloader from "./Preloader";
import emailjs from '@emailjs/browser';

function Contact() {
    const [loading, setLoading] = useState(true);
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wuuide7', 'template_gh5kyx1', form.current, 'Cw3W3fIViCr4IFJ0t')
            .then(
                () => {
                    setStatusMessage('Email sent successfully!');
                    setStatusType('success');
                    form.current.reset();
                },
                (error) => {
                    setStatusMessage(`Failed to send email: ${error.text}`);
                    setStatusType('error');
                }
            );
    };

    if (loading) {
        return <Preloader />;
    }

    return (
        <div className='bg-white'>
       
            <div className='p-5'>
                <div className="mx-auto mt-12 2xl:container">
                    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <p className="text-xl font-bold text-gray-800">Get In Touch</p>
                                <p className="text-5xl font-bold text-customGreen">Contact us</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <MessageSquareText className="font-bold" />
                                    <p className="text-xl">info@devipolytech.com</p>
                                </div>
                                <div className="flex items-center gap-4 ">
                                    <Phone className="font-bold" />
                                    <div className="flex flex-col gap-0 gap-3 lg:flex-row">
                                             <p className="text-xl">+91 9442115571</p>
                                             <p className="text-xl">+91 9994477071</p>
                                             <p className="text-xl">+91 9789222861</p>
                                    {/* <p className="text-xl">+91 9952968971</p>
                                    <p className="text-xl">+91 9789161727</p> */}
                                    </div>
                                
                                </div>
                                <div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="font-bold " />
                                    <p className="text-xl lg:w-[500px]">SF.No.50/1,Site No.8A Serayampalayam Road Neelambur Coimbatore-641062, TamilNadu India</p>
                                    </div>
                                
                                     <div className="flex items-center gap-4 mt-4">
                                    <MapPin className="font-bold " />
                                    <p className="text-xl lg:w-[500px]">SF.No.44/4,Site No.354 Sri Ranga Nagar B Block Neelambur Coimbatore-641062, TamilNadu India</p>
                                    </div>
                                    

                                    </div>
                            </div>
                        </div>
                        <form className="flex flex-col gap-6" ref={form} onSubmit={sendEmail}>
                            {statusMessage && (
                                <div className={`text-center p-2 rounded ${statusType === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                    {statusMessage}
                                </div>
                            )}
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                <div>
                                    <label htmlFor="firstName">First name</label>
                                    <input id="firstName" name="from_name" className="w-full h-10 p-4 border-2" type="text" required />
                                </div>
                                <div>
                                    <label htmlFor="lastName">Last name</label>
                                    <input id="lastName" name="from_name1" className="w-full h-10 p-4 border-2" type="text" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input className="w-full h-10 p-4 border-2" id="email" name="from_email" type="email" required />
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input className="w-full h-10 p-4 border-2" id="phone" name="phone_no" type="text" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea className="w-full p-4 border-2" rows={4} name="message" id="message" required></textarea>
                            </div>
                            <div className="flex justify-center lg:justify-start">
                                <button type="submit" className="px-6 py-3 text-white rounded-lg bg-customGreen">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3915.344252515304!2d77.08190307504645!3d11.08770028908061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDA1JzE1LjciTiA3N8KwMDUnMDQuMSJF!5e0!3m2!1sen!2sin!4v1728992591542!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}

export default Contact;
