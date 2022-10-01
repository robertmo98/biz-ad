function Status(props) {
  function getBadgeCSS() {
    switch (props.type) {
      case "Active":
        return "bg-success";
      case "Disabled":
        return "bg-secondary";
    }
  }

  return (
    <>
      <span className={`badge ${getBadgeCSS()}`}>{props.type}</span>
    </>
  );
}

export default Status;
