import { useState } from "react";

const useAgeCalculator = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [years, setYears] = useState("");
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });
  const [validationMessages, setValidationMessages] = useState({
    day: "",
    month: "",
    year: "",
  });
  const handleChangeDay = (eve) => {
    setDay(eve.target.value);
  };
  const handleChangeMonth = (eve) => {
    setMonth(eve.target.value);
  };
  const handleChangeYears = (eve) => {
    setYears(eve.target.value);
  };

  const calculateAge = () => {
    const messages = {
      day: "",
      month: "",
      year: "",
    };

    let isValid = true;

    if (!day) {
      messages.day = "This field is required";
      isValid = false;
    } else if (isNaN(day) || Number(day) < 1 || Number(day) > 31) {
      messages.day = "Must be a valid day";
      isValid = false;
    }

    if (!month) {
      messages.month = "This field is required";
      isValid = false;
    } else if (isNaN(month) || Number(month) < 1 || Number(month) > 12) {
      messages.month = "Must be a valid month";
      isValid = false;
    }

    if (!years) {
      messages.year = "This field is required";
      isValid = false;
    } else if (isNaN(years) || Number(years) < 1900) {
      messages.year = "Must be a valid month";
      isValid = false;
    } else {
      const currentYear = new Date().getFullYear();
      if (Number(years) > currentYear) {
        messages.year = "Year cannot be in the future";
        isValid = false;
      }
    }
    setAge({ years: "--", months: "--", days: "--" });

    setValidationMessages(messages);

    if (isValid) {
      const birthDate = new Date(years, month - 1, day);
      const currentDate = new Date();

      if (!isNaN(birthDate.getTime())) {
        const calculateAge = calculateAgeFromDate(birthDate, currentDate);
        setAge(calculateAge);
      } else {
        setAge({ years: "--", months: "--", days: "--" });
      }
    }
  };
  const calculateAgeFromDate = (birthDate, currentDate) => {
    const difference = currentDate - birthDate;
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.28;
    const years = Math.floor(difference / millisecondsInYear);
    const millisecondsRemaining = difference % millisecondsInYear;
    const millisecondsInMonth = millisecondsInYear / 12;
    const months = Math.floor(millisecondsRemaining / millisecondsInMonth);
    const millisecondsInDay = millisecondsInYear / 365.25;
    const days = Math.floor(
      (millisecondsRemaining % millisecondsInMonth) / millisecondsInDay
    );

    return { years, months, days };
  };

  return {
    day,
    month,
    years,
    age,
    validationMessages,
    handleChangeDay,
    handleChangeMonth,
    handleChangeYears,
    calculateAge,
  };
};

export default useAgeCalculator;
