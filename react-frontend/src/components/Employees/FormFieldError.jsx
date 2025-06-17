import { Alert } from 'antd';

const FormFieldError = ({ errors, fieldName }) => {
    return (
        <Alert message={errors[fieldName].message} type="error" showIcon className="max-w-[500px] min-w-[300px] mt-2" />
    );
};

export default FormFieldError;
