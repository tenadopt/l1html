import './App.css';
import styled from 'styled-components';
import Card from "./components/Card";
import go from "./assets/img/go.png"
import pth from "./assets/img/python.png"
import ln from "./assets/img/picture.png"


function App() {
    return (
        <div className="App">
                <Card src={go} headerText="h1" bodyText="Hello"/>
                <Card src={pth} headerText="2h1" bodyText="Faucibus. Faucibus. Sit sit sapien tempusrisu ut. Sit molestie ornare in venen."/>
                <Card src={ln} headerText="3h1" bodyText="Hello123"/>
        </div>
    );
}

export default App;

// const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     margin-bottom: 32px;
//     span {
//       color: #e91e63;
//     }
// `;
//
// const Form = styled.form`
//   width: 100%;
//   max-width: 500px;
// `;
//
// const Field = styled.input.attrs( (props)=>({
//     placeholder: props.placeholder
// }) )`
//   padding: 5px 15px;
//   margin: 10px 0;
//   width: 100%;
//   font-size: 1rem;
// `;
//
// const Checkbox = styled.input.attrs(()=>({
//     type: "checkbox"
// }))`
//
// `
