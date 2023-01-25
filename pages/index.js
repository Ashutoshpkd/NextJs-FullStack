import { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList';
const meetups = [
    {
        id: 'm1',
        image: 'https://i.pinimg.com/564x/bd/49/a9/bd49a9893f1ec48846981cfa2380f4fe.jpg',
        title: 'Its snowy here, Lets catch up',
        address: 'North Road, Gibsen Street, 2241',
    },
    {
        id: 'm2',
        image: 'https://i.pinimg.com/originals/54/67/4a/54674a83dc8ea08d2641bee45b9d2ba3.jpg',
        title: 'Meet in the beach house',
        address: 'North Road, Gibsen Street, 2241',
    },
    {
        id: 'm3',
        image: 'https://i.pinimg.com/originals/54/67/4a/54674a83dc8ea08d2641bee45b9d2ba3.jpg',
        title: 'Its covered in green',
        address: 'North Road, Gibsen Street, 2241',
    }
];
const HomePage = () => {
    return (
        <Fragment>
            <MeetupList meetups={meetups}/>
        </Fragment>
    );
};

export default HomePage;