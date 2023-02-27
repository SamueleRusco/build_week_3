import { Button } from "react-bootstrap";

const MyButtonComponent = ({ text, bgColor, textColor, borderColor }) => {
  return (
    <Button
      className="me-2"
      style={{
        border: "1px solid " + borderColor || "1px solid rgb(0, 115, 177)",
        borderRadius: "20px",
        padding: "4px 16px",
        fontWeight: "600",
        color: textColor || "rgb(0, 115, 177)",
        backgroundColor: bgColor || "white",
      }}
    >
      {text}
    </Button>
  );
};
export default MyButtonComponent;
