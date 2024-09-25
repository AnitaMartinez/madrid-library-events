"use client";

import { useState } from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import styled from "@emotion/styled";
import districts from "../../../utils/districts.json";

const StyledFormControl = styled(FormControl)`
  min-width: 200px;
  margin: 16px 0;
`;

// TODO: Añadir opción de buscar por todos los distritos, y que esta sea la opción por defecto

function DistrictSelect() {
    const [selectedDistrict, setSelectedDistrict] = useState("");

    const handleChange = (event) => {
        setSelectedDistrict(event.target.value);
    };

    return (
        <StyledFormControl fullWidth>
            <InputLabel id="district-select-label">Busca por distrito</InputLabel>
            <Select
                labelId="district-select-label"
                id="district-select"
                value={selectedDistrict}
                onChange={handleChange}
                label="Busca por distrito"
                sx={{
                    color: 'text.primary',
                }}
            >
                {Object.entries(districts).map(([key, value]) => (
                    <MenuItem key={key} value={value}>
                        {value}
                    </MenuItem>
                ))}
            </Select>
        </StyledFormControl>
    );
}

export default DistrictSelect;