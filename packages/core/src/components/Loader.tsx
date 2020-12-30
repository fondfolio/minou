import React from 'react';
import styled, {keyframes} from 'styled-components';

import {Box} from './Box';

const loop = keyframes`
  to {
    stroke-dashoffset: 600;
  }
`;

const cross = keyframes`
  to {
    stroke-dashoffset: 200;
  }
`;

const StyledLoader = styled.svg`
  text-align: center;
  width: 100%;
  display: block;

  .icon {
    fill: none;
    stroke: rgba(0, 132, 132, 100);
    stroke-width: 5;
    stroke-linecap: round;
    stroke-linejoin: round;
    miterlimit: 10;
  }

  .shadow {
    fill: none;
    stroke: rgba(252, 252, 250, 100);
    stroke-width: 5;
    stroke-linecap: round;
    stroke-linejoin: round;
    miterlimit: 10;
  }

  .loop {
    stroke-dasharray: 300;
    animation: ${loop} 4s linear infinite;
  }

  .crossbar {
    stroke-dasharray: 50;
    animation: ${cross} 8s linear infinite;
  }

  .crossbar:nth-child(2) {
    animation-delay: 0.5s;
  }
`;

export function Loader() {
  return (
    <Box width="40px">
      <StyledLoader
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 76.955 77"
      >
        <path
          className="shadow"
          d="M13.284,35.857h20.379 M43.465,41.214h20.379 M64.122,2.5c-5.668,0-10.263,4.595-10.263,10.263l0.01,30.351
	c0,5.668-4.595,10.936-10.263,10.936l0,0H12.738C7.084,54.05,2.5,58.634,2.5,64.288S7.178,74.5,12.832,74.5
	c5.668,0,10.263-4.595,10.263-10.263l-0.01-31.293c0-5.668,4.595-9.994,10.263-9.994h30.869c5.654,0,10.238-4.584,10.238-10.238
	S69.777,2.5,64.122,2.5z"
        />
        <line
          id="dash_left"
          className="crossbar bar-left icon"
          x1="13.284"
          y1="35.857"
          x2="33.663"
          y2="35.857"
        />
        <line
          id="dash_right"
          className="crossbar bar-right icon"
          x1="43.465"
          y1="41.214"
          x2="63.844"
          y2="41.214"
        />
        <path
          id="loop"
          className="icon loop"
          d="M64.122,2.5c-5.668,0-10.263,4.595-10.263,10.263l0.01,30.351
	c0,5.668-4.595,10.936-10.263,10.936l0,0H12.738C7.084,54.05,2.5,58.634,2.5,64.288S7.178,74.5,12.832,74.5
	c5.668,0,10.263-4.595,10.263-10.263l-0.01-31.293c0-5.668,4.595-9.994,10.263-9.994h30.869c5.654,0,10.238-4.584,10.238-10.238
	S69.777,2.5,64.122,2.5z"
        />
      </StyledLoader>
    </Box>
  );
}
