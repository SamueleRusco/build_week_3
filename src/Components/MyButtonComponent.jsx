import { Button } from "react-bootstrap";

const MyButtonComponent = ({ text, color, textColor }) => {
  return (
    <Button
      className={
        ("bg-" + color || "white", "text-" + textColor || "rgb(0, 115, 177)")
      }
      style={{
        border: "1px solid rgb(0, 115, 177)",
        borderRadius: "20px",
        padding: "4px 16px",
        fontWeight: "600",
      }}
    >
      {text}
    </Button>
  );
};
export default MyButtonComponent;
