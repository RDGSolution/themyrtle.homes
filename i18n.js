// ========================================
// Homestay The Myrtle - Internationalization (i18n)
// Languages: Vietnamese, English, Chinese, Japanese
// ========================================

const translations = {
    vi: {
        // Navigation
        "nav.home": "Trang chủ",
        "nav.about": "Giới thiệu",
        "nav.gallery": "Hình ảnh",
        "nav.destinations": "Điểm đến",
        "nav.amenities": "Tiện nghi",
        "nav.contact": "Liên hệ",

        // Hero
        "hero.subtitle": "Chào mừng đến với",
        "hero.tagline": "Homestay & Garden",
        "hero.description": "Nơi nghỉ dưỡng yên bình giữa lòng Đà Lạt<br>bao quanh bởi vườn cây xanh mát và hoa lá thơ mộng",
        "hero.cta": "Đặt Phòng Ngay",

        // About
        "about.title": "Về Chúng Tôi",
        "about.p1": "Homestay The Myrtle tọa lạc tại thành phố Đà Lạt thơ mộng, là nơi lý tưởng để bạn tâm hồn hòa mình vào thiên nhiên yên bình.",
        "about.p2": "Với kiến trúc gỗ mộc mạc, khung cửa sổ màu đất ấm áp cùng vườn cây nhiệt đới xanh mướt, The Myrtle mang đến cho bạn cảm giác như đang ở trong một ngôi nhà cổ tích giữa rừng.",
        "about.p3": "Mỗi góc nhỏ tại đây đều được chăm chút từ từng chậu dương xỉ, những giàn hoa giấy tím đến những chiếc ghế gỗ vintage — tất cả tạo nên một không gian sống động nhưng vẫn rất đỗi bình yên.",
        "about.f1": "Vườn cây xanh mát",
        "about.f2": "Kiến trúc mộc mạc",
        "about.f3": "Không gian yên tĩnh",

        // Gallery
        "gallery.title": "Không Gian",
        "gallery.subtitle": "Mỗi góc nhỏ là một bức tranh",
        "gallery.img1": "Mặt tiền xanh mát",
        "gallery.img2": "Cửa sổ gỗ vintage",
        "gallery.img3": "Lối đi thơ mộng",
        "gallery.img4": "Vườn dương xỉ",
        "gallery.img5": "Hiên nhà bình yên",
        "gallery.img6": "Thiên nhiên bao quanh",
        "gallery.img7": "Góc đọc sách",

        // Amenities
        "amenities.title": "Tiện Nghi",
        "amenities.subtitle": "Mọi thứ bạn cần cho kỳ nghỉ hoàn hảo",
        "amenities.room.title": "Phòng Nghỉ Ấm Cúng",
        "amenities.room.desc": "Phòng nghỉ với nội thất gỗ tự nhiên, chăn ga trắng tinh, view vườn cây xanh mát.",
        "amenities.garden.title": "Vườn Cây Nhiệt Đới",
        "amenities.garden.desc": "Vườn cây rộng rãi với hàng trăm loài cây xanh, hoa giấy tím và dương xỉ.",
        "amenities.coffee.title": "Cà Phê Sáng",
        "amenities.coffee.desc": "Thưởng thức cà phê Đà Lạt ngay tại hiên nhà, ngắm nhìn vườn cây mỗi buổi sớm.",
        "amenities.parking.title": "Bãi Đỗ Xe",
        "amenities.parking.desc": "Bãi đỗ xe rộng rãi, an toàn và miễn phí cho khách lưu trú.",
        "amenities.wifi.title": "Wifi Tốc Độ Cao",
        "amenities.wifi.desc": "Kết nối internet tốc độ cao, phù hợp cho cả làm việc và giải trí.",
        "amenities.location.title": "Vị Trí Thuận Tiện",
        "amenities.location.desc": "Gần trung tâm thành phố nhưng vẫn yên tĩnh, dễ dàng di chuyển đến các địa điểm.",

        // Destinations
        "destinations.title": "Điểm Đến Xung Quanh",
        "destinations.subtitle": "Khám phá những địa điểm tuyệt vời trong bán kính 20km",
        "destinations.nature": "&#127967; Thiên nhiên & Danh lam",
        "destinations.cafes": "&#9749; Cà phê & Quán xinh",
        "destinations.culture": "&#127983; Văn hóa & Kiến trúc",
        "destinations.langbiang.title": "Đỉnh LangBiang",
        "destinations.langbiang.desc": "Đỉnh núi cao 2.167m với tầm nhìn toàn cảnh Đà Lạt. Trekking hoặc đi Jeep lên đỉnh.",
        "destinations.langbiang.dist": "~5 km",
        "destinations.datanla.title": "Thác Datanla",
        "destinations.datanla.desc": "Thác nước hùng vĩ với máng trượt Alpine Coaster xuyên rừng thông.",
        "destinations.datanla.dist": "~12 km",
        "destinations.suoivang.title": "Hồ Suối Vàng (Golden Spring Lake)",
        "destinations.suoivang.desc": "Hồ nước nguyên sơ giữa đồi thông, phong cảnh hoang sơ tuyệt đẹp.",
        "destinations.suoivang.dist": "~8 km",
        "destinations.tuyenlam.title": "Hồ Tuyền Lâm",
        "destinations.tuyenlam.desc": "Hồ nước rộng lớn bao quanh bởi rừng thông, lý tưởng cho chèo thuyền và picnic.",
        "destinations.tuyenlam.dist": "~15 km",
        "destinations.valleylove.title": "Thung Lũng Tình Yêu",
        "destinations.valleylove.desc": "Thung lũng lãng mạn với vườn hoa, đồi cỏ xanh và hồ nước thơ mộng.",
        "destinations.valleylove.dist": "~7 km",
        "destinations.flower.title": "Vườn Hoa Đà Lạt",
        "destinations.flower.desc": "Vườn hoa rộng lớn trưng bày hàng trăm loài hoa đặc trưng của Đà Lạt.",
        "destinations.flower.dist": "~10 km",
        "destinations.melinh.title": "Mê Linh Coffee Garden",
        "destinations.melinh.desc": "Quán cà phê view đồi thông bạt ngàn, nằm trên đường đi LangBiang. Cà phê chồn nổi tiếng.",
        "destinations.melinh.dist": "~3 km",
        "destinations.laviet.title": "La Viet Coffee",
        "destinations.laviet.desc": "Quán cà phê specialty nổi tiếng với không gian xưởng rang và cà phê chất lượng cao.",
        "destinations.laviet.dist": "~10 km",
        "destinations.bonjour.title": "The Married Beans",
        "destinations.bonjour.desc": "Quán cà phê giữa vườn hồng và rau organic, không gian Đà Lạt chính hiệu.",
        "destinations.bonjour.dist": "~9 km",
        "destinations.inne.title": "In The Forest Cafe",
        "destinations.inne.desc": "Quán cà phê ẩn mình giữa rừng thông, kiến trúc gỗ hòa quyện với thiên nhiên.",
        "destinations.inne.dist": "~6 km",
        "destinations.truclam.title": "Thiền viện Trúc Lâm",
        "destinations.truclam.desc": "Thiền viện yên tĩnh trên đồi thông, đi cáp treo ngắm toàn cảnh hồ Tuyền Lâm.",
        "destinations.truclam.dist": "~16 km",
        "destinations.cathedral.title": "Nhà thờ Con Gà (Đà Lạt Cathedral)",
        "destinations.cathedral.desc": "Nhà thờ cổ biểu tượng của Đà Lạt, kiến trúc Pháp với tháp chuông hình con gà.",
        "destinations.cathedral.dist": "~11 km",
        "destinations.crazyhouse.title": "Crazy House (Biệt thự Hằng Nga)",
        "destinations.crazyhouse.desc": "Công trình kiến trúc độc đáo lấy cảm hứng từ Gaudí, như bước vào thế giới cổ tích.",
        "destinations.crazyhouse.dist": "~11 km",
        "destinations.trainstation.title": "Ga xe lửa Đà Lạt",
        "destinations.trainstation.desc": "Nhà ga cổ phong cách Art Deco từ 1938, di tích lịch sử quốc gia.",
        "destinations.trainstation.dist": "~12 km",

        // Testimonial
        "testimonial.quote": "\"Một góc nhỏ bình yên giữa Đà Lạt. Không gian xanh mát, chủ nhà thân thiện. Chắc chắn sẽ quay lại!\"",
        "testimonial.author": "— Khách lưu trú",

        // Contact
        "contact.title": "Liên Hệ & Đặt Phòng",
        "contact.address.label": "Địa chỉ",
        "contact.address.value": "Homestay The Myrtle, 4a Ankroet, Lang Biang - Đà Lạt, Lâm Đồng, Vietnam",
        "contact.phone.label": "Điện thoại",
        "contact.phone.value": "Liên hệ qua Google Maps",
        "contact.map_btn": "&#127758; Xem trên Google Maps",
        "contact.booking_btn": "&#128172; Nhắn Tin Đặt Phòng"
    },

    en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.gallery": "Gallery",
        "nav.destinations": "Explore",
        "nav.amenities": "Amenities",
        "nav.contact": "Contact",

        // Hero
        "hero.subtitle": "Welcome to",
        "hero.tagline": "Homestay & Garden",
        "hero.description": "A peaceful retreat in the heart of Da Lat<br>surrounded by lush gardens and poetic scenery",
        "hero.cta": "Book Now",

        // About
        "about.title": "About Us",
        "about.p1": "Homestay The Myrtle is nestled in the dreamy city of Da Lat, an ideal place to immerse your soul in the serenity of nature.",
        "about.p2": "With rustic wooden architecture, warm terracotta window frames and lush tropical gardens, The Myrtle gives you the feeling of living in a fairytale cottage in the forest.",
        "about.p3": "Every corner here is lovingly curated — from fern pots and purple bougainvillea to vintage wooden chairs — creating a vibrant yet utterly peaceful atmosphere.",
        "about.f1": "Lush green garden",
        "about.f2": "Rustic architecture",
        "about.f3": "Peaceful atmosphere",

        // Gallery
        "gallery.title": "Our Space",
        "gallery.subtitle": "Every corner is a painting",
        "gallery.img1": "Green facade",
        "gallery.img2": "Vintage wooden windows",
        "gallery.img3": "Dreamy pathway",
        "gallery.img4": "Fern garden",
        "gallery.img5": "Peaceful porch",
        "gallery.img6": "Surrounded by nature",
        "gallery.img7": "Reading corner",

        // Amenities
        "amenities.title": "Amenities",
        "amenities.subtitle": "Everything you need for a perfect getaway",
        "amenities.room.title": "Cozy Rooms",
        "amenities.room.desc": "Rooms with natural wood furniture, crisp white linens, and garden views.",
        "amenities.garden.title": "Tropical Garden",
        "amenities.garden.desc": "Spacious garden with hundreds of green plants, purple bougainvillea and ferns.",
        "amenities.coffee.title": "Morning Coffee",
        "amenities.coffee.desc": "Enjoy Da Lat coffee on the porch while watching the garden every morning.",
        "amenities.parking.title": "Free Parking",
        "amenities.parking.desc": "Spacious, safe and free parking for all guests.",
        "amenities.wifi.title": "High-Speed Wifi",
        "amenities.wifi.desc": "High-speed internet, suitable for both work and entertainment.",
        "amenities.location.title": "Great Location",
        "amenities.location.desc": "Close to city center yet peaceful, easy access to all attractions.",

        // Destinations
        "destinations.title": "Nearby Destinations",
        "destinations.subtitle": "Discover amazing places within a 20km radius",
        "destinations.nature": "&#127967; Nature & Landmarks",
        "destinations.cafes": "&#9749; Cafes & Scenic Spots",
        "destinations.culture": "&#127983; Culture & Architecture",
        "destinations.langbiang.title": "LangBiang Peak",
        "destinations.langbiang.desc": "A 2,167m mountain peak with panoramic views of Da Lat. Trek or take a Jeep to the summit.",
        "destinations.langbiang.dist": "~5 km",
        "destinations.datanla.title": "Datanla Waterfall",
        "destinations.datanla.desc": "Majestic waterfall with an Alpine Coaster sliding through pine forests.",
        "destinations.datanla.dist": "~12 km",
        "destinations.suoivang.title": "Golden Spring Lake",
        "destinations.suoivang.desc": "A pristine lake among pine hills with untouched, breathtaking scenery.",
        "destinations.suoivang.dist": "~8 km",
        "destinations.tuyenlam.title": "Tuyen Lam Lake",
        "destinations.tuyenlam.desc": "A vast lake surrounded by pine forests, ideal for boating and picnics.",
        "destinations.tuyenlam.dist": "~15 km",
        "destinations.valleylove.title": "Valley of Love",
        "destinations.valleylove.desc": "Romantic valley with flower gardens, green hills, and a dreamy lake.",
        "destinations.valleylove.dist": "~7 km",
        "destinations.flower.title": "Da Lat Flower Garden",
        "destinations.flower.desc": "Expansive garden showcasing hundreds of flower species unique to Da Lat.",
        "destinations.flower.dist": "~10 km",
        "destinations.melinh.title": "Me Linh Coffee Garden",
        "destinations.melinh.desc": "Hilltop cafe overlooking endless pine hills on the way to LangBiang. Famous for weasel coffee.",
        "destinations.melinh.dist": "~3 km",
        "destinations.laviet.title": "La Viet Coffee",
        "destinations.laviet.desc": "Renowned specialty coffee roastery with industrial-chic ambiance and premium beans.",
        "destinations.laviet.dist": "~10 km",
        "destinations.bonjour.title": "The Married Beans",
        "destinations.bonjour.desc": "Charming cafe nestled in a rose garden with organic vegetables. Quintessential Da Lat.",
        "destinations.bonjour.dist": "~9 km",
        "destinations.inne.title": "In The Forest Cafe",
        "destinations.inne.desc": "A hidden cafe deep in the pine forest with wooden architecture blending into nature.",
        "destinations.inne.dist": "~6 km",
        "destinations.truclam.title": "Truc Lam Zen Monastery",
        "destinations.truclam.desc": "Serene monastery atop pine hills, accessible by cable car with lake panoramas.",
        "destinations.truclam.dist": "~16 km",
        "destinations.cathedral.title": "Da Lat Cathedral (Chicken Church)",
        "destinations.cathedral.desc": "Iconic French colonial cathedral with a rooster-topped bell tower.",
        "destinations.cathedral.dist": "~11 km",
        "destinations.crazyhouse.title": "Crazy House (Hang Nga Villa)",
        "destinations.crazyhouse.desc": "Gaudí-inspired surreal architecture — like stepping into a fairytale world.",
        "destinations.crazyhouse.dist": "~11 km",
        "destinations.trainstation.title": "Da Lat Railway Station",
        "destinations.trainstation.desc": "Historic Art Deco station from 1938, a national heritage site.",
        "destinations.trainstation.dist": "~12 km",

        // Testimonial
        "testimonial.quote": "\"A peaceful little corner in Da Lat. Fresh green spaces, friendly hosts. Will definitely come back!\"",
        "testimonial.author": "— A happy guest",

        // Contact
        "contact.title": "Contact & Booking",
        "contact.address.label": "Address",
        "contact.address.value": "Homestay The Myrtle, 4a Ankroet, Lang Biang - Da Lat, Lam Dong, Vietnam",
        "contact.phone.label": "Phone",
        "contact.phone.value": "Contact via Google Maps",
        "contact.map_btn": "&#127758; View on Google Maps",
        "contact.booking_btn": "&#128172; Message to Book"
    },

    zh: {
        // Navigation
        "nav.home": "首页",
        "nav.about": "关于我们",
        "nav.gallery": "图片",
        "nav.destinations": "周边景点",
        "nav.amenities": "设施",
        "nav.contact": "联系",

        // Hero
        "hero.subtitle": "欢迎来到",
        "hero.tagline": "民宿与花园",
        "hero.description": "大叻市中心的宁静度假胜地<br>被郁郁葱葱的花园和诗意的风景所环绕",
        "hero.cta": "立即预订",

        // About
        "about.title": "关于我们",
        "about.p1": "The Myrtle民宿坐落于梦幻般的大叻市，是让您的心灵沉浸在宁静自然中的理想之所。",
        "about.p2": "质朴的木质建筑、温暖的赤陶色窗框和郁郁葱葱的热带花园，The Myrtle让您仿佛住在森林中的童话小屋。",
        "about.p3": "这里的每一个角落都经过精心呵护——从蕨类植物盆栽、紫色三角梅到复古木椅——营造出生动而又宁静的氛围。",
        "about.f1": "绿意盎然的花园",
        "about.f2": "质朴的建筑风格",
        "about.f3": "宁静的氛围",

        // Gallery
        "gallery.title": "我们的空间",
        "gallery.subtitle": "每个角落都是一幅画",
        "gallery.img1": "绿色外观",
        "gallery.img2": "复古木窗",
        "gallery.img3": "梦幻小径",
        "gallery.img4": "蕨类花园",
        "gallery.img5": "宁静的门廊",
        "gallery.img6": "自然环绕",
        "gallery.img7": "阅读角",

        // Amenities
        "amenities.title": "设施服务",
        "amenities.subtitle": "完美假期所需的一切",
        "amenities.room.title": "温馨客房",
        "amenities.room.desc": "天然木质家具、洁白床品、花园景观的舒适客房。",
        "amenities.garden.title": "热带花园",
        "amenities.garden.desc": "宽敞的花园，种植着数百种绿色植物、紫色三角梅和蕨类植物。",
        "amenities.coffee.title": "早晨咖啡",
        "amenities.coffee.desc": "每天清晨在门廊品味大叻咖啡，欣赏花园美景。",
        "amenities.parking.title": "免费停车",
        "amenities.parking.desc": "宽敞、安全且免费的停车场。",
        "amenities.wifi.title": "高速Wifi",
        "amenities.wifi.desc": "高速网络连接，适合工作和娱乐。",
        "amenities.location.title": "优越位置",
        "amenities.location.desc": "靠近市中心却依然宁静，方便前往各个景点。",

        // Destinations
        "destinations.title": "周边景点",
        "destinations.subtitle": "探索20公里范围内的精彩目的地",
        "destinations.nature": "&#127967; 自然与名胜",
        "destinations.cafes": "&#9749; 咖啡馆与美景",
        "destinations.culture": "&#127983; 文化与建筑",
        "destinations.langbiang.title": "朗比昂山顶",
        "destinations.langbiang.desc": "海拔2167米的山峰，可俯瞰大叻全景。可徒步或乘坐吉普车登顶。",
        "destinations.langbiang.dist": "~5 公里",
        "destinations.datanla.title": "达坦拉瀑布",
        "destinations.datanla.desc": "壮观的瀑布，配有穿越松林的高山过山车滑道。",
        "destinations.datanla.dist": "~12 公里",
        "destinations.suoivang.title": "金泉湖",
        "destinations.suoivang.desc": "松山间的原始湖泊，风景原始壮美。",
        "destinations.suoivang.dist": "~8 公里",
        "destinations.tuyenlam.title": "宣林湖",
        "destinations.tuyenlam.desc": "被松林环绕的广阔湖泊，适合划船和野餐。",
        "destinations.tuyenlam.dist": "~15 公里",
        "destinations.valleylove.title": "爱情谷",
        "destinations.valleylove.desc": "浪漫山谷，有花园、绿色山丘和梦幻湖泊。",
        "destinations.valleylove.dist": "~7 公里",
        "destinations.flower.title": "大叻花园",
        "destinations.flower.desc": "展示数百种大叻特有花卉的大型花园。",
        "destinations.flower.dist": "~10 公里",
        "destinations.melinh.title": "美灵咖啡园",
        "destinations.melinh.desc": "位于通往朗比昂路上的山顶咖啡馆，俯瞰无尽松山。以猫屎咖啡闻名。",
        "destinations.melinh.dist": "~3 公里",
        "destinations.laviet.title": "La Viet咖啡",
        "destinations.laviet.desc": "著名的精品咖啡烘焙坊，工业风格空间，优质咖啡豆。",
        "destinations.laviet.dist": "~10 公里",
        "destinations.bonjour.title": "The Married Beans",
        "destinations.bonjour.desc": "坐落在玫瑰花园中的迷人咖啡馆，配有有机蔬菜。典型大叻风情。",
        "destinations.bonjour.dist": "~9 公里",
        "destinations.inne.title": "森林咖啡馆",
        "destinations.inne.desc": "隐藏在松林深处的咖啡馆，木质建筑与自然融为一体。",
        "destinations.inne.dist": "~6 公里",
        "destinations.truclam.title": "竹林禅院",
        "destinations.truclam.desc": "松山上的宁静禅院，可乘缆车欣赏宣林湖全景。",
        "destinations.truclam.dist": "~16 公里",
        "destinations.cathedral.title": "大叻大教堂（鸡教堂）",
        "destinations.cathedral.desc": "大叻标志性的法式殖民教堂，钟楼顶部有公鸡雕塑。",
        "destinations.cathedral.dist": "~11 公里",
        "destinations.crazyhouse.title": "疯狂屋（恒娥别墅）",
        "destinations.crazyhouse.desc": "受高迪启发的超现实建筑——仿佛步入童话世界。",
        "destinations.crazyhouse.dist": "~11 公里",
        "destinations.trainstation.title": "大叻火车站",
        "destinations.trainstation.desc": "1938年建造的历史性装饰艺术风格车站，国家文化遗产。",
        "destinations.trainstation.dist": "~12 公里",

        // Testimonial
        "testimonial.quote": "\"大叻的一个宁静小角落。清新的绿色空间，热情的主人。一定会再来！\"",
        "testimonial.author": "— 满意的住客",

        // Contact
        "contact.title": "联系与预订",
        "contact.address.label": "地址",
        "contact.address.value": "The Myrtle民宿，4a Ankroet, Lang Biang - 大叻市，林同省，越南",
        "contact.phone.label": "电话",
        "contact.phone.value": "通过Google Maps联系",
        "contact.map_btn": "&#127758; 在Google Maps上查看",
        "contact.booking_btn": "&#128172; 发消息预订"
    },

    ja: {
        // Navigation
        "nav.home": "ホーム",
        "nav.about": "紹介",
        "nav.gallery": "ギャラリー",
        "nav.destinations": "周辺スポット",
        "nav.amenities": "設備",
        "nav.contact": "お問い合わせ",

        // Hero
        "hero.subtitle": "ようこそ",
        "hero.tagline": "ホームステイ＆ガーデン",
        "hero.description": "ダラット市の中心にある静かな隠れ家<br>緑豊かな庭園と詩的な風景に囲まれて",
        "hero.cta": "今すぐ予約",

        // About
        "about.title": "私たちについて",
        "about.p1": "The Myrtleホームステイは夢のようなダラット市に位置し、自然の静けさに心を浸すのに理想的な場所です。",
        "about.p2": "素朴な木造建築、温かみのあるテラコッタ色の窓枠、青々とした熱帯庭園。The Myrtleは森の中のおとぎ話のコテージに住んでいるような感覚を与えてくれます。",
        "about.p3": "ここのすべてのコーナーは丁寧に手入れされています——シダの鉢植え、紫のブーゲンビリア、ヴィンテージの木製椅子——すべてが活気がありながらも穏やかな雰囲気を作り出しています。",
        "about.f1": "緑豊かな庭園",
        "about.f2": "素朴な建築",
        "about.f3": "静かな空間",

        // Gallery
        "gallery.title": "空間",
        "gallery.subtitle": "すべてのコーナーが一枚の絵画",
        "gallery.img1": "緑のファサード",
        "gallery.img2": "ヴィンテージの木窓",
        "gallery.img3": "夢のような小道",
        "gallery.img4": "シダの庭",
        "gallery.img5": "静かなポーチ",
        "gallery.img6": "自然に囲まれて",
        "gallery.img7": "読書コーナー",

        // Amenities
        "amenities.title": "設備・サービス",
        "amenities.subtitle": "完璧な休暇に必要なすべて",
        "amenities.room.title": "居心地の良い客室",
        "amenities.room.desc": "天然木の家具、真っ白なリネン、庭園ビューの快適な客室。",
        "amenities.garden.title": "トロピカルガーデン",
        "amenities.garden.desc": "数百種の植物、紫のブーゲンビリア、シダが広がる庭園。",
        "amenities.coffee.title": "モーニングコーヒー",
        "amenities.coffee.desc": "毎朝ポーチでダラットコーヒーを楽しみながら庭園を眺めて。",
        "amenities.parking.title": "無料駐車場",
        "amenities.parking.desc": "広々とした安全な無料駐車場。",
        "amenities.wifi.title": "高速Wi-Fi",
        "amenities.wifi.desc": "仕事にも娯楽にも対応する高速インターネット。",
        "amenities.location.title": "便利な立地",
        "amenities.location.desc": "市街地に近くても静かで、各観光地へのアクセスも便利。",

        // Destinations
        "destinations.title": "周辺スポット",
        "destinations.subtitle": "半径20km以内の素敵な目的地を発見",
        "destinations.nature": "&#127967; 自然＆名所",
        "destinations.cafes": "&#9749; カフェ＆景勝地",
        "destinations.culture": "&#127983; 文化＆建築",
        "destinations.langbiang.title": "ランビアン山頂",
        "destinations.langbiang.desc": "標高2,167mの山頂からダラットの360度パノラマビュー。トレッキングまたはジープで登頂。",
        "destinations.langbiang.dist": "~5 km",
        "destinations.datanla.title": "ダタンラ滝",
        "destinations.datanla.desc": "松林を駆け抜けるアルパインコースター付きの壮大な滝。",
        "destinations.datanla.dist": "~12 km",
        "destinations.suoivang.title": "ゴールデンスプリング湖",
        "destinations.suoivang.desc": "松の丘に囲まれた手つかずの湖、息をのむ原始的な風景。",
        "destinations.suoivang.dist": "~8 km",
        "destinations.tuyenlam.title": "トゥエンラム湖",
        "destinations.tuyenlam.desc": "松林に囲まれた広大な湖、ボートやピクニックに最適。",
        "destinations.tuyenlam.dist": "~15 km",
        "destinations.valleylove.title": "愛の谷",
        "destinations.valleylove.desc": "花畑、緑の丘、夢のような湖があるロマンチックな谷。",
        "destinations.valleylove.dist": "~7 km",
        "destinations.flower.title": "ダラットフラワーガーデン",
        "destinations.flower.desc": "ダラット特有の数百種の花を展示する大規模な花園。",
        "destinations.flower.dist": "~10 km",
        "destinations.melinh.title": "メーリンコーヒーガーデン",
        "destinations.melinh.desc": "ランビアンへの途中にある丘の上のカフェ。松の丘のパノラマビュー。ジャコウネコーヒーで有名。",
        "destinations.melinh.dist": "~3 km",
        "destinations.laviet.title": "ラ・ヴィエットコーヒー",
        "destinations.laviet.desc": "インダストリアルな雰囲気の有名なスペシャルティコーヒー焙煎所。",
        "destinations.laviet.dist": "~10 km",
        "destinations.bonjour.title": "The Married Beans",
        "destinations.bonjour.desc": "バラ園の中にある魅力的なカフェ、オーガニック野菜付き。典型的なダラットの雰囲気。",
        "destinations.bonjour.dist": "~9 km",
        "destinations.inne.title": "イン・ザ・フォレストカフェ",
        "destinations.inne.desc": "松林の奥深くに隠れたカフェ、木造建築が自然と調和。",
        "destinations.inne.dist": "~6 km",
        "destinations.truclam.title": "チュックラム禅院",
        "destinations.truclam.desc": "松の丘の上の静かな禅院、ケーブルカーでトゥエンラム湖のパノラマを楽しめる。",
        "destinations.truclam.dist": "~16 km",
        "destinations.cathedral.title": "ダラット大聖堂（チキン教会）",
        "destinations.cathedral.desc": "鶏のシンボルがある鐘楼を持つダラットのアイコニックなフランス植民地時代の大聖堂。",
        "destinations.cathedral.dist": "~11 km",
        "destinations.crazyhouse.title": "クレイジーハウス（ハンガー邸）",
        "destinations.crazyhouse.desc": "ガウディにインスピレーションを得たシュールな建築——おとぎ話の世界に足を踏み入れたよう。",
        "destinations.crazyhouse.dist": "~11 km",
        "destinations.trainstation.title": "ダラット駅",
        "destinations.trainstation.desc": "1938年建造の歴史的アールデコ様式の駅、国家文化遺産。",
        "destinations.trainstation.dist": "~12 km",

        // Testimonial
        "testimonial.quote": "\"ダラットの静かな小さなコーナー。新鮮な緑の空間、フレンドリーなホスト。絶対にまた来ます！\"",
        "testimonial.author": "— 満足したゲスト",

        // Contact
        "contact.title": "お問い合わせ・ご予約",
        "contact.address.label": "住所",
        "contact.address.value": "The Myrtleホームステイ、4a Ankroet, Lang Biang - ダラット市、ラムドン省、ベトナム",
        "contact.phone.label": "電話",
        "contact.phone.value": "Google Mapsからお問い合わせ",
        "contact.map_btn": "&#127758; Google Mapsで見る",
        "contact.booking_btn": "&#128172; メッセージで予約"
    }
};

// ========================================
// Language switcher logic
// ========================================

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Save preference
    localStorage.setItem('myrtle-lang', lang);
}

function initI18n() {
    const saved = localStorage.getItem('myrtle-lang');
    const browserLang = navigator.language.slice(0, 2);
    const defaultLang = saved || (['vi', 'en', 'zh', 'ja'].includes(browserLang) ? browserLang : 'vi');

    setLanguage(defaultLang);

    // Bind buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
}

document.addEventListener('DOMContentLoaded', initI18n);
