import React, {useContext} from "react";
import DRRContext from "../Context/DRRContext";
import {Table, Tr, Tbody, Td} from "react-super-responsive-table";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const TableBody = () => {
    const {drr} = useContext(DRRContext);

    return(
        <DRRContext.Provider value={drr}>
            <Table>
            <Tbody>
                <Tr className="text-center" >
                    <Td>{drr.id}</Td>
                    <Td>{drr.date1}</Td>
                </Tr>
            </Tbody>
        </Table>
        </DRRContext.Provider>
        
    )
}

export default TableBody;