import React from 'react';

export const Filter = ({ list = [] }) =>
    <div>
        {
            list.map (item =>
                <h3 key={item["id"]}><mark>{item["book"]}</mark></h3>)
        }
    </div>;