import {Button} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import styles from '../styles/home.module.css'
import Hamburger from 'hamburger-react';
export default function Navbar(){
    const clickRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(()=>{
        const handleClickOutside = (event) => {
            if (clickRef.current && !clickRef.current.contains(event.target)) {
                setIsMenuOpen(!isMenuOpen);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    },[])
    return (
        <div className={'flex justify-between w-[100vw] px-[10px] h-[70px]'}>
            <p className={'text-nowrap text-[25px] font-[820] text-green-700'} style={{textTransform:'none'}}>GreenChain</p>
            <div className={'hidden md:flex md:gap-[15px]'}>
                <ul className={styles.lists}>
                    <li>about us</li>
                    <li>services</li>
                    <li>Resources</li>
                    <li>Contact us</li>
                </ul>
                <div>
                    <Button variant='outlined' className={''}>Invest now</Button>
                    <Button variant='contained' className={'text-nowrap'}>Create farm</Button>
                </div>
            </div>
            <section className={'flex flex-col md:hidden'}>
                <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />

                {isMenuOpen  &&
                    <div className={` ${styles.hamburgerMenu} ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`} ref={clickRef}>
                        <li>about us</li>
                        <li>services</li>
                        <li>Resources</li>
                        <li>Contact us</li>
                        <Button variant='outlined' className={''}>Invest now</Button>
                        <Button variant='contained' className={'text-nowrap'}>Create farm</Button>
                    </div>
                }
            </section>
        </div>
)
}