import React from "react";
import { Card, CardHeader, CardBody, CardText, Col } from "reactstrap";


const CharacterCard = ({ character }) => {

    return (
        <Col xs="6" md="4" xl="3">
        {/* <div className="character-list"> */}
        <Card>
          <CardHeader>Name: {character.name}</CardHeader>
           <CardBody> 
               <CardText>Birth Year: {character.birth_year}</CardText>
               <CardText>Height: {character.height}</CardText>
               <CardText>Mass: {character.mass}</CardText>
           </CardBody>
         </Card>
         <br/>
        </Col>
      );
    };
    
    export default CharacterCard;