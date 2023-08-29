import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {Topic} from '../redux/slices/topicsSlice';
import { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'


export default function AddTopics() {
  const courseId = useOutletContext();
  console.log(courseId);


  const [topicData, settopicData] = useState({});


  const dispatch = useDispatch();
  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(Topic({...topicData,courseId }))
  }


  return (
    <div>
<Form onSubmit={handleSubmit}>
                <h6>Add Topics</h6>
                <FormGroup>
                    <Label>Topic Title</Label>
                    <Input
                        type='text'
                        placeholder='Topic Title'
                        name='topictitle'
                        id='topictitle'
                        value={topicData.topictitle}
                        onChange={(e) => settopicData({ ...topicData, topictitle: e.target.value })}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Topic Description</Label>
                    <Input
                        type='text'
                        placeholder='Description '
                        name='topicDescription'
                        id='topicDescription'
                        value={topicData.topicDescription}
                        onChange={(e) => settopicData({ ...topicData, topicDescription: e.target.value })}
                    />
                </FormGroup>



                <FormGroup>
                    <Label> Video</Label>
                    <Input
                        type='text'
                        placeholder='Video'
                        name='Video'
                        id='Video'
                        value={topicData.Video}
                        onChange={(e) => settopicData({ ...topicData, Video: e.target.value })}
                    />
                </FormGroup>


                <FormGroup>
                    <Label>topic Duration</Label>
                    <Input
                        type='text'
                        placeholder='Duration'
                        name='topicDuration'
                        id='topicDuration'
                        value={topicData.topicDuration}
                        onChange={(e) => settopicData({ ...topicData, topicDuration: e.target.value })}
                    />
                </FormGroup>
            </Form>


            <Button type='button' onClick={handleSubmit}>Add Topic</Button>


    </div>
  )
}