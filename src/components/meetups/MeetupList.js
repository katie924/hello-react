import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css'

function MeetupList(props) {
    return <ul className={classes.list}>
        {props.meetups.map((data) => (
            <MeetupItem
                key={data.id}
                id={data.id}
                image={data.image}
                title={data.title}
                address={data.address}
                description={data.description}
            />)
        )}
    </ul>
}

export default MeetupList;