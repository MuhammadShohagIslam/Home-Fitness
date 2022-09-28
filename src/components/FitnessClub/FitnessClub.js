import React from 'react';
import Exercise from '../Exercise/Exercise';
import Profile from '../Profile/Profile';

const FitnessClub = () => {
    return (
        <div className='fitness-club-area'>
            <Exercise/>
            <Profile />
        </div>
    );
};

export default FitnessClub;