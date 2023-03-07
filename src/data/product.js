const products = [
  {
    id: 1,
    name: "Màn hình HKC MB24V9 24 inch",
    price: 23,
    category: "HKC ",
    img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/4/3/43_1_35.jpg",
    description:
      "Màn hình HKC MB24V9 24 inch với nhiều tính năng nổi trội, ưu việt được đánh giá cao. Đây hứa hẹn sẽ là sản phẩm mang đến trải nghiệm tốt so với tầm giá. Tìm hiểu rõ hơn về màn hình HKC thông qua các thông tin dưới đây!",
  },
  {
    id: 2,
    name: "Tai nghe Bluetooth Apple AirPods Pro 2021",
    price: 4,
    category: "Airpod",
    img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/w/mwp22_av2_2.jpg",
    description:
      "Sở hữu thiết kế đeo tai siêu êm nhẹ cùng âm thanh chất lượng đầy mê hoặc, tai nghe Apple AirPods Pro 2021 Magsafe được hãng Apple chế tạo nhằm mang đến những trải nghiệm nghe nhạc khó quên.",
  },
  {
    id: 3,
    name: "iPad Gen 10 10.9 inch 2022 Wifi 64GB",
    price: 10,
    category: "iPad",
    img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/ipad-2022-hero-pink-wifi-select.png",
    description:
      "Sản phẩm được đón chờ nhất năm nay chính là chiếc iPad 10.9 inch, thế hệ máy tính bảng iPad gen 10 mới sở hữu vô số điểm mạnh nổi bật. Bạn có thể chơi game, xem phim, sử dụng bút Apple Pencil để thao tác vẽ viết nhanh chóng tiện lợi. Cùng xem chiếc iPad gen 10 2022 này có đáng sở hữu không, giá thế nào và các điểm đáng chú ý khác trong bài viết nhé!",
  },
  {
    id: 4,
    name: "Apple Watch SE 2022 40mm | Chính Hãng VN/A",
    price: 6,
    category: "Apple Watch",
    img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_231.jpg",
    description:
      "Tiếp tục là sản phẩm đồng hồ thông minh thuộc phân khúc tầm trung, đồng hồ Apple Watch SE 2022 là phiên bản kế nhiệm Apple Watch SE được ra mắt trước đó. Đồng hồ thông minh Apple Watch SE 2022 được trang bị con chip Apple S8 cùng tính năng ấn tượng như phát hiện té ngã và tai nạn thông minh.",
  },
  {
    id: 5,
    name: "Robot hút bụi Ecovacs Deebot T10 Omni",
    price: 17,
    category: "Apple",
    img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/d/sdsd_1_2.jpg",
    description:
      "Robot hút bụi Ecovacs Deebot T10 Omni là sản phẩm robot hút bụi mang lại khả năng làm sạch hiệu quả. Sản phẩm Ecovacs Deebot T10 Omni được trang bị nhiều công nghệ thông minh như lập bản đồ  TrueMapping 2.0, tránh vật cản AIVI 3.0, trợ lý giọng nói YIKO AI. Đặc biệt, Ecovacs Deebot T10 Omni còn được trang bị trạm sạc thông minh với tính năng tự động đổ rác - giặt giẻ - sấy khô bằng khí nóng - khử khuẩn ion bạc.",
  },
  {
    id: 6,
    name: "OPPO Reno8 T 5G (8GB - 128GB)",
    price: 9,
    category: "OPPO",
    img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/o/p/oppo-reno8t-vang1-thumb-600x600.jpg",
    description:
      "Dung lượng Pin điện thoại Reno8 T 5G lên tới 4800mAh cùng thông số bộ nhớ đạt 8GB RAM và 128GB ROM giúp người dùng có thể thoải mái trải nghiệm mà không cần lo về vấn đề năng lượng hay bộ nhớ lưu trữ trong quá trình sử dụng.",
  },
  {
    id: 7,
    name: "iPhone 13 128GB | Chính hãng VN/A",
    price: 17,
    category: "iPhone",
    img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg",
    description:
      "Về kích thước, iPhone 13 sẽ có 4 phiên bản khác nhau và kích thước không đổi so với series iPhone 12 hiện tại. Nếu iPhone 12 có sự thay đổi trong thiết kế từ góc cạnh bo tròn (Thiết kế được duy trì từ thời iPhone 6 đến iPhone 11 Pro Max) sang thiết kế vuông vắn (đã từng có mặt trên iPhone 4 đến iPhone 5S, SE).",
  },
  {
    id: 8,
    name: "Samsung Galaxy S23 Ultra 256GB",
    price: 26,
    category: "Samsung",
    img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/2/s23-ultra-xanh.png",
    description:
      "Samsung Galaxy S23 Ultra là điện thoại cao cấp của hãng điện thoại Samsung được ra mắt vào đầu năm 2023. Điện thoại Samsung S23 series mới này sở hữu camera độ phân giải 200MP ấn tượng cùng một khung viền vuông vức sang trọng. Cấu hình máy cũng là một điểm nổi bật với con chip Snapdragon 8 Gen 2 mạnh mẽ, bộ nhớ RAM 8GB mang lại hiệu suất xử lý vượt trội.",
  },
];

export default products