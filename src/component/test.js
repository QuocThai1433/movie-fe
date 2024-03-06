import { Button } from "antd";
import { useEffect, useState } from "react"

export default function Test ({variableB}) {

    const [data, setData] = useState();
   

    const handleChange = () => {
        setData("B");
    }
    useEffect(() => {
        console.log("Ham khoi tao");
    }, []);

    useEffect(() => {
        console.log("Data thay đổi",data);
    },[data]);

    return (
        <>
            <div>
                {data}
            </div>

            <div>
                {variableB}
            </div>
            <Button onClick={handleChange}>
                Test
            </Button>
        </>

    )
}