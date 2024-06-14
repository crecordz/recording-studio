import { PuffLoader } from "react-spinners";

export default function Loader({ loading, size }) {
  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <PuffLoader
      color={"#46a32a"}
      loading={loading}
      cssOverride={override}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
