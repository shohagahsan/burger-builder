import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "reactstrap";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Meat", type: "meat" }
]

const BuildControl = props => {
    return (
        <div className="d-flex">
            <div className="me-auto ms-5" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{props.label}</div>
            <button className="btn btn-danger btn-sm m-1" onClick={props.removed}>Less</button>
            <button className="btn btn-success btn-sm m-1" onClick={props.added}>More</button>
        </div>
    )
}

const Controls = props => {
    return (
        <div className="container ms-md-5" style={{ textAlign: "center" }}>
            <Card style={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center"
            }}>
                <CardHeader style={{
                    backgroundColor: "#D70F64",
                    color: "white"
                }}>Add Ingredients</CardHeader>
                <CardBody>
                    {
                        controls.map(item => {
                            return <BuildControl
                                label={item.label}
                                type={item.type}
                                key={Math.random()}
                                added={() => props.ingredientAdded(item.type)}
                                removed={() => props.ingredientRemoved(item.type)}
                            />
                        })
                    }
                </CardBody>
                <CardFooter>Price: <strong>{props.price}</strong> BDT</CardFooter>
                <Button style={{ backgroundColor: "#D70F64" }} disabled={!props.purchasable} onClick={props.toggleModal}>Order Now</Button>
            </Card>
        </div>
    )
}

export default Controls;