import styled from 'styled-components'

const ContentHeader = styled.header`
  margin-top:20px;
  div{
    border-radius:25px;
    max-width: 90vw;
    margin: 0 auto;
    height: 170px;
    background-color:#595959;
    display:flex;
    justify-content: space-around;
    flex-direction:column;
    align-items: center;
    gap: 11px;
    text-align:center;
    color:#FFFFFF;
    hr{
      width:120px;
      margin-bottom: 30px;
    }
    h4{
      font-weight: 300;
      color:#FFFFFF98;
    }
    p{
      max-width:685px;
    }
  }
`;

export default ContentHeader;