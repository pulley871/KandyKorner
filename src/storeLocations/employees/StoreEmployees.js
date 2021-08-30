import React, {useState, useEffect} from "react"

export const StoreEmployees = ({id})=>{
    const [employees, setEmployees]= useState()
    const fetchEmployees = ()=>{
        fetch(`http://localhost:8088/employees?storeId=${id}`)
        .then((res)=>res.json())
        .then((data)=>setEmployees(data))
    }
    const deleteEmployee = (employeeId)=>{
        fetch(`http://localhost:8088/employees/${employeeId}`, {method: "DELETE"})
        .then(fetchEmployees)
    }
    useEffect(() => {
        fetchEmployees()
    }, [])
    return (
        <>
        <h1>Current Employees and Position</h1>
        {employees?.map((employee)=>{
            return (
                <div className="container bg-light"key={`store${id}--${employee?.id}`}>
                    <h3 key={`employeename`}>Employee Name: {employee?.name}</h3>
                    <h4 key={`employeeposition`}>Employee Position: {employee?.position}</h4>
                    <button onClick={()=>deleteEmployee(employee.id)}>Fire</button>
                </div>
            )
        })}
        </>
    )
}
