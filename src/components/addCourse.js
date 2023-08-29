import React, { useState ,useEffect} from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { fetchCourse,addFetchCourse } from '../redux/slices/courseSlice.js';
import { verifyToken } from "../utils/util";
import { useDispatch, useSelector, } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AddCourse(){
    const [courseData,setCourseData] = useState({fetchCourse});
    const dispatch = useDispatch();

    const courses = useSelector((state)=>state.Courses.value.courses);
    const navigate = useNavigate();
    console.log(courses)

    useEffect(() => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const email = localStorage.getItem("email");
    //   if (!verifyToken(token, email, userId)) navigate("/login");
      dispatch(fetchCourse());
      dispatch(addFetchCourse());
    }, []);
    
  return (
    <div>
        <Form >
        <h6>Add Course</h6>
            <FormGroup>
                <Label>Course Title</Label>
                <Input
                type='text'
                placeholder='Intro to react js'
                name='title'
                id='title'
                value={courseData.title}
                onChange={(e) => setCourseData({...courseData,title: e.target.value})}
                />
            </FormGroup>
            <FormGroup>
                <Label>Description</Label>
                <Input
                type='text'
                placeholder='Intro to react js'
                name='desc'
                id='desc'
                value={courseData.desc}
                onChange={(e) => setCourseData({...courseData,desc: e.target.value})}
                />
            </FormGroup>
            <FormGroup>
                <Label>Duration</Label>
                <Input
                type='text'
                placeholder='Intro to react js'
                name='duration'
                id='duration'
                value={courseData.duration}
                onChange={(e) => setCourseData({...courseData,duration: e.target.value})}
                />
            </FormGroup>
            <FormGroup>
                <Label>Url</Label>
                <Input
                type='text'
                placeholder='Intro to react js'
                name='url'
                id='url'
                value={courseData.url}
                onChange={(e) => setCourseData({...courseData,url: e.target.value})}
                />
            </FormGroup>
            <Button color="info" onClick={() => {
            dispatch(addFetchCourse({courseData,dispatch}));
          }}>
            ADD course
          </Button>
        </Form>
    </div>
  )
}