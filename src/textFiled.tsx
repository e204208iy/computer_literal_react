import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

import MainTable from './mainTable';

import { useRef,useState,useEffect } from 'react';

//useQuery
import {
    useQuery,
  } from '@tanstack/react-query'

// const fetcher = (url: string): Promise<any> => fetch(url).then(res => {return res.json()});;
export default function TextFiled() {

    const studentNumber = useRef("") ;

    const StudentFetcher = async () => {
        const res = await fetch("http://localhost:8000/student/"+studentNumber.current);
        return res.json();
    };
    const AverageFetcher = async () => {
        const res = await fetch("http://localhost:8000/average/");
        return res.json();
    };
    //useQuery
    const [enabled, setEnabled] = useState(false);

    const {data: studentData,refetch} = useQuery(['student'], StudentFetcher,{
        enabled: enabled
    });
    const { data: averageData } = useQuery(["average"],AverageFetcher)
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        studentNumber.current = e.target.value
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === "Enter"){
            console.log("Entered")
            refetch()
        }
    }
    return (
        <Container maxWidth="md">
            <Box>
            <TextField
            id="outlined-password-input"
            label="学籍番号"
            type="student_number"
            autoComplete="current-password"
            onChange={handleChange}
            onKeyDown={handleKeyDown} 
            />
            </Box>
            <MainTable {...studentData} {...averageData}/>
        </Container>
    )
}