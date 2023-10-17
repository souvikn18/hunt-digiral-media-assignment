'use client';
import React, { useState, useContext } from 'react';
import { Button, Modal } from 'flowbite-react';
import { v4 } from 'uuid';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DRRContext from "../Context/DRRContext";
import {ADD_DRR} from "../Context/action.types";
import TableBody from './TableBody';

export default function Sizing() {
  const [id, setId] = useState(v4())
  const [openModal, setOpenModal] = useState("");
  const [modalSize, setModalSize] = useState('md');
  const props = { modalSize, openModal, setModalSize, setOpenModal, setId };
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [date3, setDate3] = useState(new Date(), []);
  const {dispatch} = useContext(DRRContext)

  const today = new Date();
  let thisMonth = date1.toLocaleString("default", {month: "long"});
  let thisYear = today.getFullYear();

  const daysBetween = (date1, date2) => {
    const difference = date2.getTime() - date1.getTime();
    const days = Math.round(difference / (1000 * 60 * 60 * 24));
    return days;
  };

  const [leadCount, setLeadCount] = useState("");
  const ExpectedDRR = leadCount/daysBetween(date1,date2);
  const [LastUpdated, setLastUpdated] = useState(new Date());

  const HandleSubmit = (e) => {
    e.preventDefault();

    const drr = {
      id,
      date1,
      date2,
      thisMonth,
      thisYear,
      date3,
      daysBetween,
      leadCount,
      ExpectedDRR,
      LastUpdated
    }
    dispatch({
      type: ADD_DRR,
      payload: drr
    })

    setId("")
    setDate1("")
    setDate2("")
    setDate3("")
    setLeadCount("")
    setLastUpdated("")
  }

  return (
    <>
      <div className="flex flex-wrap gap-4">
        
        <Button onClick={() => props.setOpenModal('size') && props.setId(v4())}>Add New</Button>
      </div>
      <Modal onSubmit={HandleSubmit} show={props.openModal === 'size'} size={props.modalSize} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>New Record</Modal.Header>
        <Modal.Body>
          <form  className="space-y-6 p-6">
            <div className='flex gap-4 justify-start'>Action:<span><input disabled value={"NA"} className='border cursor-no-drop'/></span></div>
            <div className='flex gap-4 justify-start'>ID:<span><input name='id' disabled className='border cursor-no-drop' value={id}/></span></div>
            <div className='flex gap-4 justify-start'>Start Date:<span><DatePicker selected={date1} onChange={(e)=>{setDate1(e)}} className='w-[180px]'/></span></div>
            <div className='flex gap-4 justify-start'>End Date:<span><DatePicker selected={date2} onChange={(e)=>{setDate2(e)}} className='w-[180px]'/></span></div>
            <div className='flex gap-4 justify-start'>Month, Year:<span><input className='border' value={thisMonth+', '+thisYear}/></span></div>
            <div className='flex gap-4 justify-start'>Excluded dates:<span>
            <DatePicker
              selected={date3}
              onChange={(e) => {setDate3(e)}}
              selectsStart={date1}
              selectsEnd={date2}
              className='w-[180px]'
            /></span></div>
            <div className='flex gap-4 justify-start'>Number of days:<span><input disabled value={daysBetween(date1,date2)} className='border cursor-no-drop'/></span></div>
            <div className='flex gap-4 justify-start'>Lead count:<span><input placeholder='Enter lead count' value={leadCount} onChange={e=>setLeadCount(e.target.value)} className='border'/></span></div>
            <div className='flex gap-4 justify-start'>Expected DRR:<span><input disabled value={ExpectedDRR} className='border cursor-no-drop'/></span></div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal()}>Save</Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}


