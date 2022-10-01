import Status from "./Status";
import ServiceSelection from "./ServiceSelection";

function ServicesTable(props) {
  function handleDelete(service) {
    props.deleteService(service);
  }

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th className="w-50">Service Name</th>
          <th className="w-50">Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.services.map((service) => (
          <tr key={service.id} className="bg-light">
            <td>
              <ServiceSelection service={service.service} />
            </td>
            <td>
              <Status type={service.status} />
            </td>
            <td>
              <button
                onClick={() => handleDelete(service)}
                className="btn btn-default"
              >
                <i className="bi-trash3"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ServicesTable;
