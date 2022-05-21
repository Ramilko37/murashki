import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import { useForm } from "react-hook-form";
import styles from './style.module.css'
import {string} from "prop-types";
import DropDown from "../DropDown";
import axios from 'axios'
import Link from "next/link";


const url = 'https://ramilko37.getcourse.ru/pl/api/users';


const headers = {"Access-Control-Allow-Origin": "*", 'content-type': 'multipart/form-data'}


const PhoneApp = (codeValue: string, setValue: () => void, checked: boolean) => {
    // handle events
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // handle submit
    const onSubmit = (data: object) => alert(data);

    const [countries, setCountries] = useState([])


    useEffect(() =>{
        const data = require('../../utils/CountryData.json')
        console.log('data', data)
        setCountries(data)


    },[])
    return (
        <React.Fragment>
            <section>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.container}>
                        <div>
                            <div className={styles.gridWrapper}>
                                <div>
                                   <DropDown codeValue={codeValue} setValue={setValue}/>
                                    <div>
                                        {errors.code && <span className="text-sm text-red-500">{errors.code.message}</span>}
                                    </div>
                                </div>
                                {/*Phone Input*/}
                                <div>
                                    <div>
                                        <input
                                            type='tel'
                                            placeholder="placeholder"
                                            className={`${styles.phoneInput} ${ errors.code && styles.codeInputError}`}
                                            {...register("phone", {
                                                required: {
                                                    value: true,
                                                    message: 'Phone is required'
                                                },
                                                pattern:{
                                                    value:/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                                    message:'Please enter a valid phone number'
                                                }
                                            })}
                                        />
                                    </div>
                                    <div>
                                        {errors.phone && <span className={styles.textError}>{errors.phone.message}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* btn section */}
                        <div className={styles.flexWrapper}>
                            <Link href='/fables'>
                                <button
                                    type='submit'
                                    value='Оформить'
                                    className={styles.submitButton}
                                    onClick={onSubmit}
                                >Оформить</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </section>
        </React.Fragment>
    );
};

export default PhoneApp;
