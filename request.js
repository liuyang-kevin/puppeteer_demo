import fetch from "node-fetch";

const loginInfo = await fetch("https://auth.cma-cgm.com/as/r0KFJ/resume/as/authorization.ping?Language=en-GB", {
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "cookie": "f5avraaaaaaaaaaaaaaaa_session_=KGCMNPIODMMKAELCDBKKCIOEALMGFJJOONEINAMAMAGMKGIJLEEIMIMOEBNLJIEIIPIDLMCOPIEIFOHAKPIAFAFFLIAHIODBBPKOPGOMHEIBLAEALDPHLMFANDMHLBKF; TS01121815028=01d045bf44c1821df72ca3bff3b5027fcacff4425c8490e42a4570186040754285caaa60e31555abfdfe87b481722268ebd88e7cee; pf-accept-language=en; TS01121815=01d4e8f3f502e52a4d3042c59358dcd24fe4f0f3ab5fab79ddf31519a4849c2ba0b424594fe9eb60c56e559d7eda5a2572451c3335; f5avraaaaaaaaaaaaaaaa_session_=PNGKBKLIDCBKGCLJFELKODLKAHFALDHDLOKJEMIFHCCPOECHOIHIIDIBHNMOCMOFKIGDGPCJAIIGBFNADHAAGKGGMILLNGNLNLKCHDHOFJNDOPJKHIFAMOBDLNCOJAKA; dtCookie=v_4_srv_1_sn_LG4J351HT9ODQOQJKP8M1N3U8MHCQ9B5_perc_100000_ol_0_mul_1_app-3A0b422508580a7b79_0_app-3Ac276214421dd42e9_0_rcs-3Acss_0; rxVisitor=1640756662347B68HP9NAVO7ELDMBNCVSG55N6P32H10R; _ga=GA1.2.958384086.1640794414; _gid=GA1.2.154020464.1640794414; _gat_UA-43050752-1=1; _pk_id.1.d313=cefd07a656cc358a.1640794414.; _pk_ses.1.d313=1; MustRelease=21.0.13.f06923d7; TS01280c6f=01d4e8f3f597067e331e0d4121371d36fbe74c230338b19c140ecdbf3bb793eac8dd429b4714a86d5372df2d4b20330a5154c38eed; HasBeenConnected=1; _cs_c=2; _cs_cvars=%7B%221%22%3A%5B%22partnerCode%22%2C%22undefined%22%5D%2C%222%22%3A%5B%22userId%22%2C%22undefined%22%5D%2C%223%22%3A%5B%22hostname%22%2C%22www.cma-cgm.com%22%5D%7D; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Dec+30+2021+00%3A13%3A54+GMT%2B0800+(China+Standard+Time)&version=6.23.0&isIABGlobal=false&hosts=&genVendors=&consentId=eecd048d-e007-42b6-ac99-42445eb3ffbe&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&AwaitingReconsent=false; PF=v16qCgMEyGK0YR1D0Inekj; _cs_id=7cbe3918-a073-aae6-ef21-22e4ac81638b.1640756665.8.1640794439.1640793419.1640190127.1674920665734; _cs_s=6.0.0.1640796239071; rxvt=1640796239246|1640792923343; dtPC=1$394436118_835h-vSSHRAKAHBNUSOJTNUPPBLIRWOSKKCSAS-0; dtLatC=2; datadome=waiQGCleu~z1Yhit1onvxpTt~uODh23EloYseNEj4shwW2D.hILVGGxWL-B8Bj5lcPXi2jKILCoqNxN_PqjN9BrjgYn3.drL6hJYy5PD5AKQ~z4AEX2sSjGbvePy3Z4; dtSa=-",
        "Referer": "https://auth.cma-cgm.com/",
        "Referrer-Policy": "origin"
    },
    "body": "pf.username=bookingonline%40ccnl.com.cn&pf.pass=CCLtsn123&pf.passwordreset=&pf.ok=clicked&pf.cancel=&pf.adapterId=CMACGM",
    "method": "POST"
});

// if (loginInfo.status === 200) {
//     const aaa = await fetch("https://www.cma-cgm.com/ebusiness/pricing/getexcludedlocation/CNTXG/ITGOA/null", {
//         "headers": loginInfo.headers,
//         "body": null,
//         "method": "GET"
//     });
//     console.log(await aaa.text());


