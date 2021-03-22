//首页动态创建数据
/* data	object	推荐位信息列表
news_id	string	新闻ID(该版块内容第一个永远为新闻，新闻ID用于获取新闻详情时使用)
title	string	（新闻/外链）标题
brief	string	（新闻/外链）简介
re_cover	string	推荐位封面图(用在首页的推荐位置，只在新闻信息携带)
frontcover	string	首页外链地址封面图
link	string	推荐位外链  */
var newData = [{
        brief: "Recently, Chengdu Kanghong Pharmaceutical Co., Ltd. announced that it has received the Drug Registration Certificate ...",
        frontcover: "/kh_en_admin/Uploads/Commondity/20200715/20200715120302_27277.png",
        news_id: "7",
        re_cover: "/kh_en_admin/Uploads/Commondity/20200715/20200715120208_66569.png",
        title: "Conbercept Gets Approved in Mongolia"
    },
    {
        brief: "Two global randomized, double-masked, multi-center phase III PANDA clinical trials for Conbercept.",
        frontcover: "/kh_en_admin/Uploads/Commondity/20200709/20200709174112_16361.jpg",
        link: "http://kh.bysening.com/panda.html",
        title: "Conbercept phase III Clinical De-velopment Program"
    },
    {
        brief: "Established since 1996, Kanghong is one of the leading pharmaceutical companies in Mainland China, with over ...",
        frontcover: "/kh_en_admin/Uploads/Commondity/20200804/20200804212416_77512.png",
        link: "http://kh.bysening.com/about_us.html#stories",
        title: "The Development Course of Kanghong"
    }
];



/*
    news_id	string	新闻唯一ID
title	string	新闻标题
brief	string	新闻简介
addtime	string	新闻添加或修改时间
*/
var pressData = [{
        addtime: "1595582720",
        brief: "Conbercept is a promising option for the treatment of wet AMD, according to a systematic review and meta-analysis of randomized controlled trials carried out in China, where the VEGF inhibitor was developed.",
        news_id: "19",
        title: "Meta-analysis: Conbercept a promising option for AMD"
    },
    {
        addtime: "1595582702",
        brief: "IOPtima, the maker of the IOPtiMate system for the surgical treatment of glaucoma, was sold to Chinese pharmaceutical company Chengdu Kanghong Pharmaceutical Group. The transaction will be executed in four stages, the first starting with a $7 million investment in IOPtima. In the next stages, Chengdu Kanghong will acquire all shares of IOPtima gradually until 2021. At the same time Chengdu Kanghong will be IOPtima's distributor in China.",
        news_id: "4",
        title: "IOPtima Acquired by Chinese Pharmaceutical Group Chengdu Kanghong"
    },
    {
        addtime: "1595394165",
        brief: "Conbercept is a promising option for the treatment of wet AMD, according to a systematic review and meta-analysis of randomized controlled trials carried out in China, where the VEGF inhibitor was developed.",
        news_id: "16",
        title: "Meta-analysis: Conbercept a promising option for AMD"
    }
];


/*
    title	string	标题
brief	string	简介
frontcover	string	封面图
link	string	外链地址
*/
var linkData = [{
        brief: "18 clinically approved products have successfully launched in China and generated about $460M revenue in 2019.",
        frontcover: "/kh_en_admin/Uploads/Commondity/20200715/20200715120556_53130.png",
        link: "http://kh.bysening.com/products.html",
        title: "Approved Products"
    },
    {
        brief: "Kanghong believes that the perfection of a product is determined by its design, including the design of the molecular structure…",
        frontcover: "/kh_en_admin/Uploads/Commondity/20200715/20200715120713_11050.png",
        link: "http://kh.bysening.com/quality.html#system",
        title: "Quality System"
    }
];