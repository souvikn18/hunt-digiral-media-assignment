import {Table, Thead, Tr, Th, Tbody, Td} from "react-super-responsive-table";
import React from "react";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const TableHead = () => {
    
    return(
        <Table className="w-[360px] mt-2">
            <Thead>
                <Tr>
                    <Th>Action</Th>
                    <Th>ID</Th>
                    <Th>Start Date</Th>
                    <Th>End Date</Th>
                    <Th>Month, Year</Th>
                    <Th>Dates excluded</Th>
                    <Th>Number of Days</Th>
                    <Th>Lead Count</Th>
                    <Th>Expected DRR</Th>
                    <Th>Last updated</Th>
                </Tr>
            </Thead>
        </Table>
    )
}

export default TableHead