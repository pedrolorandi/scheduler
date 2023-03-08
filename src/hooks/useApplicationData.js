import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })
  
  const setDay = (day) => {
    setState(prev => ({ ...prev, day }))
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    })
  }, []);
 
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    }
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    const days = state.days.map(day => {
      return day.name === state.day ? { ...day, spots: calculateSpots(state.day) - 1} : day;
    })
    
    return axios.put(`/api/appointments/${id}`, {interview})
      .then(() => {
        setState((prev) => ({
          ...prev,
          appointments,
          days
        }))
      }) 
  }
  
  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    }
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    const days = state.days.map(day => {
      return day.name === state.day ? { ...day, spots: calculateSpots(state.day) + 1} : day;
    })
  
    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        setState((prev) => ({
          ...prev,
          appointments,
          days
        }))
      })
  }

  const calculateSpots = (day) => {
    const selectedDay = state.days.find(d => d.name === day);

    const spots = selectedDay.appointments.filter(id => {
      return state.appointments[id].interview === null;
    })

    return spots.length;
  }

  return { state, setDay, bookInterview, cancelInterview }
}