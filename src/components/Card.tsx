import styled, {css} from "styled-components";
import myImage from "../assets/img/picture.png"

export function Card() {
    return (
        <StyledCard>
            <ImgWrap>
                <Image src={myImage} alt="Description"/>
            </ImgWrap>
            <Content>
                <Title>Headline</Title>
                <Text>Faucibus. Faucibus. Sit sit sapien tempusrisu ut. Sit molestie ornare in venen.</Text>
                <BtnsWrapper>
                    <SuperBtn btnType="primary">Save</SuperBtn>
                    <SuperBtn btnType="secondary">Overview</SuperBtn>
                </BtnsWrapper>
            </Content>
        </StyledCard>
    )

}

const StyledCard = styled.div`
  max-width: 300px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);
  padding: 10px 10px 22px;
`

const ImgWrap = styled.div`
  height: 170px;
  width: 280px;
  background-color: silver;
  border-radius: 10px;
  overflow: hidden;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

const Title = styled.h1`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`

const Content = styled.div`
  padding: 20px 10px 0;

`

const Text = styled.div`
  color: #ABB3BA;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
  margin: 20px 0;
`

const SuperBtn = styled.button<{ btnType: string }>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px; /* 200% */

  ${props => props.btnType === "primary" && css<{btnType:string}>`
    background-color: #4E71FE;
    color: #FFF;
    border: none;
  `
  };
  
  ${props => props.btnType === "secondary" && css<{btnType:string}>`
    background-color: transparent;
    border: 2px solid #4E71FE;
    color: #4E71FE;
  `
  };




`

const BtnsWrapper = styled.div`
  display: flex;
  gap: 12px;
`


