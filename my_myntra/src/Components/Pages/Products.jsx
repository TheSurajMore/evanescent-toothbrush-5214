import { Flex, Grid, GridItem} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../Product";

const Products = () => {
    const [ data, setData ] = useState([]);
    useEffect (()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            // console.log(res.data);
            setData(res.data)
        })
    },[])
    console.log(data)

    return(<div>
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            {
                data?.length>0 && data.map((e)=>{
                    return(
                    <GridItem key={e.id}>
                        <Product category={e.category} 
                                 image={e.image}
                                 id={e.id}
                                 description={e.description}
                                 title={e.title}
                                 price={e.proce}
                                 reting={e.rating.rate}
                                 count={e.rating.count}
                        />
                    </GridItem>
                    )
                })
            }
        </Grid>
    </div>)
}

export default Products;