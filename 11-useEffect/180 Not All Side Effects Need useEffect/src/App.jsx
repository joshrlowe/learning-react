import { useEffect, useRef, useState } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

function App() {
  const modal = useRef();
  const selectedPlace = useRef();

  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude,
      );
      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    /*
      The useEffect hook is not used everywhere. In fact, you only want to use useEffect when you must.
      This is because a new execution cycle is created when you use useEffect, so overusing it is 
      considered a bad practice.

      Below, we want to persist the places selected by the user in local storage. This is a side effect 
      because it's not directly related to the rendering of the component.
      
      We don't need to wrap this with useEffect for a few reasons:
      1. We don't need to run this code when the component mounts. 
         We need to run it when a user selects a place.
      2. Our code will not enter an infinite loop when this executes because state is not being updated.
      3. We can't wrap this with useEffect because hooks can only be used at the root level of our component function.


      Those three reasons also outline two scenarios where using useEffect is necessary:
      1. When you need to run code only when the component mounts.
      2. When you need to run code that will cause an infinite loop if not wrapped in useEffect.
     */
    const storedIds = JSON.parse(localStorage.getItems("pickedPlaces")) || [];
    if (storedIds.includes(id) === -1) {
      localStorage.setItem("pickedPlaces", JSON.stringify(id, ...storedIds));
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current),
    );
    modal.current.close();
  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          fallbackText="Sorting places by distance..."
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
