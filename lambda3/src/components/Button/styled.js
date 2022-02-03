import styled from 'styled-components'

const Buttonchild = styled.button`
    background-color:transparent;
    border:none;
    a{
        padding: 18px 10px;
        background-color: #000100;
        color: #FFFFFF;
        border-radius: 10px;
        text-decoration: none;
        &:hover{
            background-color: #00000099;
        }
        &:focus{
            padding: 20px 12px;
        }
    }
`;

export default Buttonchild;