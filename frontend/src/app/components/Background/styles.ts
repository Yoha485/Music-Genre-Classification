import styled from "styled-components/macro";

import mountain1 from "../../../assets/images/mountain1.svg";
import mountain2 from "../../../assets/images/mountain2.svg";
import mountain3 from "../../../assets/images/mountain3.svg";
import mountain4 from "../../../assets/images/mountain4.svg";
import mountain5 from "../../../assets/images/mountain5.svg";
import heroWave from "../../../assets/images/hero-wave.svg";
import blurLayer from "../../../assets/images/blur-layer.webp";

export const BackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 1300px;
  background: linear-gradient(180deg, #322d6d 6.33%, #663182 39.13%);
  text-align: center;
  overflow: hidden;
  z-index: -1;
`;

export const Wave = styled.div`
  position: absolute;
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 1440px) {
    background-size: 1440px;
  }
`;

export const Wave1 = styled(Wave)`
  top: 190px;
  height: 446px;
  background-image: url(${mountain1});
`;

export const Wave2 = styled(Wave)`
  top: 160px;
  height: 464px;
  background-image: url(${mountain2});
`;

export const Wave3 = styled(Wave)`
  top: 347px;
  height: 408px;
  background-image: url(${mountain3});
`;

export const Wave4 = styled(Wave)`
  top: 466px;
  height: 457px;
  background-image: url(${mountain4});
`;

export const Wave5 = styled(Wave)`
  top: 450px;
  height: 867px;
  background-image: url(${mountain5});
`;

export const Wave6 = styled(Wave)`
  top: 700px;
  height: 630px;
  background-image: url(${heroWave});
`;

export const BlurLayer = styled(Wave)`
  top: 100px;
  height: 1503px;
  background-image: url(${blurLayer});
`;
