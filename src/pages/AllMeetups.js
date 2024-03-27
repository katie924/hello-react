import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: "https://6.soompi.io/wp-content/uploads/image/20231004091008_Yesung-Scented-Things.jpg?s=900x600&e=t",
        address: 'Meetupstreet 5, 12345',
        description: 'Hello Yesung'
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image: "https://i.kfs.io/album/global/262347118,0v1/fit/500x500.jpg",
        address: 'Meetupstreet 5, 12345',
        description: 'Hello Yesung'
    }
]

function AllMeetupsPage() {
    return (
        <section>
            <h1>All Meetups Page</h1>
            <MeetupList meetups={DUMMY_DATA} />    
        </section>
    )
}

export default AllMeetupsPage;