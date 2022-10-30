import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

export default function AllMeetupsPage() {
  const [isLoading, setLoading] = useState(true);
  const [loadedMeetups, setMeetups] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://react-course-cdb85-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setLoading(false);
        setMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  } else {
    return (
      <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
      </section>
    );
  }
}
