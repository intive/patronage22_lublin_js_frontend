import { Icon } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from 'next/image';


function ServiceItem(props:any) {

    return (
        <Card sx={{height:'220px', textAlign:'center'}} >
            <CardContent sx={{marginTop:2}}>
                {props.image}
                {/* <Image src={props.image} alt='' width="50" height="50" /> */}
                <Typography variant='h6' component="div">
                    {props.title}
                </Typography>
                <Typography sx={{ fontSize: 14, marginTop:2 }} gutterBottom  >{props.description}</Typography>
            </CardContent>
        </Card>

    );
}
export default ServiceItem;
