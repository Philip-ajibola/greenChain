import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Button} from "@mui/material";

export default function Farm({image,farmName, address, farmDescription,amountNeeded}){
        return (
        <div className={'h-[250px] rounded-md border-[1px] border-white'}>
            <div className={'p-[5px]'}>
                <img src={image} alt=""/>
            </div>
            <section>
                <p>{farmName}</p>
                <article className={'flex gap-[10px]'}>
                    <LocationOnIcon/>
                    <p>{address}</p>
                </article>
                <p className='max-h-[50px] text-ellipsis'>{farmDescription}</p>
                <p className={'text-[13px] font-[730]'}>{amountNeeded}</p>
                <Button className={'bg-green-700 text-white'}>invest</Button>
            </section>
        </div>
    )
}