import styled from "styled-components"

const Btn = styled.button`
    font-size: 24px;
    line-height: 130%;
    padding: 12px 44px;
    border: none;
    color: white;
    background: linear-gradient(180deg, #259385 0%, #159685 100%);
    box-shadow: 0px 13px 28px rgba(26, 127, 114, 0.2);
    border-radius: 30px;
    cursor: pointer;

    :hover {
        box-shadow: 0px 13px 28px rgba(26, 127, 114, 0.65);
    }

    &.size-l {
        font-size: 30px;
        font-weight: bold;
        padding: 18px 89px;
    }

    @media (max-width: 1023px) {
        font-size: 16px;
        padding: 10px 32px;

        &.size-l {
            font-size: 20px;
            font-weight: bold;
            padding: 10px 40px;
        }
    }
`

export default Btn;
