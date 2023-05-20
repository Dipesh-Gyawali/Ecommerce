import React from 'react'

export const Rating = () => {
    let ratingArray = Array(5).fill(false);
    for(let i=0; i< rating;i++){
        ratingArray[i] = true;
    }

    return (
        <>
            { ratingArray.map((value,index) => (
                value ? (
                    a
                ):(
                        b
                )
            ))}
        </>
  )
}
