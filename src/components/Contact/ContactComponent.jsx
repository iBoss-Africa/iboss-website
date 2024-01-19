import React from 'react';
import './contact.css';
import Visit from '../../assets/contact/Visit.svg';
import Email from '../../assets/contact/Email.svg';
import Phone from '../../assets/contact/Phone.svg';

const ContactComponent = () => {
    return (
        <section id="our_contact">
            <h2>Let's Talk About That Idea You Have</h2>
            <div className="contact_info_container">
                <div className="contact_information">
                    <div className="contact_info_item">
                        <img className="contact_info_item_img" src={Visit} alt="" />
                        <div>
                            <h6>Visit us</h6>
                            <p>
                                173 Ogudu Road After Ogudu City Mall Opposite <br />
                                St Andrews Anglican Church Ogudu Lagos
                            </p>
                        </div>
                    </div>

                    <div className="contact_info_item">
                        <img className="contact_info_item_img" src={Email} alt="" />
                        <div>
                            <h6>Email</h6>
                            <p>info@iboss.com</p>
                        </div>
                    </div>

                    <div className="contact_info_item">
                        <img className="contact_info_item_img" src={Phone} alt="" />
                        <div>
                            <h6>Call</h6>
                            <p>+234 916 155 4000, +234 916 166 4000</p>
                        </div>
                    </div>
                </div>
                <div className="contact_form">
                    <div className="contact_form_container">
                        <form action="">
                            <div className="form_input">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="form_input">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div className="form_input">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" cols="30" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn primary">
                                Get In Contact With Us
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactComponent;