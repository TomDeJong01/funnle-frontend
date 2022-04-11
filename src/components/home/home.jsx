import './home.scss';
import React from "react";
import HttpService from "../../services/httpService";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'




export class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            assignments: [],
            categories: ["Other",
                "Analysis",
                "Development",
                "Management",
                "Operations",
                "Security",
                "Testing"
            ]
        }
    }



    componentDidMount() {
        HttpService.getAssignments().then((response) => {
            this.setState({assignments: response});
        })
    }

    handleDropdown=(e) => {
        // const newTypes = [...types];
        // newTypes[index] = e.target.value;
        // setTypes(newTypes);
        console.log(e)
    }


    render() {
        return(
            <div className="home">
                <div className="home-body">
                    <div className="home-card">

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table" pageSize={5}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Id</TableCell>
                                        <TableCell align="left">Title</TableCell>
                                        <TableCell align="right">Predicted Category Id</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.assignments.map((row) => (
                                        <TableRow
                                            key={row.Id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{row.Id}</TableCell>
                                            <TableCell component="th" scope="row">{row.Title}</TableCell>
                                            <TableCell align="right">{row.CategoryId}</TableCell>
                                            <TableCell align="right">
                                                <select id="" defaultValue="Select fruit"
                                                        onChange={(e) => this.handleDropdown(e.target.value)}>
                                                    <option hidden="True" value="Other">Select Category</option>
                                                    <option value="Other">Other</option>
                                                    <option value="Analysis">Analysis</option>
                                                    <option value="Development">Development</option>
                                                    <option value="Management">Management</option>
                                                    <option value="Operations">Operations</option>
                                                    <option value="Security">Security</option>
                                                    <option value="Testing">Testing</option>
                                                </select>
                                                {/*<DropdownButton*/}
                                                {/*    id="dropdown-basic-button-{row.Id}"*/}
                                                {/*    title="select Category"*/}
                                                {/*    value="1"*/}
                                                {/*    label="Type"*/}
                                                {/*    onSelect={eventKey => this.handleDropdown(eventKey)}*/}
                                                {/*>*/}
                                                {/*    <Dropdown.Item eventKey="Other">Other</Dropdown.Item>*/}
                                                {/*    <Dropdown.Item eventKey="Analysis">Analysis</Dropdown.Item>*/}
                                                {/*    <Dropdown.Item eventKey="Development">Development</Dropdown.Item>*/}
                                                {/*    <Dropdown.Item eventKey="Management">Management</Dropdown.Item>*/}
                                                {/*    <Dropdown.Item eventKey="Operations">Operations</Dropdown.Item>*/}
                                                {/*    <Dropdown.Item eventKey="Security">Security</Dropdown.Item>*/}
                                                {/*    <Dropdown.Item eventKey="Testing">Testing</Dropdown.Item>*/}
                                                {/*</DropdownButton>*/}
                                            </TableCell>

                                            <TableCell align="right"><button type="button" >confirm</button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>



                        {/*<div className="table">*/}
                        {/*    {this.state.assignments.map((value, i) => {*/}
                        {/*        return (*/}
                        {/*            <tr key={i}>*/}
                        {/*                <td>{value.Id}</td>*/}
                        {/*                <td>{value.Title}</td>*/}
                        {/*                /!*<td>{value.Description}</td>*!/*/}
                        {/*                <td>{value.CategoryId}</td>*/}
                        {/*            </tr>*/}
                        {/*        )*/}
                        {/*    })}*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
