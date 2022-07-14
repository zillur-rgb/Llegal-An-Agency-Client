import Button from "../Button/Button";
import { services } from "../Homepage/Services";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useState } from "react";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [selected, setSelected] = useState<Date>();
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  const onButtonClick = () => {
    console.log(selected);
  };
  return (
    <main>
      <section className="calendar">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={footer}
        />
      </section>
      <section className="services">
        {services.map((service) => (
          <Button
            key={service.name}
            title={service.name}
            onClick={onButtonClick}
          />
        ))}
      </section>
    </main>
  );
};

export default AppointmentBanner;
