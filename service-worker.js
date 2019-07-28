                        importScripts("/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"//about/privacy/index.html","revision":"5f0168b8663a649c2773e5a4ca764831"},{"url":"//about/contact/index.html","revision":"801278a814f2066e622003441efbabf9"},{"url":"//about/index.html","revision":"e03cf1dda25ec3f6fd27220a18835893"},{"url":"//404.html","revision":"f50cd46d0b00216d8178fd3545b081bf"},{"url":"//1/index.html","revision":"92f4693a7359e58cb311e043dcef2fe6"},{"url":"//index.html","revision":"0220750cef444372fc5aa0574a832324"},{"url":"//comics/000007/index.html","revision":"3e8bad531ea50a28714ab04b99a0fe58"},{"url":"//comics/000004/index.html","revision":"14565388215fd29d3590793b41f556b0"},{"url":"//comics/000001/index.html","revision":"c5d1e9550dab57592e95d7d34e8a32f7"},{"url":"//comics/000005/index.html","revision":"d282d44cd4cf3c26e53e0c5a89d59ef4"},{"url":"//comics/000002/index.html","revision":"d2075b4911e008302632f146a56b1e64"},{"url":"//comics/000006/index.html","revision":"dd6b2bb004c0893e6978193c45b3b355"},{"url":"//comics/000003/index.html","revision":"69c83fda3b5d1cf0d5bad94a554da16f"},{"url":"//sw-register.js","revision":"d1036e35e082c1fb692ab208ff18ef12"},{"url":"//service-worker.js","revision":"ea2b11d10b6fd0f5e790a7c0f0e54191"},{"url":"//css/styles.css","revision":"e0c57d004a79553397566f13ce8bb053"},{"url":"//images/favicon.svg","revision":"49aa0c325261e5a3c74feeff3ec65115"},{"url":"//images/test/comic.svg","revision":"1bb59841b585d699393c73598058ffae"},{"url":"//images/test/title.svg","revision":"6779bc9a588bfeef53254d35c842ce46"}];
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
