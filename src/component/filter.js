import { Select } from "antd";
import filterjson from "../config/filter-config.json"

export default function Filter() {


    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const { Option } = Select;

    const filterItem = (itemvalue) => {
        var list = itemvalue["subItems"].map((value, index) => {
            return <Option key={index} value={value}> 
            


                {value}

            </Option>;
        });
        return <div className='filter_item'>
           {/* // <label>{itemvalue.label}</label> */}
            <Select
                className='filter_select'
                defaultValue={itemvalue}
                style={{
                    width: 120,
                }}
                onChange={handleChange}
            >
                {list}
            </Select>
        </div>
    }

    const listNav = () => {
        return filterjson["data"].map(value => {
            return <>
                <li> {filterItem(value)}</li>
            </>
        });
    }
    return (
        <div className="ul-un" >
            <ul > {listNav()}</ul>
        </div>
    )
    // style="list-style-type:circle;"
}