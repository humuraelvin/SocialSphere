import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";


const AdvertWidget = () => {

    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    <WidgetWrapper>
        <FlexBetween>
            <Typography color={dark}></Typography>
        </FlexBetween>
    </WidgetWrapper>

}

export default AdvertWidget;