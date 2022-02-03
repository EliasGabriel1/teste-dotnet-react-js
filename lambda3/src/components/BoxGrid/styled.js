import styled from 'styled-components';

export const Box = styled.label`
    box-shadow:0 .5rem 1rem rgba(0,0,0,.20);
    padding: 15px;
    background-color:#f2f2f2;
    border-radius: 12px;
    height:120px;
    p{
        text-align: end;
        font-weight: 600;
    }
    div{
        label{
            font-weight: 400;
            margin-left: 5px;
            line-height: 21px;
        }
    }
`;

export const Checkbox = styled.div`
    margin-bottom: 10px;
`;