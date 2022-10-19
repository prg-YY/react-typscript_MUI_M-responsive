import { AppBar, Link, Stack, Toolbar } from "@mui/material"

export const Appbar = () => {
  return (
    <AppBar position="static" sx={{ borderRadius: "10px" }}>
      <Toolbar>
        <Stack
          direction="row-reverse"
          justifyContent="space-between"
          spacing={2}
          justifyItems="center"
        >
          <Link href="/model" underline="none" color="white">
            Model
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
