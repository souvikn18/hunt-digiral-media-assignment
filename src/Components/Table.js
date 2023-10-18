import React, { useState } from 'react';
import {Table, Thead, Tr, Th, Tbody, Td} from "react-super-responsive-table";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DynamicTable = () => {
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const daysBetween = (date1, date2) => {
        const difference = date2.getTime() - date1.getTime();
        const days = Math.round(difference / (1000 * 60 * 60 * 24));
        return days;
    };

    let thisMonth = date1.toLocaleString("default", {month: "long"});
    let thisYear = date1.getFullYear();

    const [leadCount, setLeadCount] = useState("0");
    const ExpectedDRR = leadCount/daysBetween(date1,date2);
    const [LastUpdated, setLastUpdated] = useState(new Date());
    const [inputValues, setInputValues] = useState({
        action: '',
        id: '',
        startDate: '',
        endDate:'',
        monthYear:'',
        datesExcluded:'',
        numberofDays: '',
        leadCount:'',
        expectedDRR:'',
        lastUpdated:'',
    });

    
    const [dataRows, setDataRows] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
        
    };

    const handleSaveClick = () => {
        const newRow = { ...inputValues,  date1, date2, thisMonth, thisYear, leadCount, ExpectedDRR, LastUpdated };
        setDataRows([...dataRows, newRow]);
        setInputValues({ action: '', id: '', startDate: '', endDate:'', monthYear:'', datesExcluded:'', numberofDays:'', leadCount:'', expectedDRR:'', lastUpdated:'' });
    };

    const handleCancelClick = () => {
        setInputValues({ action: '', id: '', startDate: '', endDate:'', monthYear:'', datesExcluded:'', numberofDays:'', leadCount:'', expectedDRR:'', lastUpdated:'' });
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div onSubmit={HandleSubmit} className="m-4 p-4 bg-gray-100">
        <Table className="w-full border-collapse border border-gray-300">
            <Thead>
            <Tr className="bg-gray-200">
                <Th className="border border-gray-300 px-4 py-2">Action</Th>
                <Th className="border border-gray-300 px-4 py-2">ID</Th>
                <Th className="border border-gray-300 px-4 py-2">Start Date</Th>
                <Th className="border border-gray-300 px-4 py-2">End Date</Th>
                <Th className="border border-gray-300 px-4 py-2">Month, Year</Th>
                <Th className="border border-gray-300 px-4 py-2">Dates Excluded</Th>
                <Th className="border border-gray-300 px-4 py-2">Number of Days</Th>
                <Th className="border border-gray-300 px-4 py-2">Lead Count</Th>
                <Th className="border border-gray-300 px-4 py-2">Expected DRR</Th>
                <Th className="border border-gray-300 px-4 py-2">Last Updated</Th>
            </Tr>
            </Thead>
            <Tbody>
            <Tr>
                <Td className="border border-gray-300 px-4 py-2">
                <input
                    type="text"
                    name="action"
                    value={inputValues.action}
                    onChange={handleInputChange}
                    className="w-full"
                />
                </Td>
                <Td className="border border-gray-300 px-4 py-2">
                <input
                    type="number"
                    name="id"
                    value={inputValues.id}
                    onChange={handleInputChange}
                    className="w-full"
                />
                </Td>
                <Td className="border border-gray-300 px-4 py-2">
                <DatePicker
                    type="date"
                    name="startDate"
                    selected={date1}
                    // value={inputValues.startDate}
                    onChange={e=>setDate1(e) && handleInputChange}
                    className="w-full"
                />
                </Td>
                <Td className="border border-gray-300 px-4 py-2">
                <DatePicker
                    type="date"
                    name="endDate"
                    selected={date2}
                    // value={inputValues.endDate}
                    onChange={e=>setDate2(e) && handleInputChange}
                    className="w-full"
                />
                </Td>
                <Td className="border border-gray-300 px-4 py-2">
                <input
                    disabled
                    type="text"
                    name="monthYear"
                    value={thisMonth+", "+thisYear}
                    onChange={handleInputChange}
                    className="w-full"
                />
                </Td>
                <Td className="border border-gray-300 px-4 py-2">
                <input
                    type="date"
                    name="dateExcluded"
                    value={inputValues.datesExcluded}
                    onChange={handleInputChange}
                    className="w-full"
                />
                </Td>
                <Td className="border border-gray-300 px-4 py-2">
                <input
                    type="text"
                    name="numberofDays"
                    value={daysBetween(date1,date2)}
                    onChange={handleInputChange}
                    className="w-full"
                />
                </Td>
                <Td className="border border-gray-300 px-4 py-2">
                <input
                    type="number"
                    name="leadcount"
                    value={leadCount}
                    onChange={e=>setLeadCount(e.target.value) && handleInputChange}
                    className="w-full"
                />
                </Td>
                <Td className="border border-gray-300 px-4 py-2">
                <input
                    disabled
                    type="number"
                    name="expectedDRR"
                    value={ExpectedDRR}
                    onChange={handleInputChange}
                    className="w-full"
                />
                </Td>
                <Td className="border border-gray-300 px-4 py-2">
                <input
                    type="text"
                    name="lastUpdated"
                    value={LastUpdated}
                    onChange={e=>setLastUpdated(e) && handleInputChange}
                    className="w-full"
                />
                </Td>
            </Tr>
            {dataRows.map((row, index) => (
                <Tr key={index}>
                <Td className="border border-gray-300 px-4 py-2">{row.action}</Td>
                <Td className="border border-gray-300 px-4 py-2">{row.id}</Td>
                <Td className="border border-gray-300 px-4 py-2">{row.startDate}</Td>
                <Td className="border border-gray-300 px-4 py-2">{row.endDate}</Td>
                <Td className="border border-gray-300 px-4 py-2">{row.monthYear}</Td>
                <Td className="border border-gray-300 px-4 py-2">{row.datesExcluded}</Td>
                <Td className="border border-gray-300 px-4 py-2">{row.numberofDays}</Td>
                <Td className="border border-gray-300 px-4 py-2">{row.leadCount}</Td>
                <Td className="border border-gray-300 px-4 py-2">{row.expectedDRR}</Td>
                <Td className="border border-gray-300 px-4 py-2">{row.lastUpdated}</Td>
                </Tr>
            ))}
            </Tbody>
        </Table>
        <div className="mt-4">
            <button
            onClick={handleSaveClick}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
            Save Data
            </button>
            <button
            onClick={handleCancelClick}
            className="bg-red-500 text-white px-4 py-2 rounded"
            >
            Cancel
            </button>
        </div>
        </div>
    );
    };

export default DynamicTable;