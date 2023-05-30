import React, { useEffect, useRef, useState } from "react";

function Product({ partsList, setPartsList }) {
    const partNumberRef = useRef();
    const descriptionRef = useRef();
    const mtburRef = useRef();
    const partsListRef = useRef([]);

  

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPart = {
            partNumber: partNumberRef.current.value,
            description: descriptionRef.current.value,
            mtbur: mtburRef.current.value
        };

        partsListRef.current = [...partsListRef.current, newPart];
        setPartsList([...partsListRef.current]);
        partNumberRef.current.value = "";
        descriptionRef.current.value = "";
        mtburRef.current.value = "";
    };

    useEffect(() => {
        localStorage.setItem('partsList', JSON.stringify(partsList))
    }, [partsList])

    return (
        <div>
            <h2>Products Page</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Part Number:
                    <input type="text" ref={partNumberRef} />
                </label>
                <br />
                <label>
                    Description:
                    <input type="text" ref={descriptionRef} />
                </label>
                <br />
                <label>
                    MTBUR:
                    <input type="text" ref={mtburRef} />
                </label>
                <br />
                <button type="submit">Add Part</button>
            </form>
            <ol>
                {partsList.map((part, index) => (
                    <li key={index}>
                        Part Number: {part.partNumber}, Description: {part.description}, MTBUR: {part.mtbur}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Product;