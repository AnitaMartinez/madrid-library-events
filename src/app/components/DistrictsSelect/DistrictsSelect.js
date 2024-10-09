"use client";

import { useState } from "react";
import { MenuItem, Select, FormControl, InputLabel, CircularProgress, ArrowDropDownIcon } from "@mui/material";
import styled from "@emotion/styled";
import districts from "../../../utils/districts.json";

const StyledFormControl = styled(FormControl)`
  min-width: 200px;
  margin: 16px 0;
`;

const StyledCircularProgress = styled(CircularProgress)`
    margin-right: 12px;
`;


// TODO: Añadir opción de buscar por todos los distritos, y que esta sea la opción por defecto

function DistrictSelect({ onSelectDistrict, loading }) {
    const [selectedDistrict, setSelectedDistrict] = useState("");

    const handleChange = (event) => {
        const district = event.target.value
        setSelectedDistrict(district);
        onSelectDistrict(district);
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
                IconComponent={loading ? () => <StyledCircularProgress size={24} /> : ArrowDropDownIcon}
            >
                <MenuItem value="">
                    Todos los distritos
                </MenuItem>
                {Object.entries(districts).map(([key, value]) => (
                    <MenuItem key={key} value={value}>
                        {value}
                    </MenuItem>
                ))}
            </Select>
        </StyledFormControl >
    );
}

export default DistrictSelect;