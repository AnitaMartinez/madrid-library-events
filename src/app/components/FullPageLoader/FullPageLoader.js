import { CircularProgress, Box } from "@mui/material";
import styled from "@emotion/styled";

const Overlay = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

function FullPageLoader() {
    return (
        <Overlay>
            <CircularProgress size={60} color="primary" />
        </Overlay>
    );
}

export default FullPageLoader;
