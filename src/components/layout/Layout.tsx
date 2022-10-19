import React from "react"
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import AnchorLink from "react-anchor-link-smooth-scroll"
import logo from "assets/rhino-2.webp"
import { Navigation } from "./navigation/navigationComponent"
import { SectionIdEnum } from "types"

export type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Box height="100vh">
      <AppBar position="fixed" sx={{ background: "black" }}>
        <Toolbar>
          <Box flexGrow={1}>
            <AnchorLink
              href={`#${SectionIdEnum.intro}`}
              offset={isSmall ? "56px" : "64px"}
              className="all_unset"
            >
              <Box
                display="flex"
                alignItems="center"
                gap={0.5}
                sx={{ cursor: "pointer" }}
              >
                <img src={logo} alt="logo" height="54px" width="54px" />
                <Typography variant="h5" sx={{ width: "fit-content" }}>
                  PRG
                </Typography>
              </Box>
            </AnchorLink>
          </Box>
          <Navigation isSmall={isSmall} />
        </Toolbar>
      </AppBar>
      <Box>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
