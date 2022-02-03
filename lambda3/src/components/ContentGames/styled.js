import styled from 'styled-components';

  export const ContentDiv = styled.div`
    padding-top: 25px;
    max-width: 90vw;
    margin: 0 auto;
`;

export const Box = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 50px;
    margin-top: 20px;
`;