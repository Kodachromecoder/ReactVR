import React, { Component } from 'react';
import Secondaryheader from './Secondaryheader';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drink: [
                {
                    id: 0,
                    name: "Coffee",
                    image:  "/Nofrills.jpg",
                    description: "Black or with cream and sugar, never disappoints. We serve Yeego roasted coffee. ",
                    price: "$1.85"
                }
            ],
        };
    };
    
    render() {
        // const drinkMenu = this.state.drink.map(drink => {
        //     return (
        //         <div key={drink.id} className="col">
        //             <Card>
        //                 <CardImg top width="100%" src={drink.image} alt={drink.name} />
        //                 <CardBody>
        //                     <CardTitle tag="h5">{drink.name}</CardTitle>
        //                     <CardText>{drink.description}</CardText>
        //                 </CardBody>
        //             </Card>
        //         </div>
        //     );
        // });

        return (
            <div className="container">
                <div className="row">
                <Secondaryheader />
                </div>
                <div className="row">
                    {/* {drinkMenu} */}
                </div>
            </div>
        );
    }
}

export default Menu;