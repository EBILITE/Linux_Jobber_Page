import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import styled from "styled-components";

export default function ContinuousSlider({ name }) {
  const [value, setValue] = React.useState(10);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <Box sx={{ width: 250 }}>
        <div className="slider-flex">
          <h4>{name}</h4>
          <p>
            {value} / {10}
          </p>
        </div>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Slider
            aria-label="Volume"
            value={value}
            onChange={handleChange}
            color="error"
            step={1}
            min={1}
            max={10}
          />
        </Stack>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* border: 2px solid red; */
  margin-top: 1.5rem;
  .slider-flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
