import google_play from '../assets/Google Play logo.svg';
import {Button, TextField} from "@mui/material";
import AppleIcon from '@mui/icons-material/Apple';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(){
    return (
        <div className={'bg-[#F7E4D6]'}>
            <div>
                <p>Sign up for our newsletter</p>
                <TextField sx={{
                    width: {
                        xs: '70vw', sm: '200px'
                    }
                }}/>
                <Button variant='contained'>
                    subscribe
                </Button>

                <p>Get the app</p>
                <div>
                    <img src={google_play} alt=""/>
                    <p>Get it on</p>
                    <p>google play</p>
                </div>
                <div>
                    <div>
                        <AppleIcon/>
                    </div>
                    <p>Get it on</p>
                    <p>google play</p>
                </div>
            </div>
            <section>
                <p>Company</p>
                <li>about us</li>
                <li>services</li>
                <li>Resources</li>
                <li>contact</li>
            </section>
            <section>
                <p>legal</p>
                <li>Terms & conditions</li>
                <li>Privacy policy</li>
            </section>
            <div>
                <p>© 2023, GreenChain All Rights Reserved.</p>
                <div>
                    <InstagramIcon/>

                </div>
            </div>
        </div>
    )
}