//     const bbb = await fetch("https://ec.walkme.com/event/tell", {
//         "headers": aaa.headers,
//         "body": "{\"_static\":true,\"Wm-Client-Timestamp\":1640795353232}\n{\"_enc\":\"bbd%=rk|=3b/'+2%=zqpezrvk=3zls~y%=zsv}pr=3b/+',%=wk{vh=3/).-%=kwxvzw=d%=qzzm|l=3b=(1*.1/.=%=qpvlmzi=3=LP|~R=%=zr~q=d%=lp=3b=/..1+))+1/1)&=%=qpvlmzi=3=zrpmw\\\\=%=zr~q=d%=mzlhpm}=d%=iqz=3b=/~'}-~,/()(-2)+z~2&*{+2z,&(2~|+},'+|=%={Vjzl|=3b=Q\\\\=%=zr~q=d%=lm~Imzlj=3.%=rmpyk~so=3/%=iqz=3=WE=%=zx~jxq~s=3.2%={Vrmzo=3=zw|~\\\\=%=z|mjpL{Vjz=3='+{/(+*|~+{/2&+{~2*,}+2z-)y2.-&'~*&}=%={Vjz=3=/,*+.z.~~y)-'(z}z,z+/{')y+|*|,~{=%={Vj=d%=rh=3=z){.*(--*'|'2/)|}2){}+2(///2+)y/--.,=%={Vl=3b=-1/1*=%=zo=3=/(~).z..2).*,--2+.-..-/-=%=}vs=3=.)1/1*=%=~m}~=d%=qpvlmzi=3b=rx|~r|fr0rp|1rx|2~r|1hhh00%lokkw=%=mzmmzyzm=3=仨抺早卬丵丟叉莨?c?RX\\\\?^R\\\\=%=zskvk=3=y*-/++)yy-/~')-&*/z+~/{'}&(|///)=%={Vkvlvi=3zls~y%=zr~myVlv=3b=fyv{pr\\\"z{pRklzjnzm =%=w|m~zl=3=xqvkpjN2kq~klqv0xqv|vmo0llzqvlj}z0=%=zr~qwk~o=3=rp|1rx|2~r|1hhh=%=zr~qklpw=3=%lokkw=%=sp|pkpmo=d%=qpvk~|ps=3=z/})*|(}z+.+z'''z+,+{)~'&'(.-|*'=%={Vqvh=3b./,(%=zrvK{~ps=3),(,&/*&(/+).%=km~kLi~q=d%=xqvrvk=d%=gk|=3/'&-*,*&(/+).%=zrvk=3b-%=}rvs|=3=qpkkj}=%=zofk=d%=|lvr=3b=仨抺皛戎叉莨=%=kgzk=3=QPKKJ]?RMPY?QPVK\\\\ZL?B=Czqpe2w|m~zl2opk=C\\\"{vDIV[=%=fmzjNpkj~=3=B.Dq~ol0B.Dq~ol0qpkkj}\\\"zofk9fm~rvmo1qpkkj}2p1ksj~yz{22qpkkj}2sz1qpkkj}2sz1B.Dqpkkj}0kqzkqp|@@rzkv2rmpy2sz1B.Div{0rzkv2rmpy2sz1qpvk|~1B.Div{0rmpy2sz1B.Drmpy0B.Dqpvk|zl0zqpe2w|m~zl1zmjkm~oz{2kgzq1zqpe2w|m~zl2opk<B.Div{0qv~r@@zqpe2s1xqv|vmo<B.Dqv~r0B.Div{0qv~r@@zqpe2s1B-Div{0f{p}<B.Df{p}0B.Dsrkw=%=wk~og=d%=kqzrzsz=3=qhp{zljpr=%=zofk=d\"}",
//         "method": "POST"
//     });

//     // console.log(await bbb.text());

