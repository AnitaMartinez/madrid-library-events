"use client";

import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";

const HeaderContainer = styled(AppBar)`
  background-color: ${(props) => props.theme.palette.primary.main};
  padding: 0 16px;
`;

const HeaderTitle = styled(Typography)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.palette.secondary.main};

  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;

export default function Header() {
    return (
        <HeaderContainer position="static">
            <Toolbar sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center"
            }}>
                <HeaderTitle variant="h6">
                    Eventos en las bibliotecas de Madrid
                </HeaderTitle>
            </Toolbar>
        </HeaderContainer>
    );
}
