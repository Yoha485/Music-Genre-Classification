import styled from "styled-components/macro";

export const FileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropZone = styled.div`
  background: rgba(255, 255, 255, 0.19);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);

  padding: 2.5rem 3rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 18px;

  @media screen and (max-width: 525px) {
    margin: 1.5rem 25px;
  }
`;

export const SubmitButton = styled.button`
  background: rgba(255, 255, 255, 0.19);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);

  border: none;
  height: 50px;
  font-family: "Patua One", cursive;
  font-size: 15px;
  margin-bottom: 10px;
  margin: 0 25%;
`;

export const Files = styled.div`
  margin-left: 10px;
`;
