import './WarehouseAdd.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const baseUrl = 'http://localhost:8080';

export const WarehouseAdd = () => {

    let navigate = useNavigate();

    const [warehouseName, setWarehouseName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactPosition, setContactPosition] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactEmail, setContactEmail] = useState('');

    const addWarehouse = async () => {
        try {
            await axios.post(baseUrl + '/api/warehouses/',
                {
                    warehouse_name: warehouseName,
                    address: address,
                    city: city,
                    country: country,
                    contact_name: contactName,
                    contact_position: contactPosition,
                    contact_phone: contactPhone,
                    contact_email: contactEmail
                });
        } catch (err) {
            console.log(err);
        }
    }

    const clearInputFields = () => {
        setWarehouseName('');
        setAddress('');
        setCity('');
        setCountry('');
        setContactName('');
        setContactPosition('');
        setContactPhone('');
        setContactEmail('');
    }

    const handleCancel = () => {
        clearInputFields();
        navigate('/');
    }

    const handleAdd = () => {
        if (
            warehouseName === '' || 
            address === '' ||
            city === '' ||
            country === '' ||
            contactName === '' ||
            contactPosition === '' ||
            contactPhone === '' ||
            contactEmail === ''
        ) {
            alert("Please fill in all the fields.");
        } else {
            addWarehouse();
            clearInputFields();
            alert('Warehouse added successfully.');
            navigate('/');
        }
    }

    return (
        <>
            <Header />
            <main className='main'>
                <div className='form'>
                    <article className='update'>
                        <section className='update__details'>
                            <h2 className='update__details__title'>Today's Waste</h2>
                            <section className='update__details__input'>
                                <p className='update__label'>warehouse name</p>
                                <input 
                                type="text"
                                onChange={e => setWarehouseName(e.target.value)}
                                placeholder="Warehouse Name"
                                value={warehouseName}
                                />
                            </section>
                            <section className='update__details__input'>
                                <p className='update__label'>street address</p>
                                <input 
                                type="text"
                                onChange={e => setAddress(e.target.value)}
                                placeholder="Street Address"
                                value={address}
                                />
                            </section>
                            <section className='update__details__input'>
                                <p className='update__label'>city</p>
                                <input 
                                type="text"
                                onChange={e => setCity(e.target.value)}
                                placeholder="City"
                                value={city}
                                />
                            </section>
                            <section className='update__details__input'>
                                <p className='update__label'>country</p>
                                <input 
                                type="text"
                                onChange={e => setCountry(e.target.value)}
                                placeholder="Country"
                                value={country}
                                />
                            </section>
                        </section>
                        <section className='update__contact'>
                            <h2 className='update__contact__title'>Contact Details</h2>
                            <section className='update__contact__input'>
                                <p className='update__label'>contact name</p>
                                <input 
                                type="text"
                                onChange={e => setContactName(e.target.value)}
                                placeholder="Contact Name"
                                value={contactName}
                                />
                            </section>
                            <section className='update__contact__input'>
                                <p className='update__label'>position</p>
                                <input 
                                type="text"
                                onChange={e => setContactPosition(e.target.value)}
                                placeholder="Position"
                                value={contactPosition}
                                />
                            </section>
                            <section className='update__contact__input'>
                                <p className='update__label'>phone number</p>
                                <input 
                                type="text"
                                onChange={e => setContactPhone(e.target.value)}
                                placeholder="Phone Number"
                                value={contactPhone}
                                />
                            </section>
                            <section className='update__contact__input'>
                                <p className='update__label'>email</p>
                                <input 
                                type="text"
                                onChange={e => setContactEmail(e.target.value)}
                                placeholder="Email"
                                value={contactEmail}
                                />
                            </section>
                        </section>
                    </article>
                    <section className='form__cta'>
                        <section className='form__cta__inner-wrapper'>
                            <button className='form__cta--cancel' onClick={handleCancel}>Cancel</button>
                            <button className='form__cta--add' type="submit" onSubmit={handleAdd}>+ Add Warehouse</button>
                        </section>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}
