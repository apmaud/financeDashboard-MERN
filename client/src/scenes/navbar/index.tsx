import { useState }from 'react'
import { Link } from 'react-router-dom'
import PixIcon from '@mui/icons-material/Pix';
import { Box, Typography, useTheme } from '@mui/material'
import FlexBetween from '@/components/FlexBetween'

type Props = {}

const Navbar = (props: Props) => {
    // grabs the theme settings from theme.ts, grabs the pallete object from exported themeSettings
    const { palette } = useTheme();
    // state determining what page we are on, so we can highlight the text for the page
    const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={ palette.grey[300]}>
        {/* LEFT SIDE */}
        <FlexBetween gap="0.75rem">
            <PixIcon sx={{ fontSize: "28px" }} />
            <Typography variant="h4" fontSize="16px">Finanseer</Typography>
        </FlexBetween>
        {/* RIGHT SIDE */}
        <FlexBetween gap="2rem">
            <Box sx={{ "&:hover": {color: palette.primary[100]}}}>
                <Link
                    to="/"
                    onClick={()=> setSelected("dashboard")}
                    // Color to be if selected is equal to dashboard, inherit grab the color it currently is, will give primary 100 when selected primary 700 when not
                    style={{
                        color: selected === "dashboard" ? "inherit" : palette.grey[700],
                        textDecoration: "inherit"
                    }}
                >
                    dashboard
                </Link>
            </Box>
            <Box sx={{ "&:hover": {color: palette.primary[100]}}}>
                <Link
                    to="/predictions"
                    onClick={()=> setSelected("predictions")}
                    // Color to be if selected is equal to dashboard, inherit grab the color it currently is, will give primary 100 when selected primary 700 when not
                    style={{
                        color: selected === "predictions" ? "inherit" : palette.grey[700],
                        textDecoration: "inherit"
                    }}
                >
                    predictions
                </Link>
            </Box>
        </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar