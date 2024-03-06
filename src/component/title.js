import Search from "antd/lib/input/Search";


export default function Title() {
    return  (
        <div className="title">
             <span>PhimHay.Net</span>
          <Search
            className="search"
            placeholder= "Tìm:tên phim, đạo diễn, diễn viên"
            enterButton     
          />
          

        </div>
    )

}
