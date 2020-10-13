import React from "react";
import { Input, FormBtn } from "../components/Form/Form";
import { Container, Row, Col } from 'react-bootstrap'
function SignUp() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <form>
                        <Input
                            name="email"
                            placeholder="email"
                        />
                        <Input
                            name="password"
                            placeholder="Password"
                        />
                        <FormBtn>
                            SignUp
                </FormBtn>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp