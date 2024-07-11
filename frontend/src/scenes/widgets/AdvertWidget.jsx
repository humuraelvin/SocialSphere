import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import Advert from '../../../public/assets/maxresdefault.jpg'


const AdvertWidget = () => {

    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

   return (
    <WidgetWrapper>
        <FlexBetween>
            <Typography color={dark}>
                Sponsored
            </Typography>
            <Typography color={medium}>Create Ad</Typography>
        </FlexBetween>
        <img 
           width='100%'
           height='auto'
           alt="advert"
           src={Advert}
           style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        />
        <FlexBetween>
            <Typography color={main}>Euro 2024 Final</Typography>
            <Typography color={medium}>eurosports.com</Typography>
        </FlexBetween>
        <Typography color={medium} m='0.5rem 0'>
            Book Your tickets earlier than ever and come support between england or spain ,
            the choice is your here is Brussels, Germany
        </Typography>
    </WidgetWrapper>
   )

}

export default AdvertWidget;