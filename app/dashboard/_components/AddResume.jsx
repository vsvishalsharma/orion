"use client"
import { Loader2, PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../../components/ui/dialog"
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { v4 as uuidv4 } from 'uuid';
//import GlobalApi from './../../../service/GlobalApi'
import { useUser } from '@clerk/clerk-react'
//import { Navigate, useNavigate } from 'react-router-dom'


function AddResume() {

    const [openDialog,setOpenDialog]=useState(false)
    const [resumeTitle,setResumeTitle]=useState();
    const {user}=useUser();
    const [loading,setLoading]=useState(false);
    /*const navigation=useNavigate();
    const onCreate=async()=>{
        setLoading(true)
        const uuid=uuidv4();
        const data={
            data:{
                title:resumeTitle,
                resumeId:uuid,
                userEmail:user?.primaryEmailAddress?.emailAddress,
                userName:user?.fullName
            }
        }

        GlobalApi.CreateNewResume(data).then(resp=>{
            console.log(resp.data.data.documentId);
            if(resp)
            {
                setLoading(false);
                navigation('/dashboard/resume/'+resp.data.data.documentId+"/edit");
            }
        },(error)=>{
            setLoading(false);
        })

    }*/
  return (
    <div >
        <div className='p-10 border rounded-lg bg-secondary
            hover:scale-105 hover:shadow-md cursor-pointer
            transition-all border-dashed'
        onClick={()=>setOpenDialog(true)}
        >
            <h2 className='text-lg text-center'>+ Create New Resume</h2>
        </div>

        <Dialog open={openDialog}>
       
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Create New Resume WIP</DialogTitle>
            <DialogDescription>
                <p>Add a title for your new resume</p>
                <Input className="my-2" 
                placeholder="Ex.Full Stack resume"
                onChange={(e)=>setResumeTitle(e.target.value)}
                />
            </DialogDescription>
            <div className='flex justify-end gap-5'>
                <Button onClick={()=>setOpenDialog(false)} variant="ghost">Cancel</Button>
                <Button 
                    disabled={!resumeTitle||loading}
                onClick={()=>onCreate()}>
                    {loading?
                    <Loader2 className='animate-spin' /> :'Create'   
                }
                    </Button>
            </div>
            </DialogHeader>
        </DialogContent>
        </Dialog>

    </div>
  )
}

export default AddResume