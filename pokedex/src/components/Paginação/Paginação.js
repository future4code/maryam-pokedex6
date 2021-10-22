import React from "react";

const MAX_ITEM = 9;
const MAX_LEFT = (MAX_ITEM -1) /2;

const Paginacao = ({limit, total, offset, setOffset }) => {
  const current = offset ? (offset /limit) + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);
    
    return (
        <ul>
            {Array.from({ length: MAX_ITEM})
            .map((_,index) => index + first)
            .map((page) => (
                <li>
                    <button
                    onClick={() => setOffset((page -1) * limit)}
                    >
                        {page}
                        </button></li>
            ))}
        </ul>
    ) 
};

export default Paginacao