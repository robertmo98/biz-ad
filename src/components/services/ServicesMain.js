import { useState } from "react";
import Header from "./Header";
import Message from "./Message";
import ServicesTable from "./ServicesTable";

function ServicesMain() {
  const [servicesData, setServicesData] = useState([]);

  function addService(newService) {
    newService.id = Math.random() + "";
    const updated = [...servicesData, newService];
    setServicesData(updated);
  }

  function deleteService(service) {
    const updated = servicesData.filter(
      (serviceItem) => serviceItem.id !== service.id
    );
    setServicesData(updated);
  }

  return (
    <>
      <Header addService={addService} />
      {servicesData.length === 0 && <Message />}
      <ServicesTable services={servicesData} deleteService={deleteService} />
    </>
  );
}

export default ServicesMain;
