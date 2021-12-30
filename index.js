// const puppeteer = require('puppeteer');
import puppeteer from "puppeteer";

const username = 'bookingonline@ccnl.com.cn';
const password = 'CCLtsn123';

const gotoWaittingOpt = {
    timeout: 60 * 1000,
    waitUntil: [
        'load',              //等待 “load” 事件触发
        'domcontentloaded',  //等待 “domcontentloaded” 事件触发
        // 'networkidle0',      //在 500ms 内没有任何网络连接
        // 'networkidle2'       //在 500ms 内网络连接个数不超过 2 个
    ]
};

const url = 'https://www.cma-cgm.com/';
async function getindex(url) {
    const browser = await puppeteer.launch({  // 一个浏览器对象
        headless: false, // puppeteer的功能很强大，但这里用不到无头，就关了
        defaultViewport: { width: 1440, height: 780 },
        ignoreHTTPSErrors: false, //忽略 https 报错
        args: [            //启动 Chrome 的参数，详见上文中的介绍
            '--window-size=1440,780',
            // '-disable-gpu', // GPU硬件加速
            '-disable-dev-shm-usage', // 创建临时文件共享内存
            '-disable-setuid-sandbox', // uid沙盒
            '-no-first-run', // 没有设置首页。在启动的时候，就会打开一个空白页面。
            '-no-sandbox', // 沙盒模式
            '-no-zygote',
            '-single-process', // 单进程运行
        ],
    });
    const page = await browser.newPage(); // 创建一个新页面
    await page.setRequestInterception(true);
    page.on('request', req => {
        if (['image', 'stylesheet', 'font'].includes(req.resourceType())) {
            return req.abort();
        }

        console.log(req.url());
        console.log(req.resourceType());
        return req.continue();
    });
    //注册一个 Node.js 函数，在浏览器里运行
    await page.exposeFunction('md5', text =>
        `crypto.createHash('md5').update(text).digest('hex')`
    );
    //通过 page.evaluate 在浏览器里执行删除无用的 iframe 代码
    await page.evaluate(async () => {
        let iframes = document.getElementsByTagName('iframe');
        for (let i = 3; i < iframes.length - 1; i++) {
            let iframe = iframes[i];
            if (iframe.name.includes("frameBody")) {
                iframe.src = 'about:blank';
                try {
                    iframe.contentWindow.document.write('');
                    iframe.contentWindow.document.clear();
                } catch (e) { }
                //把iframe从页面移除
                iframe.parentNode.removeChild(iframe);
            }
        }
        //在页面中调用 Node.js 环境中的函数
        const myHash = await window.md5('PUPPETEER');
        console.log(`md5 of is ${myHash}`);
    });




    await page.goto(url, gotoWaittingOpt);
    const loginBtn = await page.$('a.o-button.primary[href="/home/signin"]');
    //等待页面跳转完成，一般点击某个按钮需要跳转时，都需要等待 page.waitForNavigation() 执行完毕才表示跳转成功
    await Promise.all([
        loginBtn.click(),
        page.waitForNavigation()
    ]);

    const emailInput = await page.$('input#login-email');
    await emailInput.type(username, { delay: 20 });
    const passwordInput = await page.$('input#login-password');
    await passwordInput.type(password, { delay: 20 });
    const signinBtn = await page.$('body > div > div.main.clearfix > div.login > form > fieldset > div.pure-controls > button');
    await signinBtn.click();
    await page.waitForNavigation();
    await page.goto('https://www.cma-cgm.com/ebusiness/pricing/instant-Quoting', gotoWaittingOpt)
    // await Promise.all([
    //     signinBtn.click(),
    //     page.waitForNavigation(),
    //     page.goto('https://www.cma-cgm.com/ebusiness/pricing/instant-Quoting', gotoWaittingOpt)
    // ]);



    // const startPortInput = await page.$('#top-search-zone > section > form > fieldset:nth-child(1) > div > div.port-choice > div.el-form-item.is-no-asterisk.pol-point.icon.anchor.is-required > div > div > div.el-input > input');
    // await startPortInput.type('xxxxxx', { delay: 20 });
    // const passwordInput = await page.$('input#login-password');
    // await passwordInput.type(password, { delay: 20 });
    // const signinBtn = await page.$('body > div > div.main.clearfix > div.login > form > fieldset > div.pure-controls > button');
    // await Promise.all([
    //     signinBtn.click(),
    //     page.waitForNavigation(),
    //     page.goto('https://www.cma-cgm.com/ebusiness/pricing/instant-Quoting', gotoWaittingOpt)
    // ]);



    const data = 'aaaa';
    // await sleep(60000); // 等待第二次跳转完成
    // const data = await page.eval('.UG_list_b', (lists) => { // 相当于document.querySelectorAll('.UG_list_b')
    //     var newarr = [Array.from(lists)[0]] // 因为只要第一个，所以把其他的去掉了，若要所有的结果直接取Array.from(lists)即可
    //     return newarr.map(node => { // 遍历数组选择标题
    //         const title = node.querySelector('.list_des .list_title_b a').innerText;
    //         return title;
    //     })
    // });
    // browser.close(); // 关闭浏览器
    return data;
}

getindex(url)
    .then(res => {
        console.log(res);
    })
