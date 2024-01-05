import styled from "styled-components";
import myImage from "./picture.svg"

export function Card() {
    return (
        <Area>
            <Image src={myImage} alt="Description"/>
            <Header>Headline</Header>
            <Form>
                <TextArea>Faucibus. Faucibus. Sit sit sapien tempusrisu ut. Sit molestie ornare in venen.</TextArea>
                <SuperBtn>Save</SuperBtn>
                <SuperBtn>Overview</SuperBtn>
            </Form>
        </Area>
    )

}

const Area = styled.div`

  background-color: bisque;
`

const Image = styled.img`
  
`

const Header = styled.h1`

`

const Form = styled.div`

`

const TextArea = styled.div`

`

const SuperBtn = styled.button`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  background-color: blue;
`

