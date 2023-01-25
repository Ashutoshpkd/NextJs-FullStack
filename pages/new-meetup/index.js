import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
    return (
        <Fragment>
            <NewMeetupForm onAddMeetup={console.log}/>
        </Fragment>
    )
};

export default NewMeetup;