import React from "react";

type Props = {};

const styledInput = ({ value, setValue }) => {
    return (
        <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
    );
};

export default styledInput;
