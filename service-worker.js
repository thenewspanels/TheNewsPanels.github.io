                        importScripts("/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"//about/privacy/index.html","revision":"7824ebaf8b78fce839e16bd2757573ac"},{"url":"//about/contact/index.html","revision":"1243f6e2156a6be298c180b697cb71a7"},{"url":"//about/index.html","revision":"139f5d4bc0392f291e6d00c22204fb8e"},{"url":"//404.html","revision":"9f517a853a73e4cbbd7657959e3b6286"},{"url":"//1/index.html","revision":"0efe11a3816e45894b65a026089eebc2"},{"url":"//index.html","revision":"0220750cef444372fc5aa0574a832324"},{"url":"//comics/000007/index.html","revision":"3e8bad531ea50a28714ab04b99a0fe58"},{"url":"//comics/000004/index.html","revision":"14565388215fd29d3590793b41f556b0"},{"url":"//comics/000001/index.html","revision":"c5d1e9550dab57592e95d7d34e8a32f7"},{"url":"//comics/000005/index.html","revision":"d282d44cd4cf3c26e53e0c5a89d59ef4"},{"url":"//comics/000002/index.html","revision":"d2075b4911e008302632f146a56b1e64"},{"url":"//comics/000006/index.html","revision":"dd6b2bb004c0893e6978193c45b3b355"},{"url":"//comics/000003/index.html","revision":"69c83fda3b5d1cf0d5bad94a554da16f"},{"url":"//sw-register.js","revision":"2b4cfaa4b0285410370975191ef931c6"},{"url":"//service-worker.js","revision":"ea2b11d10b6fd0f5e790a7c0f0e54191"},{"url":"//css/styles.css","revision":"e0c57d004a79553397566f13ce8bb053"},{"url":"//images/favicon.svg","revision":"49aa0c325261e5a3c74feeff3ec65115"},{"url":"//images/test/comic.svg","revision":"1bb59841b585d699393c73598058ffae"},{"url":"//images/test/title.svg","revision":"6779bc9a588bfeef53254d35c842ce46"}];
            workbox.core.setCacheNameDetails({
    prefix: 'the-news-panels',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /images/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
