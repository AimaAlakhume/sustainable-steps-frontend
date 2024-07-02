import './WasteLog.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { UnstyledInputBasic } from '../InputBox/InputBox';

export const WasteLog = () => {
    return (
        <main className='main'>
                    <article className='diary'>
                        <section className='diary__entries'>
                            <h2 className='diary__entries__title'>Today's Waste</h2>
                            <section className='diary__entry'>
                                <section className='diary__entry__details'>
                                    <h4>Plastic water bottle</h4>
                                    <p className='diary__label'>reused</p>
                                </section>
                                <section className='diary__entry__quantity'>
                                    <p> 4 </p>
                                </section>
                            </section>
                            <section className='diary__entry'>
                                <section className='diary__entry__details'>
                                    <h4>Plastic water bottle</h4>
                                    <p className='diary__label'>reused</p>
                                </section>
                                <section className='diary__entry__quantity'>
                                    <p> 4 </p>
                                </section>
                            </section>
                            <section className='diary__entry'>
                                <section className='diary__entry__details'>
                                    <h4>Plastic water bottle</h4>
                                    <p className='diary__label'>reused</p>
                                </section>
                                <section className='diary__entry__quantity'>
                                    <p> 4 </p>
                                </section>
                            </section>
                            <section className='diary__entry'>
                                <section className='diary__entry__details'>
                                    <h4>Plastic water bottle</h4>
                                    <p className='diary__label'>reused</p>
                                </section>
                                <section className='diary__entry__quantity'>
                                    <p> 4 </p>
                                </section>
                            </section>
                        </section>
                        <section className='diary__goals'>
                            <h2 className='diary__goals__title'>My Goals</h2>
                            <section className='diary__goals__input'>
                                <UnstyledInputBasic />
                            </section>
                            <section className='diary__goals__input'>
                                <UnstyledInputBasic />
                            </section>
                            <section className='diary__goals__input'>
                                <UnstyledInputBasic />
                            </section>
                            <section className='diary__goals__input'>
                                <UnstyledInputBasic />
                            </section>
                            <section className='diary__goals__input'>
                                <UnstyledInputBasic />
                            </section>
                        </section>
                    </article>
            </main>
    )
}