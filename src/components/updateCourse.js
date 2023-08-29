import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormGroup,Label,Input } from 'reactstrap'
import { selectCourse } from '../redux/slices/coursesSlice'
import { Link, Outlet } from 'react-router-dom'

export default function UpdateCourse() {
const [selectcourse, setSelectcourse]= useState(null)

 const dispatch= useDispatch();

 const courseList = useSelector((state)=>state.course.value.selectCourse)


useEffect(()=>{
  dispatch(selectCourse())

},[])

  return (
    <div>
      
      <FormGroup>
    <Label for="exampleSelect">
      Select Courses
    </Label>
    <Input
      id="Select"
      name="select"
      type="select"
      onChange={(e) => setSelectcourse(e.target.value)}
    >

 
{courseList.map((e)=>{
return(
  <option value={e._id}>{e.title}</option>
)
  })
}
  

    </Input>
  </FormGroup>
  <Link to={"/editcourse/update/topics"}>Add Topic</Link>
<Outlet context={selectcourse}/>

    </div>
  )
}