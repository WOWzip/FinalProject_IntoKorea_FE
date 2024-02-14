


// detailImage1item.jsx

const DetailImage1item = ( {data } ) => {
    if( data !== null){
        console.log(data)

        const { originimgurl, serialnum } = data;

        
        
        return (
            <>
                <img src={originimgurl} alt={serialnum}/>
            </>
        )

    }
}


export default DetailImage1item;