//     const xxx = await fetch("https://www.cma-cgm.com/ebusiness/pricing/getbestoffer", {
//         "headers": bbb.headers,
//         "body": "{\"Pol\":\"CNTXG\",\"Pod\":\"ITGOA\",\"NumberOfContainers\":1,\"EquipmentSizeType\":\"45HC\",\"WeightPerContainer\":100,\"PartnerCodes\":[\"0002046118\"],\"CommodityCode\":\"FAK\",\"ShipCompCode\":\"0001\",\"SimulationDate\":\"2021-12-31\",\"PricingGroups\":[{\"pricingGroupCif\":\"11599\",\"pricingGroupFob\":\"11599\",\"shippingCompany\":\"0001\"},{\"pricingGroupCif\":\"4280\",\"pricingGroupFob\":\"4280\",\"shippingCompany\":\"0002\"},{\"pricingGroupCif\":\"4040\",\"pricingGroupFob\":\"4040\",\"shippingCompany\":\"0011\"},{\"pricingGroupCif\":\"10791\",\"pricingGroupFob\":\"10791\",\"shippingCompany\":\"0015\"}],\"PricingGroupDetails\":[{\"PricingGroupId\":11599,\"IQexcludedPartners\":null,\"ShippingCompany\":\"0001\",\"SpotAccess\":\"contract\",\"WithoutOfferDisplay\":\"infoOnly\",\"NextDepartureScheduleLimit\":35,\"DigitalAllocationsCheck\":false,\"DigitalAllocationsDisplay\":\"infoOnly\"},{\"PricingGroupId\":4280,\"IQexcludedPartners\":null,\"ShippingCompany\":\"0002\",\"SpotAccess\":\"contract\",\"WithoutOfferDisplay\":\"infoOnly\",\"NextDepartureScheduleLimit\":35,\"DigitalAllocationsCheck\":false,\"DigitalAllocationsDisplay\":\"infoOnly\"},{\"PricingGroupId\":4040,\"IQexcludedPartners\":null,\"ShippingCompany\":\"0011\",\"SpotAccess\":\"spotContract\",\"WithoutOfferDisplay\":\"infoOnly\",\"NextDepartureScheduleLimit\":35,\"DigitalAllocationsCheck\":false,\"DigitalAllocationsDisplay\":\"infoOnly\"},{\"PricingGroupId\":10791,\"IQexcludedPartners\":null,\"ShippingCompany\":\"0015\",\"SpotAccess\":\"contract\",\"WithoutOfferDisplay\":\"infoOnly\",\"NextDepartureScheduleLimit\":35,\"DigitalAllocationsCheck\":false,\"DigitalAllocationsDisplay\":\"infoOnly\"}],\"Poo\":null,\"Fpd\":null,\"MyPricesContractsExist\":true,\"IsIQExcluded\":false,\"IsIQExcludedBestOffers\":false,\"IsBestOfferNearByPortSelected\":false,\"IsFromIQSearch\":true}",
//         "method": "POST"
//     });


//     // const xxx = await fetch("https://www.cma-cgm.com/ebusiness/pricing/getbestoffer", {
//     //     "headers": loginInfo.headers,
//     //     "body": "{\"Pol\":\"CNTXG\",\"Pod\":\"ITGOA\",\"NumberOfContainers\":1,\"EquipmentSizeType\":\"45HC\",\"WeightPerContainer\":100,\"PartnerCodes\":[\"0002046118\"],\"CommodityCode\":\"FAK\",\"ShipCompCode\":\"0001\",\"SimulationDate\":\"2021-12-31\",\"PricingGroups\":[{\"pricingGroupCif\":\"11599\",\"pricingGroupFob\":\"11599\",\"shippingCompany\":\"0001\"},{\"pricingGroupCif\":\"4280\",\"pricingGroupFob\":\"4280\",\"shippingCompany\":\"0002\"},{\"pricingGroupCif\":\"4040\",\"pricingGroupFob\":\"4040\",\"shippingCompany\":\"0011\"},{\"pricingGroupCif\":\"10791\",\"pricingGroupFob\":\"10791\",\"shippingCompany\":\"0015\"}],\"PricingGroupDetails\":[{\"PricingGroupId\":11599,\"IQexcludedPartners\":null,\"ShippingCompany\":\"0001\",\"SpotAccess\":\"contract\",\"WithoutOfferDisplay\":\"infoOnly\",\"NextDepartureScheduleLimit\":35,\"DigitalAllocationsCheck\":false,\"DigitalAllocationsDisplay\":\"infoOnly\"},{\"PricingGroupId\":4280,\"IQexcludedPartners\":null,\"ShippingCompany\":\"0002\",\"SpotAccess\":\"contract\",\"WithoutOfferDisplay\":\"infoOnly\",\"NextDepartureScheduleLimit\":35,\"DigitalAllocationsCheck\":false,\"DigitalAllocationsDisplay\":\"infoOnly\"},{\"PricingGroupId\":4040,\"IQexcludedPartners\":null,\"ShippingCompany\":\"0011\",\"SpotAccess\":\"spotContract\",\"WithoutOfferDisplay\":\"infoOnly\",\"NextDepartureScheduleLimit\":35,\"DigitalAllocationsCheck\":false,\"DigitalAllocationsDisplay\":\"infoOnly\"},{\"PricingGroupId\":10791,\"IQexcludedPartners\":null,\"ShippingCompany\":\"0015\",\"SpotAccess\":\"contract\",\"WithoutOfferDisplay\":\"infoOnly\",\"NextDepartureScheduleLimit\":35,\"DigitalAllocationsCheck\":false,\"DigitalAllocationsDisplay\":\"infoOnly\"}],\"Poo\":null,\"Fpd\":null,\"MyPricesContractsExist\":true,\"IsIQExcluded\":false,\"IsIQExcludedBestOffers\":false,\"IsBestOfferNearByPortSelected\":false,\"IsFromIQSearch\":true}",
//     //     "method": "POST"
//     // });

//     // console.log(await xxx.text())
// }

// // console.log(loginInfo);


