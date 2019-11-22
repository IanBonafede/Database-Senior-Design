import React from 'react'
import { Checkbox, Tab } from '@material-ui/core'
import {makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Paper, TextField}from '@material-ui/core'





export const DataList = ({handle, data, display, page}) => {
    const classes = makeStyles(theme => ({
        root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
        },
        table: {
        minWidth: 650,
        },
    }))
    
    switch(page) {
        case "upload":
            if (display === true) {
                console.log(data)
                return(
                    <div>
                        <Paper className={classes.root}>
                        <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Street</TableCell>
                                <TableCell align="right">City</TableCell>
                                <TableCell align="right">State</TableCell>
                                <TableCell align="right">Zip</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.data.map((row,i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    <TextField value={row.customer_name} onChange={e => handle(e, i, "customer_name")}/>
                                </TableCell>
                                <TableCell align="right">
                                    <TextField value={row.customer_street} onChange={e => handle(e, i, "customer_street")}/>
                                </TableCell>
                                <TableCell align="right">
                                    <TextField value={row.customer_city} onChange={e => handle(e, i, "customer_city")}/>
                                </TableCell>
                                <TableCell align="right">
                                    <TextField value={row.customer_state} onChange={e => handle(e, i, "customer_state")}/>
                                </TableCell>
                                <TableCell align="right">
                                    <TextField value={row.customer_zip} onChange={e => handle(e, i, "customer_zip")}/>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                        </Paper>
                    </div>
                )
            }
            else {
                return(
                    <div>
                        <Paper className={classes.root}>
                        <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Street</TableCell>
                                <TableCell align="right">City</TableCell>
                                <TableCell align="right">State</TableCell>
                                <TableCell align="right">Zip</TableCell>
                            </TableRow>
                        </TableHead>
                        </Table>
                        </Paper>
                    </div>
                )
            }
            
        case "search":
            if (display === true) {
                console.log(data)
                return (
                <div>
                    <Paper className={classes.root}>
                    <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Street</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">State</TableCell>
                            <TableCell align="right">Zip</TableCell>
                            <TableCell align="right">Select</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row => (
                        <TableRow key={row.customer_name}>
                            <TableCell component="th" scope="row">{row.customer_name}</TableCell>
                            <TableCell align="right">{row.customer_street_1}</TableCell>
                            <TableCell align="right">{row.customer_city}</TableCell>
                            <TableCell align="right">{row.customer_state}</TableCell>
                            <TableCell align="right">{row.customer_zip}</TableCell>
                            <TableCell align="right">
                                <Checkbox onChange={e => handle(e, row)}/>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                    </Paper>
                </div>
                )
            }
            else {
                return(
                    <div>
                        <Paper className={classes.root}>
                        <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Street</TableCell>
                                <TableCell align="right">City</TableCell>
                                <TableCell align="right">State</TableCell>
                                <TableCell align="right">Zip</TableCell>
                                <TableCell align="right">Select</TableCell>
                            </TableRow>
                        </TableHead>
                        </Table>
                        </Paper>
                    </div>
                    )
            }
            
    }
    
}




export default DataList;

