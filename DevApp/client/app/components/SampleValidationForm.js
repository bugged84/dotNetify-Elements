import React from 'react';
import dotnetify from 'dotnetify';
import { Card, CardHeader, CardBody } from 'reactstrap';
import {
    Button,
    EmailField,
    Form,
    FormBody,
    Panel,
    TextField,
    VMContext
} from '../../elements-bootstrap';

const SampleValidationForm = ({ vm, title, horizontal }) => (
    <VMContext vm={vm}>
        <Card>
            <CardHeader>{title}</CardHeader>
            <CardBody>
                <Form>
                    <Panel noMargin childProps={{ horizontal: horizontal }}>
                        <TextField id="Name" />
                        <TextField id="Email" />
                        <Panel horizontal right noMargin>
                            <Button secondary cancel>Cancel</Button>
                            <Button id="Submit" primary submit>Submit</Button>
                        </Panel>
                    </Panel>
                </Form>
            </CardBody>
        </Card>
    </VMContext>
);

export default SampleValidationForm;