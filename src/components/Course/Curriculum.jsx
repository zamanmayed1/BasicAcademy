import React, { useState } from 'react';
import Accordion from './Accordion';

const Curriculum = () => {

    const data = [
        {
            id: 1,
            moduleName: 'Module 1: Introduction to DBT',
            lessons: [
                'Understanding DBT Principles',
                'Core Mindfulness Skills',
                'Interpersonal Effectiveness',
                'Emotion Regulation'
            ]
        },
        {
            id: 2,
            moduleName: 'Module 2: Distress Tolerance Skills',
            lessons: [
                'Introduction to Distress Tolerance',
                'Acceptance Skills',
                'Crisis Survival Skills',
                'Advanced Distress Tolerance'
            ]
        },
        {
            id: 3,
            moduleName: 'Module 3: Emotional Regulation',
            lessons: [
                'Understanding Emotions',
                'Emotion Regulation Strategies',
                'Building Positive Emotions',
                'Managing Negative Emotions'
            ]
        },
        {
            id: 4,
            moduleName: 'Module 4: Interpersonal Effectiveness',
            lessons: [
                'Effective Communication',
                'Assertiveness Training',
                'Building and Maintaining Relationships',
                'Resolving Conflicts'
            ]
        }
    ];



    return (
        <div className='p-2'>   
            {data.map((d) => {
                const { id } = d;
                return <Accordion key={id} {...d}></Accordion>;
            })}
        </div>
    );
};

export default Curriculum;
