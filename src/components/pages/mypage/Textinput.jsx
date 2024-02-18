import styled from'styled-components';

const StyleTextarea = styled.textarea`
    width:calc(100% - 32px);
    ${(props)=> 
        props.height &&
        `
        height: ${props.height}px;
        `
    }
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
    color:black;

`;

const Textinput = (props)=>{
    const{height,value,onChange, placeholder } = props;

    return (
        <StyleTextarea height={height} value={value} onChange={onChange} placeholder={placeholder}/>
    );
};

export default Textinput;