import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, } from 'reactstrap';
import styled from "styled-components"

const ClearBtn = styled.span`
    color: gray;
    font-weight: 900;
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    top: 0;
    right: 10px;
    :hover{
        color: purple;
    }
`;

const StyledFormGroup = styled(FormGroup)`
    position: relative
`;

class SearchBar extends Component {
    state = {
        search: ""
    }

    handleInputChange = (event)=>{
        const {value} = event.target
        console.log(value)
        this.setState({search: value})
        this.props.searchYouTube(value)
    }



    render() {
        return (


            <Form onSubmit={(event)=>event.preventDefault()}>
                <StyledFormGroup style={{position: "relative"}}>
                    <Label 
                        for="search" 
                        sm={2} 
                        hidden 
                    >Search</Label>

                    <Input 
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder="Search..." 
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        
                    />
                    <ClearBtn onClick={() => this.setState({search: ""})}>x</ClearBtn>

                </StyledFormGroup>



            </Form>

        )
    }

}

export default SearchBar