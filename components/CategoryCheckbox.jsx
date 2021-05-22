import clsx from "clsx";
import React from "react";
import categories from "../config";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function CategoryCheckbox({ category, checked, ...props }) {
	return (
		<button
			className={clsx(
				"flex items-center relative text-white transition-all duration-150 justify-center flex-auto py-2 rounded-lg focus:outline-none outline-none focus:opacity-90 active:opacity-50 cursor-pointer ",
				checked ? "ring ring-white" : ""
			)}
			style={{
				background: category?.gradient,
			}}
			{...props}
		>
			{category.text}
		</button>
	);
}

export default CategoryCheckbox;
