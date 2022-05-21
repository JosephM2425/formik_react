import { useField } from "formik";

const Radio = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: "radio" });
  return (
    <div>
      <label htmlFor="">
        <input type="radio" {...field} {...props} />
        {label}
      </label>
    </div>
  );
};

export { Radio };
