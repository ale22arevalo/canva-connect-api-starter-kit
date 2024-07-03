import { Box, Typography } from "@mui/material";
import {
  ConnectButton,
  ConnectionAlert,
} from "src/components";
import { useAppContext } from "src/context";
import { ProductsPage } from "./products";

export const HomePage = () => {
  const { displayName } = useAppContext();

  return (
    <>
      <ConnectionAlert />
      <Box display="flex">
        <Box display="block" paddingRight="5rem">
          <Typography variant="h4" gutterBottom={true}>
            {displayName ? `Good day, ${displayName}!` : `Good day!`}
          </Typography>
          <Typography paragraph={true}>
              Welcome to the <b>Hearst Clips</b> integration for Canva. Get started
              by connecting your Canva account.
          </Typography>
        </Box>
        <Box maxHeight="100px" marginLeft="auto" alignSelf="center">
          <ConnectButton />
        </Box>
      </Box>
      <ProductsPage />
    </>
  );
};