const sdfds = await fetch("https://www.cma-cgm.com/ebusiness/pricing/getexcludedlocation/CNTXG/ITGOA/null", {
    "headers": {
      "__requestverificationtoken": "b48PsjRK5sKlXCZjXIPZUbcPKeEAgXvXovC3N4uCoQZWobt_10pJ5fyevmwZ4mscVsUMzcQFyjypYNc8706c3nPy2OleM4q-WS-5cCvBo517iv6nfZNoHz5pblxs2pozrFD-wLB0L16TnjscrG9pTw2",
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "dtCookie=v_4_srv_1_sn_LG4J351HT9ODQOQJKP8M1N3U8MHCQ9B5_perc_100000_ol_0_mul_1_app-3A0b422508580a7b79_0_app-3Ac276214421dd42e9_0_rcs-3Acss_0; rxVisitor=1640756662347B68HP9NAVO7ELDMBNCVSG55N6P32H10R; Human_Search=1; _ga=GA1.2.958384086.1640794414; _gid=GA1.2.154020464.1640794414; _pk_id.1.d313=cefd07a656cc358a.1640794414.; _pk_ses.1.d313=1; MustRelease=21.0.13.f06923d7; TS01280c6f=01d4e8f3f597067e331e0d4121371d36fbe74c230338b19c140ecdbf3bb793eac8dd429b4714a86d5372df2d4b20330a5154c38eed; HasBeenConnected=1; _cs_c=2; CMACookie=urfoftgyljxfgnfx1r5lykp5; _cs_cvars=%7B%221%22%3A%5B%22partnerCode%22%2C%220002046118%22%5D%2C%222%22%3A%5B%22userId%22%2C%22P00647279%22%5D%2C%223%22%3A%5B%22hostname%22%2C%22www.cma-cgm.com%22%5D%7D; __RequestVerificationToken=24Pm-Uku1mDqgL-pkMN-G-XiVBzKEYq2GFcBZ0E_7ogS9dnlr9WbmronfaDLkIwIGYy7KZQBi8p1duL2dxkJRsq5K5fT7XAsjlMX4T1x0Ao1; .AspNet.Cookies=gtFIzMqw04bI5z4TxWQGmbXibm7h9Yg81DdxeFcfiockJD8L0378q4E-0OJ9Tg8SNO7ynN0ThjIv94tU2RHRFLOS2Mf2q-rMe4G5Xki3phWvsDGNkzroJNhm1Qllh6dTZ0U-rbs7fdld9Hq_Zda4PTbrmbHZKsGe-TJCFBMMMUj-svAyHI5so2SGDsCp-KLqcVCsH-C8sudSMQqddSa5IEk69c3EH6YOq7P1-s0S4a8; TS01121815=01d4e8f3f5f4ff79129a03345d0ffa4f315fa72e207a2b53be0025a94e4a62709c063404ed85175c3164a264b89033e2f269695d69; TS01121815028=01d045bf44dacbd39f943066c48d591c28a28544dff003d36eea6830b7566742abc93e10b36b87a2b4edb360a1c783f89aaff22308; TS01a14b2c=013e6e66832b59260dadf0053a80f2e143429763332b9179365949539dbdc3e7d205960a5564d79ce146373f55e1d7481f77df8e1842680957797afe01fa5d129b4511f070f3a59a386ea7916b793d86fe8b16e5add5b957f5d131bb2902f3707e50338018f0d661e88eeff511e7a3a786a23190686e004f8c0beb64d99e9fd1e4852e7d9e; dtSa=-; dtLatC=362; _cs_id=7cbe3918-a073-aae6-ef21-22e4ac81638b.1640756665.8.1640795100.1640793419.1640190127.1674920665734; _cs_s=8.0.0.1640796900243; rxvt=1640796900997|1640792923343; dtPC=1$395095187_197h-vSSHRAKAHBNUSOJTNUPPBLIRWOSKKCSAS-0; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Dec+30+2021+00%3A25%3A02+GMT%2B0800+(China+Standard+Time)&version=6.23.0&isIABGlobal=false&hosts=&genVendors=&consentId=eecd048d-e007-42b6-ac99-42445eb3ffbe&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&AwaitingReconsent=false; datadome=h_tE.0wEkzDqE.vhABMylEdQ6FO685uJ~8Jm-o3ht38fmC4Avx80Ku13D42F0TE9s_8m26LtYRD6rsGdhrTIiruLsmUK-YuhtisPw5QuaLYC3N7suPhJ_FSduRdMSpi",
      "Referer": "https://www.cma-cgm.com/ebusiness/pricing/instant-Quoting?requestMode=modify",
      "Referrer-Policy": "no-referrer-when-downgrade"
    },
    "body": null,
    "method": "GET"
  });

console.log(sdfds.ok);
console.log(sdfds.headers);
// console.log(await sdfds.text());