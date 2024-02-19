// SearchBar.jsx
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  z-index: 2;
`

const Form = styled.form`
  position: absolute;
  width: 330px;
  height: 60px;
  overflow: hidden;
  transition: width 0.5s;
  margin: auto;
  -webkit-backface-visibility: hidden;
  background: rgba(0, 0, 0, 0);
`;

const Input = styled.input`
  position: absolute;
  top: 0; 
  right: 28px;
  height: 60px;
  width: 300px;
  float:left;
  font-size: 1.5em;
  border-radius: 30px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: none;
  border: none;
  padding-left: 20px;
  color: black;
  transition: width 0.5s;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  background: #28d7d7;
  border: none;
  border-radius: 30px;
  color: #FFF;
  font-size: 1.3em;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;


const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="검색어를 입력하세요..."
          value={searchTerm}
          onChange={handleChange}
        />
        <Button type="submit">검색</Button>
      </Form>
    </Container>
  );
};

export default SearchBar;