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
        />
    </WidgetWrapper>
   )

}

export default AdvertWidget;