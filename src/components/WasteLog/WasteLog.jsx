import './WasteLog.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { UnstyledInputBasic } from '../InputBox/InputBox';

export const WasteLog = () => {
    return (
        <main className='main'>
                <div className='form'>
                    <article className='update'>
                        <section className='update__details'>
                            <h2 className='update__details__title'>Today's Waste</h2>
                            <section className='update__details__input'>
                                <h4>Plastic water bottle</h4>
                                <p className='update__label'>reused</p>
                                <p> 4 </p>
                            </section>
                            <section className='update__details__input'>
                                <h4>Plastic water bottle</h4>
                                <p className='update__label'>reused</p>
                                <p> 4 </p>
                            </section>
                            <section className='update__details__input'>
                                <h4>Plastic water bottle</h4>
                                <p className='update__label'>reused</p>
                                <p> 4 </p>
                            </section>
                            <section className='update__details__input'>
                                <h4>Plastic water bottle</h4>
                                <p className='update__label'>reused</p>
                                <p> 4 </p>
                            </section>
                        </section>
                        <section className='update__contact'>
                            <h2 className='update__contact__title'>My Goals</h2>
                            <section className='update__contact__input'>
                                <UnstyledInputBasic />
                            </section>
                            <section className='update__contact__input'>
                                <UnstyledInputBasic />
                            </section>
                            <section className='update__contact__input'>
                                <UnstyledInputBasic />
                            </section>
                            <section className='update__contact__input'>
                                <UnstyledInputBasic />
                            </section>
                        </section>
                    </article>
                </div>
            </main>
    )
}