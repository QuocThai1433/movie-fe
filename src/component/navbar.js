import { useEffect, useState } from "react";
import "../style/navbar.scss";

// hoặc viết kiểu này cho giống hàm
export default function Navbar({variableA}) { // Này là cách viết component dạng func trong reactjs
    // Phần này viết logic code
    const [data, setData] = useState(); // Này là định nghĩa một state trong đó data là giá trị còn setData là hàm thay đổi giá trị data
    const [data1, setData1] = useState(); // Này là định nghĩa một state trong dó data là giá trị còn setData là hàm thay đổi giá trị data
    
    const handleChange = () => { // xử lý click button đây, 
        setData("B") // khi click button nó set giá trị B cho data nên nó sẽ chjay vào hàm useEFfect
    }

    useEffect(() => { // hàm khỏi tạo, khi load lại component thì nó sẽ chạy hàm này đầu tiên
        console.log("KHOI TAO");
    }, []);// cái chỗ [] k xử lý gì hết

    useEffect(() => { // hàm khỏi tạo, khi load lại component thì nó sẽ chạy hàm này đầu tiên
        console.log("DATA THAY DOI: ", data);
    }, [data]);// khi data thay doi thi sẽ chạy vào đây

    useEffect(() => { // hàm khỏi tạo, khi load lại component thì nó sẽ chạy hàm này đầu tiên
        console.log("DATA1 THAY DOI: ", data);
    }, [data1]);// khi data1 thay doi thi sẽ chạy vào đây





















    return ( // Phần return sẽ trả về html
        <>
            <div>{data}</div>
            {/* TRUMMAAA */}
            <div>{variableA}</div>
            <button onClick={handleChange}>Change data</button>
        </>
    )























}


    // const menuItem = (subItems) => {
    //     const items = subItems.map((value, index) => ({ // từ chỗ này nè a, hàm này mục tiêu của mình là lấy list title đúng ko a 
    //         key: index, // index gán vào biến key
    //         label: value, // value gán vào label
    //         icon: <MailOutlined />
    //     })); // hàm này convert list value, index => list {key , label}

    //     return (
    //         // Mình đang dùng thư viện antd, mấy cái component nào k hiểu thì lên trang đó xem
    //         <Menu
    //             items={items} // bìng thường dùng 2 biến key, value thì đủ r, nếu muốn lấy thêm biến ví dụ icon chẳng hạn
    //         />
    //     );// em xoa roi, em dang viet lai a, taij em ko hiu ro
    // }; // Viết tiếp ik