import { Box, Typography } from "@mui/material"

export const IntroSection: React.FC = () => {
  return (
    <Box py={4}>
      <Typography variant="h6">Hello,my name is Yusuf</Typography>
      <Typography variant="h2" mb={1} fontWeight={500}>
        PRG
      </Typography>
      <Typography variant="h5">I make youtube video</Typography>
      <Typography maxWidth={500}>Thank you for watching</Typography>
    </Box>
  )
}
